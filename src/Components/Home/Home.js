import { Grid } from '@mui/material';
import React from 'react';
import Content from './Content/Content';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Grid spacing-md={3} spacing-sm={3}>
                <Content/>
            </Grid>
            <Slider />
        </div>
    );
};

export default Home;