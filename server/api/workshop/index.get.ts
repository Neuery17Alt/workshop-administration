import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "~/types/supabase"
import {Workshop} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient<Database>(event)
    const {data: workshops} = await supabase
        .from("Workshop")
        .select(`
        *, 
        Student(*),
        Category(*), 
        Teacher(*),
        Subject(*)
        `)
        .returns<Workshop>()

    if (!workshops) {
        throw createError({message: "No workshops found", statusCode: 404})
    }

    return workshops
})