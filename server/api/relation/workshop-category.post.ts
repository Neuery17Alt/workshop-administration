import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "@/types/supabase"
import {Student} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const relation: { workshop_id: number, category_id: number } = await readBody<{
        workshop_id: number,
        category_id: number
    }>(event)
    const supabase = await serverSupabaseClient<Database>(event)


    const {error} = await supabase.from("Workshop_Category").insert({
        workshop_id: relation.workshop_id,
        category_id: relation.category_id,
    })

    if (error) {
        throw createError({message: error.message, statusCode: 500})
    }
})