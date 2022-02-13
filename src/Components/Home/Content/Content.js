import { Grid } from '@mui/material';
import React from 'react';
import BackgroundVideo from '../../Image/BackgroundVideo/BackgroundVideo';
import ProductList from '../../Product/ProductList/ProductList';

const Content = () => {
    return (
        <div>
            <BackgroundVideo />
            <Grid>
                <ProductList/>
                
            </Grid>
        
            
    
        </div>
        
    );
};

export default Content;