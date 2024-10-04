import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "@/types/supabase"
import {Student} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const uuid: string = getRouterParam(event, "id")
    const supabase = await serverSupabaseClient<Database>(event)

    try {
        await supabase
            .from("Subscription")
            .delete()
            .eq("student_id", uuid)

        await supabase
            .from('Student')
            .delete()
            .eq('uuid', uuid)

    } catch (error) {
        throw createError({message: error.message, statusCode: 500})
    }
})