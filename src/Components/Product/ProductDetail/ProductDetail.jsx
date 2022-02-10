import { Paper, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsContext } from '../../Context/ProductsContext';

const ProductDetail = () => {
    const {id} = useParams()
    const { detail, getDetail } = useContext(productsContext)

    useEffect(() => {
        getDetail(id)
    }, [id])

    return (
        <Paper elevation={3} >
            <Typography variant='h2' style={{textAlign: 'center'}}>О товаре</Typography>
            {
                detail ? (
                    <div  style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div>
                            <img width='450' src={detail.image}/>
                        </div>
                        <div style={{
                            width: '450px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center'
                        }}>
                            <Typography variant='h3'>{detail.title}</Typography>
                            <Typography variant='subtitle1'>{detail.type}</Typography>
                            <Typography variant='body'>{detail.description}</Typography>
                            <Typography variant='h4'>{detail.price}</Typography>
                        </div>
                    </div>
                ): (<h1> Loading . . .</h1>)
            }
        </Paper>
    );
};

export default ProductDetail;