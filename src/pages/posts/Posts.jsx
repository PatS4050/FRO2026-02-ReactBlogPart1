import './Posts.css';
import {Link} from "react-router-dom";
// import posts from '../../constants/data.json';
import {useEffect, useState} from "react";
import axios from "axios";


// const stories= [
//     {blogpost:1, name:"test1"},
//     {blogpost:2, name:"test2"},
//     {blogpost:3, name:"test3"},
// ];

// console.log(posts)
const linkApi = 'https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts';
//project id = 'novi-education-project-id': 'c28ee213-3929-411e-8859-3b773da0246e'


function Posts() {

    const[allBlogPosts, setAllBlogPosts] = useState([])
    const [error, toggleError] = useState(false)
    const [loading, toggleLoading] = useState(false)

    async function fetchBlogPosts () {
        toggleLoading(true);
        toggleError(false);
        try {
// Hier haal je data op
            const responsePosts = await axios.get(linkApi, {
                headers: {
                    'novi-education-project-id': 'c28ee213-3929-411e-8859-3b773da0246e'
                }
            });
            setAllBlogPosts(responsePosts)
            console.log("data is opgehaald")
        } catch (e) {
            toggleError(true)
            console.error(e);
// Hier behandel je de errors
        } finally {
            toggleLoading(false);
        }
    }


    useEffect(() => {
        void fetchBlogPosts()
    }, []);

    return (
        <div className="overzichtPage">
            <h1>Overzicht</h1>
            {allBlogPosts.map((post) => (
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