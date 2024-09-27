import { serverSupabaseClient } from "#supabase/server"
import type { Database } from "~/types/supabase"
import {Teacher} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient<Database>(event)
    const { data: teachers } = await supabase.from("Teacher").select("*").returns<Teacher>()

    console.log(teachers);

    if (!teachers) {
        throw createError({ message: "No teachers found", statusCode: 404 })
    }

    return teachers
})