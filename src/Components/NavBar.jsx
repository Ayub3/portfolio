import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="hamburger-menu">
                <FiMenu
                    style={{ fontSize: '2rem' }}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </div>

            <div className={`${!showMenu && 'hide-menu'} navbar-links`}>
                {!showMenu ? (
                    // --------------LINKS FOR DESKTOP--------------
                    <>
                        <Link to="home" smooth={true} duration={1000}>
                            <p
                                className="nav-link"
                                onClick={() => setShowMenu(false)}
                            >
                                Home
                            </p>
                        </Link>
                        <Link to="projects" smooth={true} duration={1000}>
                            <p
                                className="nav-link"
                                onClick={() => setShowMenu(false)}
                            >
                                Projects
                            </p>
                        </Link>
                        <Link to="blogs" smooth={true} duration={1000}>
                            <p
                                className="nav-link"
                                onClick={() => setShowMenu(false)}
                            >
                                Blogs
                            </p>
                        </Link>
                        <Link to="contact" smooth={true} duration={1000}>
                            <p
                                className="nav-link"
                                onClick={() => setShowMenu(false)}
                            >
                                Contact
                            </p>
                        </Link>
                    </>
                ) : (
                    // ----------------LINKS FOR MOBILE----------------
                    <>
                        <Link
                            to="home"
                            offset={-250}
                            smooth={true}
                            duration={1000}
                        >
                            <p
                                className="nav-link"
                                onClick={() => setShowMenu(false)}
                            >
                                Home
                            </p>
                        </Link>
                        <Link
                            to="projects"
                            offset={-230}
                            smooth={true}
                            duration={1000}
                        >
                            <p
                                className="nav-link"
                                onClick={() => setShowMenu(false)}
                            >
                                Projects
                            </p>
                        </Link>
                        {/* <Link
                            to="blogs"
                            offset={-230}
                            smooth={true}
                            duration={1000}
                        >
                            <p
                                className="nav-link"
                                onClick={() => setShowMenu(false)}
                            >
                                Blogs
                            </p>
                        </Link> */}
                        <Link
                            to="contact"
                            offset={-230}
                            smooth={true}
                            duration={1000}
                        >
                            <p
                                className="nav-link"
                                onClick={() => setShowMenu(false)}
                            >
                                Contact
                            </p>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
