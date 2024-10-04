import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "@/types/supabase"
import {Student} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const relation: { workshop_id: number, teacher_id: number } = await readBody<{
        workshop_id: number,
        teacher_id: number
    }>(event)
    const supabase = await serverSupabaseClient<Database>(event)


    const {error} = await supabase
        .from("Workshop_Teacher")
        .delete()
        .eq("workshop_id", relation.workshop_id)
        .eq("teacher_id", relation.teacher_id)

    if (error) {
        throw createError({message: error.message, statusCode: 500})
    }
})