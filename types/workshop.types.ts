export type Workshop = {
    uuid: string | null
    created_at: string
    name: string
    description: string | null
    startdate: string
    enddate: string | null
    is_active: boolean
    subject: Subject
    teachers: Teacher[]
    students: Student[]
}

export type Subject = {
    uuid: string
    created_at: string
    name: string
}

export type Teacher = {
    uuid: string
    created_at: string
    abbreviation: string
    first_name: string
    last_name: string
}

export type Student = {
    uuid: string
    created_at: string
    ldap_id: number
}