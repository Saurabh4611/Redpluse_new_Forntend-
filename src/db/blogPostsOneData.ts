import { BlogPostDataType } from "./blogPostsThreeData";

export const blogPostsOneData: BlogPostDataType[] = [
    {
        id: 1,
        image: "/img/news/news1.png",
        date: { day: '17', month: 'Feb', year: '2024' },
        title: "Critical Blood Shortage: Urgent Call for Blood Donors",
        description: "Blood banks are facing critical shortages, and hospitals urgently require donors to maintain life-saving supplies. Blood donation drives encourage healthy individuals to donate blood to help patients in emergencies, surgeries, and treatments. Every donation can save multiple lives and strengthen community healthcare support.",
        link: "/news-details",
        author: 'Admin',
        category: 'IT Services',
        delay: ".3"
    },
    {
        id: 2,
        image: "/img/news/news2.png",
        date: { day: '17', month: 'May', year: '2025' },
        title: "World Health Organization Blood Donation Guidelines",
        description: "Step-by-step guidelines for safe and responsible blood donation as recommended by global health authorities. The process includes donor registration, health screening, confidential medical interview, health checks, blood collection, and post-donation care. These procedures ensure the safety of both donors and recipients while supporting life-saving blood supplies.",
        link: "/news-details",
        author: 'Admin',
        category: 'IT Services',
        delay: ".5"
    },
    {
        id: 3,
        image: "/img/news/news3.png",
        date: { day: '17', month: 'July', year: '2021' },
        title: "COVID-19 Global Update: New Variants, Guidelines & Public Health Insights",
        description: "Latest global updates on COVID-19 variants and public health recommendations. Health experts report new variants such as NB.1.8.1 and XFG with increased transmissibility but milder symptoms. Vaccines continue to provide protection against severe illness. Global health organizations recommend staying home when sick, maintaining proper ventilation, and practicing good hygiene while monitoring the spread of new variants.",
        link: "/news-details",
        author: 'Admin',
        category: 'IT Services',
        delay: ".7"
    }
];