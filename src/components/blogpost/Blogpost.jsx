import './Blogpost.css';
import {Link, useParams} from "react-router-dom";
import posts from '../../constants/data.json';



function Blogpost() {
    const {id} = useParams();


    console.log(posts)


    return (
        <>
            <article>
                {/*<h1>{id}</h1>*/}
                <h2>{posts[id-1].title}</h2>
                <h3>{posts[id-1].subtitle}</h3>
                <p>Geschreven door {posts[id-1].author}</p>
                <p>{posts[id-1].content}</p>
                <p>{posts[id-1].comments} reacties - {posts[id-1].shares} keer gedeeld</p>
                <p>terug naar de <Link to={"/"}>overzichtspagina</Link></p>

            </article>
        </>

    )
}
    export default Blogpost