
import RootLayout from "@/layout/root";
import Error from "@/pages/404";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import BlogDetails from "@/pages/blog-details";
import BlogStandard from "@/pages/blog-standard";
import Contact from "@/pages/contact";
import Faq from "@/pages/faq";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Signup from "@/pages/resigter";

import Pricing from "@/pages/pricing";
import Project from "@/pages/project";

import Service from "@/pages/service";
import ServiceCarousel from "@/pages/service-carousel";
import ServiceDetails from "@/pages/service-details";
import Team from "@/pages/team";

import { createBrowserRouter, Route } from "react-router-dom";
import HelperList from "@/pages/Helpers/helperslist";
import AdminDashboard from "@/pages/admin/admindashboard";
import PatientList from "@/pages/Patients/patientlist";
import UpdateUser from "@/pages/Helpers/UpdateUser";
import Signupuser from "@/pages/resigter-user";
import CreateBloodRequest from "@/pages/Patients/createbloodreq";
import PatientDashboard from "@/pages/Patients/patientdashboard";
import ViewCreatedRequests from "@/pages/Patients/viewrequests";
import HelperDashboard from "@/pages/Helpers/helperdashboard";
import AvailableRequests from "@/pages/Helpers/avaliblerequest";
import MyDonations from "@/pages/Helpers/mydonation";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/service',
                element:<Service/>
            },
            {
                path:'/service-carousel',
                element:<ServiceCarousel/>
            },
            {
                path:'/service-details',
                element:<ServiceDetails/>
            },
            {
                path:'/project',
                element:<Project/>
            },
            
          
            {
                path:'/team',
                element:<Team/>
            },
            
            {
                path:'/pricing',
                element:<Pricing/>
            },
            {
                path:'/faq',
                element:<Faq/>
            },
            {
                path:'/404',
                element:<Error/>
            },
            {
                path:'/news',
                element:<Blog/>
            },
            {
                path:'/news-standard',
                element:<BlogStandard/>
            },
            {
                path:'/news-details',
                element:<BlogDetails/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
             {
                path:'/Login',
                element:<Login/>
            },
             {
                path:'/register',
                element:<Signup/>
            },
            {
                path:'/adminDashboard',
                element:<AdminDashboard/>
            },
             {
                path:'/helperlist',
                element:<HelperList/>
            },
            {
                path:'/patientList',
                element:<PatientList/>
            },
               {
                path:'/updateuser/:id',
                element:<UpdateUser/>
            },
             {
                path:'/updateuser/:id',
                element:<UpdateUser/>
            },
            {
                path:'/register-user',
                element:<Signupuser/>
            },
             {
                path:'/patientdashboard',
                element:<PatientDashboard/>
            },
             {
                path:'/create-blood-request',
                element:<CreateBloodRequest/>
            },
            {
                path:'/requests',
                element:<ViewCreatedRequests/>
            },
            {
             path :"/helperDashboard",
             element:<HelperDashboard/>

            },
            {
             path:"/available-requests" ,
             element:<AvailableRequests/> 
            },
             {  
               path:"/my-donations",
                element:<MyDonations />
             },
            
            
        ]
    },
    {
        path:'*',
        element:<Error/>
    },
   
])