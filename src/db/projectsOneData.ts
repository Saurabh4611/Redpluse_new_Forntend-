export interface ProjectDataType {
    id: number;
    image: string;
    category: string;
    title: string;
    link?: string;
    delay?: string;
}

export const projectsOneData: ProjectDataType[] = [
    {
        id: 1,
        image: "/img/project/Project01.png",
        category: "Blood Donation",
        title: "Blood Donation Camp in Mumbai",
       link: "/service"
    },
    {
        id: 2,
        image: "/img/project/Project02.png",
        category: "Blood Help",
        title: "Blood Help 24/7",
        link: "/service"
       
    },
    {
        id: 3,
        image: "/img/project/Project03.png",
        category: "Blood Donation Camp",
        title: "Blood Donation Camp in Delhi",
        link: "/service"
        
    },
    {
        id: 4,
        image: "/img/project/Project04.png",
        category: "Blood Donation Our Goal",
        title: "Campaign for Blood Donation",
        link: "/service"
        
    },
    {
        id: 5,
        image: "/img/project/Project05.png",
        category: "Members Help",
        title: "Helpers on Work",
        link: "/service"
     
    },
];
