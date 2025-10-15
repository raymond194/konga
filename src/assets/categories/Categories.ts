export type CategoriesType = {
    key: string;
    label: string;
    subs?: {
        label: string;
        items: string[]
    }[];
};

export const categories: CategoriesType[] = [

    {
        key: 'computers',
        label: 'Computers and Accessories',
        subs: [
            {
                label: 'Laptops',
                items: ["Mini Laptops and Netbooks", "NoteBooks", "UltraBooks", "Hybrid PCs", "Macbooks"]
            },
            {
                label: 'Desktop and Monitors',
                items: ["CPUs", "All in Ones", "Monitors", "UPS", "Servers", "Desktop Bundles"]
            },
            {
                label: 'Computing Accessories',
                items: ["Computer Peripherals", "Bags, Cases, Covers & Sleeves", "Laptops & Desktop Accessories", "Storage Devices"]
            },
            {
                label: 'Printers, Scanners and Accessories',
                items: ["Computer Printers & Copiers", "Scanners", "Inks, Toners & Catridges"]
            }
        ]
    },
    {
        key: "phones",
        label: 'Phones and Tablets',
        subs: [
            {
                label: "Mobile Phones",
                items: ["Smart Phones", "Features Phones"]
            },
            {
                label: "Mobile Phone Accessories",
                items: ["Cables", "Cases & Covers", "Screen Protectors", "Chargers & Power Banks", "Earphones & Headsets"]
            },
            {
                label: "Tablets",
                items: ["Android", "iOS", "Windows", "Other OS'"]
            },
            {
                label: "Tablet Accessories",
                items: ["Cases & Covers", "Holders & Stands", "Other Accessories"]
            }
        ]
    },
    {
        key: "electronics",
        label: "Electronics",
        subs: [
            {
                label: "Television",
                items: ["Smart TVs", "LED TVs", "Curved Tvs", "OLED TVs", "Plasma TVs"]
            },
            {
                label: "DVD Players and Recorders",
                items: ["DVD Players", "DVD Recorders"]
            },
            {
                label: "Cameras & Photo",
                items: ["Digital Cameras", "Proffessional & SLR Cameras", "Camcorders & Video Cameras", "Camera Lenses & Accessories", "CCTV Cameras"]
            },
            {
                label: "Accessories",
                items: ["TV Audio", "Headphonres", "Televosion Accessories", "Other Accessories", "Gaming Accessories"]
            }
        ]
    },
    {
        key: "KongaFashion",
        label: "Konga Fashion",
        subs: [
            {
                label: "Women's Wear",
                items: ["Dresses", "Tops", "Trousers", "Jumpsuits & Playsuits", "Suits & Blazers", "Cardigans", "Islamic Wears"]
            },
            {
                label: "Women's Shoes",
                items: ["Women's Wedges", "Womens New Arrival", "Boots & Platforms", "Ballrinas & Flats"]
            },
            {
                label: "Women's Accessories",
                items: ["Bags, Belts, Purses & Clutches", "Wallets", "Jewellery"]
            },
            {
                label: "Men's Wear",
                items: ["Shirts", "Polos", "T-Shirts", "Shorts", "Jeans", "Trousers & Shorts"]
            }
        ]
    },
    {
        key: "kitchen",
        label: "Home and Kitchen",
        subs: [
            {
                label: "Large Appliances",
                items: ["Air Conditioners & Coolers", "Fans", "Freezers", "Dishwashers", "Refrigerators", "Cookers & Ovens", "Water Dispensers", "Vacuum Cleaners"]
            },
            {
                label: "Small Appliances",
                items: ["Blenders, Juicers & Mixers", "Hot Plates & Burners", "Irons & Streamers", "Processors & Mincers", "Toasters & Sandwich Makers", "Deep Fryers & Rice Cookers"]
            },
            {
                label: "Home Furnishings",
                items: ["Bed & Bathroom Furnishings", "Curtains & Blinds", "Decor", "Light Fixtures"]
            },
            {
                label: "Kitchen & Dining",
                items: ["Cook and Bakeware", "Dining", "Kitchen Utensils", "Cookers Hoods & Ventilators"]
            }

        ]
    },
    {
        key: "baby",
        label: "Baby, Kids and Toys",
        subs: [
            {
                label: "Fashion for Girls",
                items: ['sets, Dresses', "Tops, jacket, & Sweatshirts", "Denim, Trousers & Leggings", "Giirl's SHorts & Skirts"]
            },
            {
                label: "Kids Accessories",
                items: []
            },
            {
                label: "Fashion for Boys",
                items: ["Boys Swimwear", "Polos & T-Shirts", "Sets", "Watches", "Denim & Trousers"]
            },
            {
                label: "Kids Clothing and Accessories",
                items: []
            },
            {
                label: "Baby Essentials",
                items: ["Nursery", "Bibs & Burp CLoths", "Bottle Feeding", "Breastfeefing"]
            }
        ]

    },
    {
        key: "beauty",
        label: "Beauty, Health & Personal Care",
        subs: [
            {
                label: "Dermatological Skincare",
                items: ["Facial Moisturizer", "Body Cleanser", "Facial Cleansers", "Body Moisturizer", "Facial Moisturizers"]
            },
            {
                label: "Sexual Wellness",
                items: ["Adult Toys", "Condoms & Lubricants"]
            },
            {
                label: "Frangrances",
                items: ["Men's Frangrances", "Women's Frangrances", "Unisex Frangrances", "Children's Frangrances"]
            },
            {
                label: "Makeup & Body Art",
                items: ["Face MakeUp", "Eye MakeUp", "Lips", "Makeup Accessories", "Nails"]
            },
            {
                label: "Hair Center",
                items: ["Hair Accessories", "Hair Care and Treatment", "Extensions, Weaves and Wigs", "Salon Essential", "Hair Appliances"]
            }
        ]
    }
]

