import './Posts.css';
import {Link} from "react-router-dom";
import posts from '../../constants/data.json';
import {useEffect, useState} from "react";


// const stories= [
//     {blogpost:1, name:"test1"},
//     {blogpost:2, name:"test2"},
//     {blogpost:3, name:"test3"},
// ];

// console.log(posts)

function Posts() {
    const[allBlogPosts, setAllBlogPosts] = useState({})

    useEffect(() => {
        setAllBlogPosts(posts);
        console.log('Het laden van de database is gelukt', setAllBlogPosts)
    }, []);
    return (
        <div className="overzichtPage">
            <h1>Overzicht</h1>
            {posts.map((post) => (
                <article key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <article>
                            {/*{post.title}, ({post.author})*/}
                            {/*{post.comments} reacties - {post.shares} keer gedeeld*/}
                            <p>{post.title}, ({post.author})</p>
                            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                        </article>
                    </Link>
                </article>
                ))}
        </div>
    );
}

export default Posts