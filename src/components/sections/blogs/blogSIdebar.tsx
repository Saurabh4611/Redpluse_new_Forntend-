import { Link } from "react-router-dom";

const categories = [
    { name: 'Donation', count: 8 },
    { name: 'Volunteering', count: 11 },
    { name: 'Camps', count: 12, active: true },
    { name: 'Events', count: 18 },
    { name: 'Available', count: 7 },
];



const tags = [
    'Uncategorized',
    'Camps',
    'Awareness',
    'Helping',
    'Redpluse',
    'Blood Donation',
    'Collabrations',
];

const BlogSidebar = () => {
    return (
        <div className="main-sidebar">
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Search</h3>
                </div>
                <div className="search-widget">
                    <form action="#">
                        <input type="text" placeholder="Search here" />
                        <button type="submit">
                            <i className="fa-solid fa-magnifying-glass" />
                        </button>
                    </form>
                </div>
            </div>

            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Categories</h3>
                </div>
                <div className="news-widget-categories">
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index} className={category.active ? 'active' : ''}>
                                <Link to="/news-details">{category.name}</Link>
                                <span>({category.count})</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

           

            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Tags</h3>
                </div>
                <div className="news-widget-categories">
                    <div className="tagcloud">
                        {tags.map((tag, index) => (
                            <Link to="/news-details" key={index}>
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;