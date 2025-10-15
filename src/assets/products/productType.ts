export type ProductType = {
        id: number
        name: string
        img: string
        price: number
        discount?: number
        rating?: number
        category?: string
        subCategory?: string
        subType?: string
        sponsored?: boolean
        soldBy?: string
        delivery? : string
        todayDeal?: boolean
        reviewCount?: number | string
        sameDay?: string
    }
