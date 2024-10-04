import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "@/types/supabase"
import {Workshop} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const workshop : Workshop = await readBody<Workshop>(event)
    const supabase = await serverSupabaseClient<Database>(event)

    const { data: workshopData, error } = await supabase.from("Workshop").upsert({
        name: workshop.name,
        description: workshop.description,
        start_date: workshop.start_date,
        end_date: workshop.end_date,
        is_active: workshop.is_active,
        subject_id: workshop.Subject[0].uuid ?? null,
    }).select().single().returns<Workshop>()

    await Promise.all(
        workshop.Teacher.map(async (teacher) => {
            await supabase.from("Workshop_Teacher").insert({
                teacher_id: teacher.uuid,
                workshop_id: workshopData.uuid,
            })
        }),
    )

    await Promise.all(
        workshop.Student.map(async (student) => {

            await supabase.from("Subscription").insert({
                student_id: student.uuid,
                workshop_id: workshop.uuid
            })
        }),
    )

    await Promise.all(
        workshop.Category.map(async (category) => {

            await supabase.from("Workshop_Category").insert({
                category_id: category.uuid,
                workshop_id: workshopData.uuid
            })
        }),
    )

    if (error) {
        throw createError({ message: error.message, statusCode: 500 })
    }
})