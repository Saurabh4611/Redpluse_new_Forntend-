const ContactForm = () => {
    return (
        <div className="contact-content">
            <h2> Redpluse is ready to Hear From You!</h2>
            <p>
               Redpluse is for the people,by the people. So we love to hear from you. Whether you have a question, feedback, or just want to say hi, our team is here to listen and assist you. Reach out to us anytime, and we'll get back to you as soon as possible. Your voice matters to us!
            </p>
            <form action="contact.php" id="contact-form" method="POST" className="contact-form-items">
                <div className="row g-4">
                    <div className="col-lg-6 wow slideUp" data-delay=".3">
                        <div className="form-clt">
                            <span>Your name*</span>
                            <input type="text" name="name" id="name" placeholder="Your Name" />
                        </div>
                    </div>
                    <div className="col-lg-6 wow slideUp" data-delay=".5">
                        <div className="form-clt">
                            <span>Your Email*</span>
                            <input type="text" name="email" id="email" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="col-lg-12 wow slideUp" data-delay=".7">
                        <div className="form-clt">
                            <span>Write Message*</span>
                            <textarea name="message" id="message" placeholder="Write Message" defaultValue={""} />
                        </div>
                    </div>
                    <div className="col-lg-7 wow slideUp" data-delay=".9">
                        <button type="submit" className="theme-btn">
                            Send Message <i className="fa-solid fa-arrow-right-long" />
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default ContactForm