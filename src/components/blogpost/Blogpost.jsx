import './Blogpost.css';
import { useParams } from "react-router-dom";


function Blogpost() {
    let {blogpost} = useParams();


    return (
        <>
            <article>De blog is {blogpost}</article>
        </>

    )
}
    export default Blogpost