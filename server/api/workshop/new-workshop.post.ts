import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "@/types/supabase"
import {Workshop} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const workshop : Workshop = await readBody<Workshop>(event)
    const supabase = await serverSupabaseClient<Database>(event)


    const { error } = await supabase.from("Workshop").insert({
        name: workshop.name,
        description: workshop.description,
        startdate: workshop.startdate,
        enddate: workshop.enddate,
        is_active: workshop.is_active,
        subject: workshop.subject,
        teachers: workshop.teachers,
        students: workshop.students
    })

    if (error) {
        throw createError({ message: error.message, statusCode: 500 })
    }
})