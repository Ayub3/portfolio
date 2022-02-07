import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar.jsx';
import Home from './Sections/Home';
import Projects from './Sections/Project';
import Blogs from './Sections/Blog';
import Contact from './Sections/Contact';
import Footer from './Components/Footer';
import { animateScroll as scroll } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';

function App() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 250) {
            setVisible(true);
        } else if (scrolled <= 250) {
            setVisible(false);
        }
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <NavBar />
            <main className="main-container">
                <Home />
                <Projects />
                <Blogs />
                <Contact />
            </main>
            <Footer />
            {/* --------SCROLL TO TOP BUTTON-------- */}

            {visible && (
                <button
                    onClick={() => scroll.scrollToTop()}
                    className="scroll-top-btn"
                >
                    <FiArrowUp style={{ fontSize: '1.5rem', color: '#fff' }} />
                </button>
            )}
        </>
    );
}

export default App;
