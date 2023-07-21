import { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

import { UserContext } from '../context/UserContextProvider';


function Header() {

    const { loginUser, setLoginUser } = useContext(UserContext)
    const Navigate = useNavigate()
    function handlelogout(e) {
        localStorage.removeItem('loginUser')
        setLoginUser(localStorage.getItem('loginUser'))
        Navigate('/login')
    }
    const wrapFirstLetterInDiv = (loginUser) => {
        const firstLetter = loginUser.charAt(0).toUpperCase();
        return (
            <div style={{ display: "inline-block", borderRadius: "50%", width: "30px", height: "30px", textAlign: "center", lineHeight: "25px", background: "gray", color: "white", fontWeight: "bold" }}>
                {firstLetter}
            </div>
        );
    };


    return (
        <section id="header">
            <div className="rightactions">
                <div className='logo'><img src="logo.png" alt="Logo" className="logo-img" /></div>

            </div>
            <div className='middle-menu'>
                <ul>
                {loginUser ? (
                    <>
                        <li><Link className="text-dark font-bold mt-2 mb-2" to="/Join">
                           Join Msg.
                        </Link></li>
                    </>
                ) : (
                    <>
                        <li><Link className="text-dark font-bold mt-2 mb-2" to="/login">
                             Login 
                        </Link></li>
                        <li><Link className="text-dark font-bold  mt-2 mb-2" to="/reg">
                             Registration 
                        </Link></li>
                    </>
                )}
                </ul>
            </div>
            {loginUser ? (
                <div className="logout-action">
                    <div className="d-flex m-auto mb-2 text-capitalize">
                            <div className="user-avatar">{wrapFirstLetterInDiv(loginUser)}</div>
                           
                    </div>

                    <button
                        onClick={(e) => {
                            handlelogout(e);
                        }}
                        className="btn btn-danger"
                    >
                        <i class="bi bi-power"></i>
                    </button>
                </div>
            ) : (
                <></>
            )}

        </section>
    );
}

export default Header;