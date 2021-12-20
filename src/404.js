import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h1>404</h1>
            <h2>SORRY</h2>
            <p>This Page Cannot be found.</p>
            <Link to="/">Back to Home Page</Link>
        </div>
     );
}
 
export default NotFound;