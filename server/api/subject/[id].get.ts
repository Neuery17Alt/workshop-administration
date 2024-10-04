import { serverSupabaseClient } from "#supabase/server"
import type { Database } from "@/types/supabase"
import {Subject} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const uuid = getRouterParam(event, "id")
    const supabase = await serverSupabaseClient<Database>(event)

    const { data: subject } = await supabase
        .from("Subject")
        .select(
            "*",
        )
        .eq("uuid", `${uuid}`)
        .single()
        .returns<Subject>()

    if (!subject) {
        return []
    }

    return subject
})