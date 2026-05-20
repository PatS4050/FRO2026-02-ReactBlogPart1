import './Blogpost.css';
import { useParams } from "react-router-dom";


function Blogpost() {
    const {blogpost} = useParams();


    return (
        <article>De blog is {blogpost}</article>

    )
}
    export default Blogpost