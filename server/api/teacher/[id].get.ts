import { serverSupabaseClient } from "#supabase/server"
import type { Database } from "@/types/supabase"
import {Teacher} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const uuid = getRouterParam(event, "id")
    const supabase = await serverSupabaseClient<Database>(event)

    const { data: teacher } = await supabase
        .from("Teacher")
        .select(
            "*",
        )
        .eq("uuid", `${uuid}`)
        .single()
        .returns<Teacher>()

    if (!teacher) {
        return []
    }

    return teacher
})