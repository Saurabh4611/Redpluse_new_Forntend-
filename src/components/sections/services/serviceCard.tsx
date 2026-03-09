import { ServiceDataType } from "@/db/serviceOneData";


const ServiceCard = ({ service, className }: { service: ServiceDataType; className?: string }) => {
    return (
        <div className={`service-box-items ${className}`}>
           
            <div className="content">
                <h4>
                    
                        {service.title}
                    
                </h4>
                <p>
                    {service.description}
                </p>
              
                 
            </div>
        </div>
    )
}

export default ServiceCard