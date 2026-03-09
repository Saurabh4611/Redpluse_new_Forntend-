import { Link } from "react-router-dom";

const commentsData = [
    {
    id: 1,
    author: 'Rahul Sharma',
    date: 'May 18, 2025 at 2:37 pm',
    image: '/img/news/comment.png',
    text: 'बहुत अच्छा अभियान है। Blood donation सच में किसी की जान बचा सकता है। अगर हम सभी समय-समय पर blood donate करें तो कई लोगों की जिंदगी बचाई जा सकती है।'
},
{
    id: 2,
    author: 'Robert johnson',
    date: 'May 19, 2025 at 3:10 pm',
    image: '/img/news/comment-2.png',
    text: 'यह बहुत ही जरूरी initiative है। Hospitals में अक्सर blood की कमी होती है। मैं सभी लोगों से request करती हूँ कि अगर आप healthy हैं तो जरूर blood donate करें।'
}
];

const BlogComments = () => {
    return (
        <div className="comments-area">
            <div className="comments-heading">
                <h3>{commentsData.length} Comments</h3>
            </div>
            {commentsData.map((comment, index) => (
                <div key={comment.id} className={`blog-single-comment d-flex gap-4 pb-5 ${index === 0 ? 'pt-4' : 'pt-5'}`}>
                    <div className="image">
                        <img src={comment.image} alt="comment" />
                    </div>
                    <div className="content">
                        <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                            <div className="con">
                                <h5><Link to="/news-details">{comment.author}</Link></h5>
                                <span>{comment.date}</span>
                            </div>
                            <div className="star">
                                {[...Array(Math.floor(5))].map((_, i) => (
                                    <i key={i} className="fas fa-star" />
                                ))}
                            </div>
                        </div>
                        <p className="mt-30 mb-4">{comment.text}</p>
                        <Link to="/news-details" className="reply">Reply</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogComments;