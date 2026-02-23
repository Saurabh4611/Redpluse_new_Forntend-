import { Fragment } from 'react'

const textSliderData = [
    "Emergency Blood Requests",
    "Verified Donor Network",
    "Real-Time Helper Assignment",
    "Life-Saving Support",
    "Secure Donation Tracking",
    "Instant Patient-Donor Matching",
    "Community Blood Connect",
    "Transparent Admin Dashboard",
    "24/7 Emergency Response",
    "Bridging Patients & Helpers",
    "Smart Blood Management",
    "Compassion in Action",
    "Every Drop Counts",
    "Donate Blood, Save Lives",
    "Healthcare Support System"
];

const MarqueOne = () => {
    return (
        <div className="marque-section">
            <div className="marquee-wrapper text-slider">
                <div className="marquee-inner to-left">
                    <ul className="marqee-list d-flex">
                        <li className="marquee-item">
                            {textSliderData.map((text, index) => (
                                <Fragment key={index}>
                                    <span className="text-slider">{text}</span>
                                    <span className="text-slider">
                                        <img src="/img/star.svg" alt="img" />
                                    </span>
                                </Fragment>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default MarqueOne