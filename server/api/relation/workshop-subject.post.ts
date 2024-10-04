import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "@/types/supabase"
import {Student} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const relation: { workshop_id: number, subject_id: number } = await readBody<{
        workshop_id: number,
        student_id: number
    }>(event)

    const supabase = await serverSupabaseClient<Database>(event)

    const {error} = await supabase.from("Workshop").update({
        subject_id: relation.subject_id,
    })
        .eq("uuid", relation.workshop_id)

    if (error) {
        throw createError({message: error.message, statusCode: 500})
    }
})