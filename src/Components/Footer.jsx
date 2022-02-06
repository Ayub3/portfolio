import { BsGithub } from 'react-icons/bs';
import { AiFillMediumSquare, AiFillLinkedin } from 'react-icons/ai';
import { BiEnvelope } from 'react-icons/bi';
import { Box } from '@mui/system';

const icons = [
    {
        id: 1,
        icon: (
            <BsGithub className="social-icon" style={{ marginRight: '2rem' }} />
        ),
        link: 'https://github.com/',
    },
    {
        id: 2,
        icon: (
            <AiFillMediumSquare
                className="social-icon"
                style={{ marginRight: '2rem' }}
            />
        ),
        link: 'https://medium.com/',
    },
    {
        id: 3,
        icon: (
            <AiFillLinkedin
                className="social-icon"
                style={{ marginRight: '2rem' }}
            />
        ),
        link: 'https://www.linkedin.com/login',
    },
    {
        id: 4,
        icon: <BiEnvelope className="social-icon" />,
        link: 'mailto:ahmeraltaf67@gmail.com',
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <Box sx={{ my: 2 }}>
                {icons.map((icon) => (
                    <a href={icon.link} target="_blank" key={icon.id}>
                        {icon.icon}
                    </a>
                ))}
            </Box>
            <p>&copy; {new Date().getFullYear()} - Ayub</p>
        </footer>
    );
};

export default Footer;
