export type Workshop = {
    uuid: string | null
    created_at: string
    name: string
    description: string | null
    start_date: string
    end_date: string | null
    is_active: boolean
    Subject: Subject
    Teacher: Teacher[]
    Student: Student[]
    Category: Category[]
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

export type Category = {
    uuid: string
    created_at: string
    name: string
}