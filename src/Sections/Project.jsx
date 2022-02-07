import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import memories from '../Images/memories.png';
import pizza from '../Images/pizza.png';
import shomium from '../Images/shomium.png';

const projectList = [
    {
        id: 1,
        img: memories,
        title: 'Memories',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,repudiandae quo! Fugit, labore. Alias dignissimos quos,nostrum et accusamus perspiciatis, minima fugit aut qui eapariatur fugiat sed, expedita molestias!',
    },
    {
        id: 2,
        img: pizza,
        title: 'Pizza',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,repudiandae quo! Fugit, labore. Alias dignissimos quos,nostrum et accusamus perspiciatis, minima fugit aut qui eapariatur fugiat sed, expedita molestias!',
    },
    {
        id: 3,
        img: shomium,
        title: 'Shomium',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,repudiandae quo! Fugit, labore. Alias dignissimos quos,nostrum et accusamus perspiciatis, minima fugit aut qui eapariatur fugiat sed, expedita molestias!',
    },
    {
        id: 4,
        img: pizza,
        title: 'Pizza',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,repudiandae quo! Fugit, labore. Alias dignissimos quos,nostrum et accusamus perspiciatis, minima fugit aut qui eapariatur fugiat sed, expedita molestias!',
    },
    {
        id: 5,
        img: memories,
        title: 'Memories',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,repudiandae quo! Fugit, labore. Alias dignissimos quos,nostrum et accusamus perspiciatis, minima fugit aut qui eapariatur fugiat sed, expedita molestias!',
    },
    {
        id: 6,
        img: shomium,
        title: 'Shomium',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,repudiandae quo! Fugit, labore. Alias dignissimos quos,nostrum et accusamus perspiciatis, minima fugit aut qui eapariatur fugiat sed, expedita molestias!',
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
