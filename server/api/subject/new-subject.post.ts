import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "@/types/supabase"

export default defineEventHandler(async (event) => {
    const subject : {name: string} = await readBody<{ name: string }>(event)
    const supabase = await serverSupabaseClient<Database>(event)


    const { error } = await supabase.from("Subject").insert({
        name: subject.name,
    })

    if (error) {
        throw createError({ message: error.message, statusCode: 500 })
    }
})