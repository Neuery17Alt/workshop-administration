import { serverSupabaseClient } from "#supabase/server"
import type { Database } from "~/types/supabase"
import {Category, Student} from "~/types/workshop.types";
import {categories} from "@vueuse/metadata";

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient<Database>(event)
    const { data: categories } = await supabase.from("Category").select("*").returns<Category>()

    if (!categories) {
        throw createError({ message: "No students found", statusCode: 404 })
    }

    return categories
})