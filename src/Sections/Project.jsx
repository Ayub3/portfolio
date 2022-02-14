import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Button,
    Stack,
} from '@mui/material';
import chatti from '../Images/chatti.png';
import recycle from '../Images/recycle.png';
import jummahadmin from '../Images/jummahadmin.png';
import { BsArrowUpRightSquareFill } from 'react-icons/bs';

const projectList = [
    {
        id: 1,
        img: chatti,
        title: 'Chatti',
        description:
            "The app suggests fun, quick activities to do, which are targeted at children's early stages development goals.",
        site: 'https://chatti-app.herokuapp.com/',
        repo: 'https://github.com/Ayub3/chatti',
    },
    {
        id: 2,
        img: recycle,
        title: 'Reduce,Reuse,Recycle',
        description:
            'An interactive game that teaches children the importance of recycling.',
        site: 'https://reduce-reuse-recycle.netlify.app/',
        repo: 'https://github.com/Ayub3/recycling-game',
    },
    {
        id: 3,
        img: jummahadmin,
        title: 'Jummah App',
        description:
            'An app that centralises all of my local mosques Friday Sermons.',
        site: 'https://reduce-reuse-recycle.netlify.app/',
        repo: 'https://github.com/Ayub3/JummahApp',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="top-margin">
            <h1 className="section-title">Projects</h1>
            <Grid container spacing={5} sx={{ mt: 3 }}>
                {projectList.map((project) => (
                    <Grid item sm={6} lg={4} key={project.id}>
                        <Card sx={{ background: '#1e1e1e', height: '100%' }}>
                            <CardMedia component="img" image={project.img} />

                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{ color: '#fff', textAlign: 'center' }}
                                >
                                    {project.title}
                                </Typography>
                                <div
                                    style={{
                                        display: 'flex',
                                        'justify-content': 'space-between',
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        target="_blank"
                                        href={project.site}
                                    >
                                        Site
                                    </Button>
                                    <Button
                                        variant="contained"
                                        target="_blank"
                                        href={project.repo}
                                    >
                                        Repo
                                    </Button>
                                </div>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ color: '#fff', mt: 2 }}
                                >
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </section>
    );
};

export default Projects;
