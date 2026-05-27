import './Blogpost.css';
import {Link, useParams} from "react-router-dom";
import posts from '../../constants/data.json';
import changeData from '../../helpers/changeDate.jsx'



function Blogpost() {
    const {id} = useParams();
    // const createDate = posts[id-1].created


    console.log(posts)


    return (
        <>
            <article>
                {/*<h1>{id}</h1>*/}
                <h2>{posts[id-1].title}</h2>
                <h3>{posts[id-1].subtitle}</h3>
                <p>Geschreven door {posts[id-1].author} created: {changeData} </p>
                <p>{posts[id-1].content}</p>
                <p>{posts[id-1].comments} reacties - {posts[id-1].shares} keer gedeeld</p>
                <p>terug naar de <Link to={"/"}>overzichtspagina</Link></p>

            </article>
        </>

    )
}
    export default Blogpost