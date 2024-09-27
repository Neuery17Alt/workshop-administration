import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "~/types/supabase"
import {Subject} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient<Database>(event)
    const {data: subjects} = await supabase.from("Subject").select("*").returns<Subject>()

    if (!subjects) {
        throw createError({message: "No subjects found", statusCode: 404})
    }

    return subjects
})