export interface ServiceDataType {
    id: number | string;
    title: string;
    description: string;
   
    link: string;
    delay: string;
    active?:boolean;
    image?:string;
}

export const serviceOneData: ServiceDataType[] = [
    {
        id: 1,
        title: "Blood Donation",
        description: "Providing blood donation services to save lives and support healthcare needs.",
       
        link: "/service-details",
        delay:'.3'
    },
    {
        id: 2,
        title: "Hospital Support",
        description: "For your health we will do everything ",
       
        link: "/service-details",
        delay:'.5',
        active:true
    },
    {
        id: 3,
        title: "Blood Testing(in development)",
        description: "We are Expanding our service with offline labs and testing facilities",
      
        link: "/service-details",
        delay:'.7'
    },
    {
        id: 4,
        title: "Emergency Blood Delivery",
        description: "For your emergency needs we will deliver blood in time",
      
        link: "/service-details",
        delay:'.9'
    },
    {
        id: 5,
        title: "Specialized Blood Types",
        description: "Categorizing and providing access to specialized blood types for specific medical conditions.",
       
        link: "/service-details",
        delay:'.3'
    },
    {
        id: 6,
        title: "Ambulance Services",
        description: "Get Connect to Nearby Partnered Hospital to use this service",
       
        link: "/service-details",
        delay:'.5'
    },
    {
        id: 7,
        title: "Blood Donation Camps",
        description: "Organizing and hosting blood donation camps in various locations.",
       
        link: "/service-details",
        delay:'.7'
    },
    {
        id: 8,
        title: "Awareness and Education",
        description: "Raising awareness and providing education about blood donation and health.",
       
        link: "/service-details",
        delay:'.9'
    }
];
