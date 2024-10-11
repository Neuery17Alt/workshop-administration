import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "~/types/supabase"
import {Day, Workshop} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient<Database>(event)
    const {data: day} = await supabase
        .from("Day")
        .select(`*`)
        .returns<Day>()

    if (!day) {
        throw createError({message: "No days found", statusCode: 404})
    }

    return day
})