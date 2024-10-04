import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "@/types/supabase"

export default defineEventHandler(async (event) => {
    const subject : { abbreviation: string, first_name: string, last_name: string } = await readBody<{ abbreviation: string, first_name: string, last_name: string }>(event)
    const supabase = await serverSupabaseClient<Database>(event)


    const { error } = await supabase.from("Teacher").insert({
        abbreviation: subject.abbreviation,
        first_name: subject.first_name,
        last_name: subject.last_name
    })

    if (error) {
        throw createError({ message: error.message, statusCode: 500 })
    }
})