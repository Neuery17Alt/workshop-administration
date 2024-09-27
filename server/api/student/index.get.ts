import { serverSupabaseClient } from "#supabase/server"
import type { Database } from "~/types/supabase"
import {Student} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient<Database>(event)
    const { data: students } = await supabase.from("Student").select("*").returns<Student>()

    if (!students) {
        throw createError({ message: "No students found", statusCode: 404 })
    }

    return students
})