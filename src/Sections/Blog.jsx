import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
    CardMedia,
} from '@mui/material';
import { Box } from '@mui/system';
import { BsArrowUpRightSquareFill } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import chatti from '../Images/chatti.png';
import recycle from '../Images/recycle.png';
import jummahadmin from '../Images/Screenshot 2022-02-16 at 18.22.53.png';

const blogList = [
    {
        id: 1,
        img: chatti,
        title: 'Chatti',
        description:
            "An app that helps parents with their child's early stages development goals",

        site: 'https://chatti-app.herokuapp.com/',
        repo: 'https://github.com/Ayub3/chatti',
    },
    {
        id: 2,
        img: recycle,
        title: 'Reuse & Recycle',
        description:
            'An interactive game that teaches children the importance of recycling.',

        site: 'https://reduce-reuse-recycle.netlify.app/',
        repo: 'https://github.com/Ayub3/recycling-game',
    },
    {
        id: 3,
        title: 'Jummah App',
        img: jummahadmin,
        description:
            'An app that centralises all of my local mosques Friday Sermons.',
        repo: 'https://github.com/Ayub3/JummahApp',
    },
];

const Blogs = () => {
    return (
        <section id="blogs" className="top-margin">
            <h1 className="section-title">Featured Blogs</h1>
            <Grid container spacing={5} sx={{ mt: 3 }}>
                {blogList.map((blog) => (
                    <Grid item sm={6} lg={4} key={blog.id}>
                        <Card sx={{ background: '#1e1e1e', height: '100%' }}>
                            <CardMedia
                                component="img"
                                style={{ height: '200px' }}
                                image={blog.img}
                            />
                            <CardActionArea>
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <a
                                            href={blog.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <AiFillGithub
                                                style={{
                                                    fontSize: '1.5rem',
                                                    color: '#fff',
                                                }}
                                            />
                                        </a>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            sx={{ color: '#fff' }}
                                        >
                                            {blog.title}
                                        </Typography>
                                        <a
                                            href={blog.site}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <BsArrowUpRightSquareFill
                                                style={{
                                                    fontSize: '1.5rem',
                                                    color: '#fff',
                                                }}
                                            />
                                        </a>
                                    </Box>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        style={{ 'text-align': 'center' }}
                                        sx={{ color: '#fff', mt: 2 }}
                                    >
                                        {blog.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </section>
    );
};

export default Blogs;
