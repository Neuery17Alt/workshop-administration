import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "@/types/supabase"
import {Day, Workshop} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const uuid = getRouterParam(event, "id")
    const supabase = await serverSupabaseClient<Database>(event)

    const { data: workshop } : Workshop = await supabase
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

    const { data: days } = await supabase
        .from("Day")
        .select(`*`)
        .eq("workshop_id", `${uuid}`)
        .returns<Day[]>()


    if (!workshop) {
        return []
    }

    return {
        ...workshop,
        Day: [days]
    }
})