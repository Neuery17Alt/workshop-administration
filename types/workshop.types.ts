export type Workshop = {
    uuid: string | null
    created_at: string
    name: string
    description: string | null
    max_member: number
    Subject: Subject
    Teacher: Teacher[]
    Student: Student[]
    Category: Category[]
    Day: Day[]
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
    color: string
}

export type Day = {
    uuid: string
    created_at: string
    start_time: string
    end_time: string
    date: string
    workshop_id: string
}