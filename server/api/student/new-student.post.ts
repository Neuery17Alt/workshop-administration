import {serverSupabaseClient} from "#supabase/server"
import type {Database} from "@/types/supabase"
import {Student} from "~/types/workshop.types";

export default defineEventHandler(async (event) => {
    const student : {ldap: number} = await readBody<{ ldap: number }>(event)
    const supabase = await serverSupabaseClient<Database>(event)


    const { error } = await supabase.from("Student").insert({
        ldap_id: student.ldap,
    })

    if (error) {
        throw createError({ message: error.message, statusCode: 500 })
    }
})