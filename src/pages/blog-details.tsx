import BlogCommentFrom from "@/components/sections/blogs/blogCommentFrom"
import BlogComments from "@/components/sections/blogs/blogComments"
import BlogSidebar from "@/components/sections/blogs/blogSIdebar"
import PageTitle from "@/components/sections/pageTitle"
import { Link } from "react-router-dom"

const BlogDetails = () => {
    return (
        <>
            <PageTitle currentPage="Blog Details" title="Blog Details" />
            <section className="news-standard fix section-padding">
                <div className="container">
                    <div className="news-details-area">
                        <div className="row g-5">
                            <div className="col-12 col-lg-8">
                                <div className="blog-post-details">
                                    <div className="single-blog-post">
                                        <div className="post-featured-thumb bg-cover" style={{ backgroundImage: 'url("/img/news/news1.png")' }} />
                                        <div className="post-content">
                                            <ul className="post-list d-flex align-items-center">
                                                <li>
                                                    <i className="fa-regular fa-user" />
                                                    By Redpluse Admin
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-calendar-days" />
                                                    18 May, 2025
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-tag" />
                                                    Donation
                                                </li>
                                            </ul>
                                            <h3>Critical Blood Shortage: Urgent Call for Blood Donors</h3>
                                            <p className="mb-3">
                                                Blood banks and hospitals are currently experiencing a critical shortage of blood supplies, putting many patients at risk. Blood is essential for emergency treatments, surgeries, accident victims, cancer patients, and individuals with chronic illnesses.
                                            </p>
                                            <p className="mb-3">
                                                Health organizations and local blood banks are urging healthy individuals to come forward and donate blood to help save lives.
                                            </p>
                                            <p>
                                                A single blood donation can help multiple patients in need. The donation process is safe, quick, and carried out under strict medical supervision. By donating blood, you can make a life-saving difference in your community and ensure that hospitals have the blood supply needed for urgent medical care.                                            </p>
                                            <div className="hilight-text mt-4 mb-4">
                                                <p>Every drop counts — donate blood and help save lives today. 🩸</p>
                                                <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 20.3698H7.71428L2.57139 30.5546H10.2857L15.4286 20.3698V5.09247H0V20.3698Z" fill="#77B80F" />
                                                    <path d="M20.5703 5.09247V20.3698H28.2846L23.1417 30.5546H30.856L35.9989 20.3698V5.09247H20.5703Z" fill="#77B80F" />
                                                </svg>
                                            </div>
                                            <p className="mt-4 mb-5">
                                                One unit of donated blood can help save up to three lives, as blood can be separated into different components such as red blood cells, plasma, and platelets. These components are used to treat different medical conditions, including trauma injuries, anemia, burns, and blood disorders. Regular blood donation helps maintain a stable blood supply for hospitals and emergency medical services.                                            </p>
                                            <div className="row g-4">
                                                <div className="col-lg-6">
                                                    <div className="details-image">
                                                        <img src="/img/news/news-post01.png" alt="img" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="details-image">
                                                        <img src="/img/news/news-post02.png" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="pt-5">
                                                Many blood banks conduct donation drives and awareness campaigns to encourage community participation. These events provide an opportunity for people to contribute to a noble cause while helping strengthen the healthcare system. Community support plays a crucial role in ensuring that patients receive the blood they need without delay.                                            </p>
                                        </div>
                                    </div>
                                    <div className="row tag-share-wrap mt-4 mb-5">
                                        <div className="col-lg-8 col-12">
                                            <div className="tagcloud">
                                                <Link to="/news-details">News</Link>
                                                <Link to="/news-details">Camps</Link>
                                                <Link to="/news-details">Donations</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                                            <div className="social-share">
                                                <span className="me-3">Share:</span>
                                                <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                                <Link to="#"><i className="fa-brands fa-x-twitter" /></Link>
                                                <Link to="#"><i className="fab fa-linkedin-in" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <BlogComments />
                                    <BlogCommentFrom />
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BlogDetails