import React, { useContext, useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import '../Slider/Styles.css'
import { productContext } from '../../../Contexts/ProductsContext';
import { Link, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];



const Slider = () => {
    const { products, getProducts } = useContext(productContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const [limit, setLimit] = useState(6)
    const [page, setPage] = useState(searchParams.get('_page') ? searchParams.get("_page") : 1)


    useEffect(() =>{
        setSearchParams({
            '_limit': limit,
            "_page": page
        })
    }, [limit, page])


    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <h1>Часы Rolex</h1><h2 style={{paddinLeft: '30px'}} >Посмотреть все</h2>

            </div>
            <div className='Slider'>
            <Carousel breakPoints={breakPoints}>
            {
                        products ? (
                            products.map((item, index) => (
                                <Item key={index}> 
                                <Card sx={{ maxWidth: 306 }}>
          <Link to={`/detail/${item.id}`} style={{textDecoration: 'none', color: 'black'}}> 
          <CardMedia
            component="img"
            height="300"
            image={item.image}
            alt={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          </CardContent>
         <CardContent>
            <Typography>
                ${item.price}
            </Typography>
        </CardContent>
        </Link>
      </Card>
                                    
                                    </Item>
                                     
                            ))
                        ): (<h1>Loading...</h1>)
                    }
        
            </Carousel>
            </div>
        </>
    );
};

export default Slider;