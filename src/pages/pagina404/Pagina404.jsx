import './Pagina404.css'
import {Link} from "react-router-dom";

function Pagina404() {
    return (
        <main className="pagina404Page">
            <h2>Oops... This page doesn't exist</h2>
            <p>Take me back to the <Link to="/">home page.</Link></p>
        </main>
    )
}
export default Pagina404