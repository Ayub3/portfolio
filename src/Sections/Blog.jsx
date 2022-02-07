import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { BsArrowUpRightSquareFill } from 'react-icons/bs';

const blogList = [
    {
        id: 1,
        title: 'Deep dive: CI/CD',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,repudiandae quo! Fugit, labore. Alias dignissimos quos,nostrum et accusamus perspiciatis, minima fugit aut qui eapariatur fugiat sed, expedita molestias!',
        link: 'https://towardsaws.com/set-up-a-cloud-native-ci-cd-pipeline-in-under-7-minutes-using-aws-codepipeline-s3-and-codebuild-1b6166daf694',
    },
    {
        id: 2,
        title: 'Deep dive: CI/CD',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,repudiandae quo! Fugit, labore. Alias dignissimos quos,nostrum et accusamus perspiciatis, minima fugit aut qui eapariatur fugiat sed, expedita molestias!',
        link: 'https://towardsaws.com/set-up-a-cloud-native-ci-cd-pipeline-in-under-7-minutes-using-aws-codepipeline-s3-and-codebuild-1b6166daf694',
    },
    {
        id: 3,
        title: 'Deep dive: CI/CD',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,repudiandae quo! Fugit, labore. Alias dignissimos quos,nostrum et accusamus perspiciatis, minima fugit aut qui eapariatur fugiat sed, expedita molestias!',
        link: 'https://towardsaws.com/set-up-a-cloud-native-ci-cd-pipeline-in-under-7-minutes-using-aws-codepipeline-s3-and-codebuild-1b6166daf694',
    },
    {
        id: 4,
        title: 'Deep dive: CI/CD',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,repudiandae quo! Fugit, labore. Alias dignissimos quos,nostrum et accusamus perspiciatis, minima fugit aut qui eapariatur fugiat sed, expedita molestias!',
        link: 'https://towardsaws.com/set-up-a-cloud-native-ci-cd-pipeline-in-under-7-minutes-using-aws-codepipeline-s3-and-codebuild-1b6166daf694',
    },
];

const Blogs = () => {
    return (
        <section id="blogs" className="top-margin">
            <h1 className="section-title">Featured Blogs</h1>
            <Grid container spacing={5} sx={{ mt: 3 }}>
                {blogList.map((blog) => (
                    <Grid item sm={6} key={blog.id}>
                        <a href={blog.link} target="_blank">
                            <Card
                                sx={{ background: '#1e1e1e', height: '100%' }}
                            >
                                <CardActionArea>
                                    <CardContent>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                                sx={{ color: '#fff' }}
                                            >
                                                {blog.title}
                                            </Typography>

                                            <BsArrowUpRightSquareFill
                                                style={{
                                                    fontSize: '1.5rem',
                                                    color: '#fff',
                                                }}
                                            />
                                        </Box>

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ color: '#fff', mt: 2 }}
                                        >
                                            {blog.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                    </Grid>
                ))}
            </Grid>
        </section>
    );
};

export default Blogs;
