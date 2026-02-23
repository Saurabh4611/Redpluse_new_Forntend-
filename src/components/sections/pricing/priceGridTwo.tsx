import { pricingData } from "@/db/pricingData"
import PriceCard from "./priceCard"

const PriceGridTwo = () => {
    return (
        <section className="pricing-section fix section-padding">
            <div className="container">
                <div className="pricing-wrapper">
                    <div className="section-title text-center">
                        <span className="wow slideUp">Our Collabators</span>
                        <h2 className="wow slideUp" data-delay=".3">
                            People who are working with us to save lives through blood donation
                        </h2>
                    </div>
                    <div className="tab-content">
                        <div className="row">
                            {pricingData.map((plan) => <PriceCard key={plan.id} plan={plan} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PriceGridTwo