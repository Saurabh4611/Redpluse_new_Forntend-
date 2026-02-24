export type PriceDataType ={
    id:number | string,
    plan: string,
    frequency: string,
    description: string,
    features: string[],
    buttonText: string,
    buttonLink: string,
    delay: string,
    isActive: boolean
}
export const pricingData:PriceDataType[] = [
    {
        id: 'Diamond',
        plan: 'Blood Bank',
       
        frequency: 'Rajput Blood  Bank',
        description: 'Blood Bank is a facility that collects, tests, processes, and distributes blood and blood products to hospitals and clinics for transfusions and medical procedures.',
        features: [
            'Tested Blood Units',
            'Ambulance Service',
            'Free Blood Donation Camps',
            '24/7 Service',
            'Online Appointment'
        ],
        buttonText: 'Contact',
        buttonLink: '/contact',
        delay: '.3',
        isActive: false
    },
    {
        id: 'Hospital',
        plan: 'Hospital',
       
        frequency: 'A1 Hospital',
        description: 'A1 Hospital is a healthcare facility that provides medical services, including diagnostics, treatment, and patient care, to individuals in need of healthcare support.',
        features: [
            'Personalized Healthcare Plans',
            'Hospital Services',
            'Free Health Check-ups',
            '24/7 Service',
            'Online Appointment'
        ],
        buttonText: 'Contact ',
        buttonLink: '/contact',
        delay: '.5',
        isActive: true
    },
    {
        id: 'Insurance',
        plan: 'Insurance',
        
        frequency: 'Personal Health Care',
        description: 'Personal Health Care is an Insurance company that provides health insurance plans and services to individuals, offering coverage for medical expenses and healthcare needs.',
        features: [
            'Personalized Health Insurance Plans',
            'Instant Claim Settlement',
            'Wide Network of Hospitals',
            '24/7 Customer Support',
            'Online App'
        ],
        buttonText: 'Contact',
        buttonLink: '/contact',
        delay: '.7',
        isActive: false
    }
];