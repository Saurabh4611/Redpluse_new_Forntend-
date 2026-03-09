type MenuLink = {
  title: string;
  link: string;
};

export type MegaMenuDataType = {
  image: string;
  title: string;
  links: MenuLink[];
};

export type SubMenuDataType = {
  title: string;
  link: string;
  submenu?: MenuLink[];
};

export type MenuItemDataType = {
  title: string;
  link: string;
  megamenu?: MegaMenuDataType[];
  submenu?: SubMenuDataType[];
};


export const menuData: MenuItemDataType[] = [
  {
    title: 'Home',
    link: '/',
    
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Services',
    link: '/service',
    
  },
  {
    title: 'Pages',
    link: '#',
    submenu: [
      
     
      { title: 'Collaboration', link: '/pricing' },
      { title: 'Faq\'s', link: '/faq' },
     
    ],
  },
  {
    title: 'Blog',
    link: '/news-details',
    
  },
  {
    title: 'Contact',
    link: '/contact',
  },

  {
    title: 'Login',
    link: '/login',
    
  },
   
];
