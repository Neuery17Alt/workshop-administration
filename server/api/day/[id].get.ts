import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "@/types/supabase"
import {Day, Teacher, Workshop} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const uuid: string = getRouterParam(event, "id")
    const supabase = await serverSupabaseClient<Database>(event)

    const {data: day} = await supabase
        .from("Day")
        .select(`*`)
        .eq("uuid", `${uuid}`)
        .single()
        .returns<Day>()

    if (!day) {
        return []
    }

    return day
})