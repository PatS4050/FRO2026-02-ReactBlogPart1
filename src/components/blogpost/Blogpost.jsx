import './Blogpost.css';
import {Link, useParams} from "react-router-dom";
import posts from '../../constants/data.json';



function Blogpost() {
    const {id} = useParams();
    console.log(posts)


    return (
        <>

            <article>
                <h1>{posts.title}</h1>
                <h3>{posts.subtitle}</h3>
                <p>Geschreven door {posts.author}</p>
                <p>{posts.content}</p>
                <p>{posts.comments} reacties - {posts.shares} keer gedeeld</p>
                <p>terug naar de <Link to={}>overzichtspagina</Link>Link> </p>

            </article>
        </>

    )
}
    export default Blogpost