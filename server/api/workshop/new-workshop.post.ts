import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "@/types/supabase"
import {Day, Workshop} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const workshop: Workshop = await readBody<Workshop>(event)
    const supabase = await serverSupabaseClient<Database>(event)

    const {data: workshopData, error} = await supabase.from("Workshop").upsert({
        name: workshop.name,
        description: workshop.description,
        subject_id: workshop.Subject.uuid ?? null,
    }).select().single().returns<Workshop>()


    await Promise.all(
        workshop.Teacher.map(async (teacher) => {
            await supabase.from("Workshop_Teacher").upsert({
                teacher_id: teacher.uuid,
                workshop_id: workshopData.uuid,
            })

        }),
    )

    await Promise.all(
        workshop.Student.map(async (student) => {
            await supabase.from("Subscription").insert({
                student_id: student.uuid,
                workshop_id: workshopData.uuid
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

    await Promise.all(
        workshop.Day.map(async (day) => {
            await supabase.from("Day").insert({
                start_time: day.start_time,
                end_time: day.end_time,
                date: day.date,
                workshop_id: workshopData.uuid
            })
        }),
    )

    if (error) {
        throw createError({message: error.message, statusCode: 500})
    }
})