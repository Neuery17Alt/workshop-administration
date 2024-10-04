import { serverSupabaseClient } from "#supabase/server"
import type { Database } from "@/types/supabase"
import {Student} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const uuid : string = getRouterParam(event, "id")
    const supabase = await serverSupabaseClient<Database>(event)

    const { data: student } = await supabase
        .from("Student")
        .select(
            "*",
        )
        .eq("uuid", `${uuid}`)
        .single()
        .returns<Student>()

    if (!student) {
        return []
    }

    return student
})