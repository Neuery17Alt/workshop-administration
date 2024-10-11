import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "~/types/supabase"
import {Day, Workshop} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient<Database>(event)
    const {data: workshops} = await supabase
        .from("Workshop")
        .select(`
        *, 
        Student(*),
        Category(*), 
        Teacher(*),
        Subject(*)
        `)
        .returns<Workshop>()


    let modifiedWorkshops = []

    await Promise.all(
        workshops.map(async (workshop) => {
            const {data: days } = await supabase
                .from("Day")
                .select(`*`)
                .eq("workshop_id", `${workshop.uuid}`)
                .returns<Day[]>()

                modifiedWorkshops = {
                    ...workshop,
                    Day: days
                }
            }
        )
    )

    if (!modifiedWorkshops) {
        throw createError({message: "No workshops found", statusCode: 404})
    }

    return modifiedWorkshops
})