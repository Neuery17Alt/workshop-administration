import { serverSupabaseClient } from "#supabase/server"
import type { Database } from "@/types/supabase"
import {Student} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const uuid : string = getRouterParam(event, "id")
    const supabase = await serverSupabaseClient<Database>(event)

    const { error } = await supabase
        .from('Student')
        .delete()
        .eq('uuid', uuid)


    if (error) {
        throw createError({ message: error.message, statusCode: 500 })
    }
})