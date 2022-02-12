import { getOptionGroupUnstyledUtilityClass } from '@mui/base';
import { Box, Button, Grid, Pagination, Stack } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams, Link} from 'react-router-dom';
import { productContext } from '../../../Contexts/ProductsContext';
import ProductCard from '../ProductCard/ProductCard';

const WatchList = () => {
    const { watch, getWatch } = useContext(productContext)
    // const search = new URLSearchParams(window.location.search)
    // const [searchParams, setSearchParams] = useSearchParams()
    // const [limit, setLimit] = useState(3)
    // const [page, setPage] = useState(searchParams.get('_page') ? searchParams.get("_page") : 1)
    const navigate = useNavigate()

    useEffect(() => {
        getWatch()
    }, [])


    // useEffect(() =>{
    //     setSearchParams({
    //         '_limit': limit,
    //         "_page": page
    //     })
    // }, [limit, page])

    // const handlePage = (e, pageVal) => {
    //     let newPath = `${window.location.pathname}?${search.toString()}`
    //     navigate(newPath)
    //     setSearchParams({'_page': pageVal, '_limit': limit})
    //     getProducts()
    //     setPage(pageVal)
    // }

    return (
        <Box sx={{flexGrow: 1, margin: 4}}>
            <Link to="/add" style={{textDecoration: 'none', marginBottom: '10px'}}>
               <button>Add Contact</button>
            </Link>
            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                {
                    watch ? (
                        watch.map((item, index) => (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <ProductCard item={item} key={index}/>
                                 </Grid>
                        ))
                    ): (<h1>Loading...</h1>)
                }
            </Grid>
            {/* <Stack spacing={2}>
                <Pagination 
                    count={paginatedPages}
                    onChange={handlePage}
                    page={+page}
                />
            </Stack> */}
        </Box>
    );
};

export default WatchList;