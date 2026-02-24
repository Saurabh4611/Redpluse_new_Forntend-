import { pricingData } from "@/db/pricingData"
import PriceCard from "./priceCard"
import SectionTitle from "@/components/ui/sectionTitle"

const PriceGridOne = () => {
    return (
        <section className="pricing-section section-bg fix section-padding">
            <div className="left-shape">
                <img src="/img/pricing-left-shape.png" alt="shape-img" />
            </div>
            <div className="right-shape">
                <img src="/img/pricing-right-shape.png" alt="shape-img" />
            </div>
            <div className="container">
                <div className="pricing-wrapper">
                    <div className="section-title-area">
                        <SectionTitle>
                            <SectionTitle.SubTitle>Our Collabartion</SectionTitle.SubTitle>
                            <SectionTitle.Title>Meet Our Elite Members</SectionTitle.Title>
                        </SectionTitle>
                       
                    </div>
                    <div className="tab-content">
                        <div id="monthly" className="tab-pane fade show active" role="tabpanel">
                            <div className="row">
                                {pricingData.map((plan) => <PriceCard key={plan.id} plan={plan} />)}
                            </div>
                        </div>
                        <div id="yearly" className="tab-pane fade" role="tabpanel">
                            <div className="row">
                                {pricingData.map((plan) => <PriceCard key={plan.id} plan={plan} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PriceGridOne
