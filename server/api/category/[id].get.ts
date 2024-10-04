import { serverSupabaseClient } from "#supabase/server"
import type { Database } from "@/types/supabase"
import {Category, Student} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const uuid : string = getRouterParam(event, "id")
    const supabase = await serverSupabaseClient<Database>(event)

    const { data: categories } = await supabase
        .from("Category")
        .select(
            "*",
        )
        .eq("uuid", `${uuid}`)
        .single()
        .returns<Category>()

    if (!categories) {
        return []
    }

    return categories
})