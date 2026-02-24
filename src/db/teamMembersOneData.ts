export interface TeamMemberDataType {
    id: number;
    role: string;
    name: string;
    description: string;
    image: string;
    socialLinks: {
        icon: string;
        link: string;
    }[];
    delay: string;
}

export const teamMembersOneData: TeamMemberDataType[] = [
    {
        id: 1,
        role: "Manager",
        name: "Mr.Pratik Chavare",
        description: "The Project Manager at REDPLUSE is responsible for leading the development, implementation, and continuous improvement of the platform.",
        image: "/img/team/pratik.png",
        socialLinks: [
            {
                icon: 'fab fa-facebook-f',
                link: ''
            },
            {
                icon: 'fab fa-instagram',
                link: ''
            },
            {
                icon: 'fab fa-linkedin-in',
                link: ''
            },
        ],
        delay: ".3"
    },
    {
        id: 2,
        role: "Web Developer",
        name: "Mr.Sanjay Jadhav",
        description: "The Web Developer at REDPLUSE is responsible for designing and building the platform's user interface.",
        image: "/img/team/sanjay.png",
        socialLinks: [
            {
                icon: 'fab fa-facebook-f',
                link: ''
            },
            {
                icon: 'fab fa-instagram',
                link: ''
            },
            {
                icon: 'fab fa-linkedin-in',
                link: ''
            },
        ],
        delay: ".5"
    },
    {
        id: 3,
        role: "Client Support",
        name: "Ms.Radhika Barade",
        description: "The Client Support team at REDPLUSE is responsible for providing support and assistance to clients.",
        image: "/img/team/radhika.png",
        socialLinks: [
            {
                icon: 'fab fa-facebook-f',
                link: ''
            },
            {
                icon: 'fab fa-instagram',
                link: ''
            },
            {
                icon: 'fab fa-linkedin-in',
                link: ''
            },
        ],
        delay: ".7"
    },
    {
        id: 4,
        role: "Finance Manager",
        name: "Mr.Vishal Nikam",
        description: "The Finance Manager at REDPLUSE is responsible for managing the platform's financial operations.",
        image: "/img/team/vishal.png",
        socialLinks: [
            {
                icon: 'fab fa-facebook-f',
                link: ''
            },
            {
                icon: 'fab fa-instagram',
                link: ''
            },
            {
                icon: 'fab fa-linkedin-in',
                link: ''
            },
        ],
        delay: ".9"
    }
];