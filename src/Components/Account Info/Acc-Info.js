import React from 'react';
import Signin from '../Signin/Signin';
import { Link } from 'react-router-dom';
import '../Account Info/Acc-Info.css'
const AccInfo = () => {
    // dummy 
    const [email, setEmail] = React.useState('');
    const callback = (emailId) => {
        setEmail(emailId)
    }

    return (
        <>
            <div>
                <ul className="movies-list">
                    <li id="movies-logo">NETFLIX</li>
                    <li id="movies-list">
                        <Link id="mpe" to={"/movies"}>
                            Movies
                        </Link>
                    </li>
                    <li id="movies-list">
                        <Link id="mpe" to={"/podcast"}>
                            Podcast
                        </Link>
                    </li>
                    <li id="movies-list">
                        <Link id="mpe" to={"/e-books"}>
                            E-Books
                        </Link>
                    </li>
                </ul>
            </div>
            <hr />





            <p>{email}</p>
            <div className='no-data'><Signin getEmail={callback}></Signin></div>
        </>
    );
}

export default AccInfo;

