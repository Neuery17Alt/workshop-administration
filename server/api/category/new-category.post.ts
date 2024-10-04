import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "@/types/supabase"
import {Student} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const category : {name: string} = await readBody<{ name: string }>(event)
    const supabase = await serverSupabaseClient<Database>(event)


    const { error } = await supabase.from("Category").insert({
        name: category.name,
    })

    if (error) {
        throw createError({ message: error.message, statusCode: 500 })
    }
})