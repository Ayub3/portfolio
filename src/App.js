import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar.jsx';
// import Home from './sections/Home';
// import Projects from './sections/Projects';
// import Blogs from './sections/Blogs';
// import Contact from './sections/Contact';
import Footer from './Components/Footer';
// import { animateScroll as scroll } from 'react-scroll';
// import { FiArrowUp } from 'react-icons/fi';

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
            {/* <main className="main-container">
                <Home />
                <Projects />
                <Blogs />
                <Contact />
            </main> */}
            <Footer />

            {/* --------SCROLL TO TOP BUTTON-------- */}
        </>
    );
}

export default App;
