import { ServiceDataType } from "@/db/serviceOneData"
import { Link } from "react-router-dom"

const ServiceCardTwo = ({ service }: { service: ServiceDataType }) => {
    return (
        <div className="service-card-items">
            <div className="service-image">
                <img src={service.image} alt="service-img" />
            </div>
            
            <div className="service-content">
               
                
                <p>{service.description}</p>
                
            </div>
        </div>
    )
}

export default ServiceCardTwo