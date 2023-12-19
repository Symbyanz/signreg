export const data = {
    address: {
        title: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
        desc: '2 минуты пешком от метро Название.',
        url: '#'
    },
    phone: {
        title: '+7 (704) 555-0127',
        desc: ['Звоните: Пн – Пт с 9:00 до 21:00.', 'Сб и ВС: с 9:00 до 19:00.'],
        url: 'tel:+77045550127'
    }
}

export interface Data {
    address: Address
    phone: Phone
}

export interface Address {
    title: string
    desc: string
    url: string
}

export interface Phone {
    title: string
    desc: string[]
    url: string
}