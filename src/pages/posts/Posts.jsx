import './Posts.css';
import {Link} from "react-router-dom";

const stories= [
    {blogpost:1, name:"test1"},
    {blogpost:2, name:"test2"},
    {blogpost:3, name:"test3"},
];


function Posts() {
    return (
        <div className="overzichtPage">
            <h1>Overzicht</h1>
            {stories.map((story) => (
                <article key={stories.blogpost}>
                    <Link to={`/overzicht/${story.blogpost}`}>
                        {story.name}
                    </Link>
                </article>
                ))}


        </div>
    );
}

export default Posts