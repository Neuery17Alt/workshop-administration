import { serverSupabaseClient } from "#supabase/server"
import type { Database } from "@/types/supabase"
import {Teacher, Workshop} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const uuid = getRouterParam(event, "id")
    const supabase = await serverSupabaseClient<Database>(event)

    const { data: workshop } = await supabase
        .from("Workshop")
        .select(`
        *, 
        Student(*),
        Category(*), 
        Teacher(*),
        Subject(*)
        `)
        .eq("uuid", `${uuid}`)
        .single()
        .returns<Workshop>()

    if (!workshop) {
        return []
    }

    return workshop
})