import './Blogpost.css';
import {Link, useParams} from "react-router-dom";
// import posts from '../../constants/data.json';
import axios from "axios";
import {useEffect, useState} from "react";
import changeDate from "../../helpers/changeDate.jsx";



function Blogpost() {

    const {id} = useParams();
    const linkApiSingle = `https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`;
    const [blogPost, setBlogPost] = useState("");
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    // const createDate = posts[id-1].created
    async function fetchBlogPost () {
        toggleLoading(true);
        toggleError(false);
        try {
// Hier haal je data op
            const responsePost = await axios.get(linkApiSingle, {
                headers: {
                    'novi-education-project-id': 'c28ee213-3929-411e-8859-3b773da0246e'
                }});
            setBlogPost(responsePost.data);
            console.log("data is opgehaald", responsePost);
        } catch (e) {
            toggleError(true)
            console.error(e);
// Hier behandel je de errors
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        void fetchBlogPost()
    }, []);

    return (
        <>
            <article>
                {/*<h1>{id}</h1>*/}
                <h2>{blogPost.title}</h2>
                <h3>{blogPost.subtitle}</h3>
                <p>Geschreven door {blogPost.author} created: {blogPost.created} </p>
                {/*<p>Geschreven door {blogPost.author} created: {changeDate(blogPost.created)} </p>*/}
                <p>{blogPost.content}</p>
                <p>{blogPost.comments} reacties - {blogPost.shares} keer gedeeld</p>
                <p>terug naar de <Link to={"/"}>overzichtspagina</Link></p>

            </article>
        </>

    )
}
    export default Blogpost