import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "@/types/supabase"
import {Student} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    try {
        const data = await fetch(
            "https://www.htl-steyr.ac.at//intern/webuntis/execute.php/getSubjects"
        )

        return data.json()

    } catch (error) {
        throw createError({message: error.message, statusCode: 500})
    }
})