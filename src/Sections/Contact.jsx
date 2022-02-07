import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        subject: '',
        name: '',
        email: '',
        message: '',
    });

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <section id="contact" className="top-margin">
            <h1 className="section-title">Contact</h1>

            <Box sx={{ mt: 8 }}>
                <form onSubmit={submitHandler}>
                    <div>
                        <TextField
                            type="text"
                            label="Subject"
                            variant="outlined"
                            fullWidth
                            autoComplete="off"
                            InputLabelProps={{ className: 'textfield-color' }}
                            inputProps={{ className: 'textfield-color' }}
                            InputProps={{
                                classes: {
                                    notchedOutline: 'textfield-outline',
                                },
                            }}
                            onChange={(e) =>
                                setData({ ...data, subject: e.target.value })
                            }
                        />
                    </div>

                    <div>
                        <TextField
                            type="text"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            autoComplete="off"
                            InputLabelProps={{ className: 'textfield-color' }}
                            inputProps={{ className: 'textfield-color' }}
                            sx={{ mt: 5 }}
                            InputProps={{
                                classes: {
                                    notchedOutline: 'textfield-outline',
                                },
                            }}
                            onChange={(e) =>
                                setData({ ...data, name: e.target.value })
                            }
                        />
                    </div>

                    <div>
                        <TextField
                            type="email"
                            label="E-mail"
                            variant="outlined"
                            fullWidth
                            autoComplete="off"
                            required
                            InputLabelProps={{ className: 'textfield-color' }}
                            inputProps={{ className: 'textfield-color' }}
                            sx={{ mt: 5 }}
                            InputProps={{
                                classes: {
                                    notchedOutline: 'textfield-outline',
                                },
                            }}
                            onChange={(e) =>
                                setData({ ...data, email: e.target.value })
                            }
                        />
                    </div>

                    <div>
                        <TextField
                            type="text"
                            label="Message"
                            variant="outlined"
                            fullWidth
                            autoComplete="off"
                            multiline
                            rows={8}
                            InputLabelProps={{ className: 'textfield-color' }}
                            inputProps={{ className: 'textfield-color' }}
                            sx={{ mt: 5 }}
                            InputProps={{
                                classes: {
                                    notchedOutline: 'textfield-outline',
                                },
                            }}
                            onChange={(e) =>
                                setData({ ...data, message: e.target.value })
                            }
                        />
                    </div>

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 7,
                            py: 2,
                        }}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </section>
    );
};

export default Contact;
