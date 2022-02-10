import { Grid } from '@mui/material';
import React from 'react';
import SideBar from '../SideBar/SideBar';
import Content from './Content/Content';

const Home = () => {
    return (
        <div>
            <Grid spacing-md={3} spacing-sm={3}>
                <SideBar/>
                <Content/>
            </Grid>
        </div>
    );
};

export default Home;