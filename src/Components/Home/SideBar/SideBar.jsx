import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { productContext } from '../../../Contexts/ProductsContext';
import { styled } from '@mui/material/styles'
import {Box, Grid, Paper, FormControl, FormLabel, RadioGroup,    FormControlLabel, Radio, Slider, Button 
} from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const SideBar = () => {
    const search = new URLSearchParams(window.location.search)
    const navigate = useNavigate()
    const { getProducts } = useContext(productContext)
    const [type, setType] = useState(search.get('type') || '') 
    const [price, setPrice] = useState(search.get('price_lte') || 0)
    
    const [searchParams, setSearchParams] = useSearchParams()

    const filterProducts = (key, value) => {
        search.set(key, value)
        let newPath = `${window.location.pathname}?${search.toString()}`
        navigate(newPath)
        setType(search.get('type') || '')
        setPrice(+search.get('price_lte' || 0))
        getProducts()
    }

    const handleChangeType = (e, value) => {
        search.set(e, value)
        let newPath = `${window.location.pathname}?${search.toString()}`
        navigate(newPath)
        setType(search.get('type') || '')
        getProducts()
    }

    const resetFilter = () => {
        navigate('/')
        setPrice(0)
        setType('')
        setSearchParams({
            '_limit': 3,
            "_page": 1
        })
        getProducts()
    }
    
    
    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item md={3}>
                    <Paper elevation={2}>
                        <FormControl component='fieldset'>
                            <FormLabel component='legend'>
                                Тип
                            </FormLabel>
                            <RadioGroup    
                                aria-label='gender' 
                                name='gender1' 
                                value={type} 
                                onChange={(e) => handleChangeType("type", e.target.value)}
                            >
                                <FormControlLabel 
                                    value='appartments'
                                    control={<Radio/>}
                                    label='Appartments'
                                />
                                <FormControlLabel
                                    value='villa'
                                    control={<Radio/>}
                                    label='Villa'
                                />
                            </RadioGroup>
                        </FormControl>
                        
                        <Grid>
                            <Slider 
                                onChange={(e) => filterProducts('price_lte', e.target.value)} valueLabelDisplay='auto' max={200000}
                                value={price}
                                step={500}
                            />
                        </Grid>
                        <Button onClick={resetFilter}
                            variant='contained' color='warning'>
                            Сбросить
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
            
        </Box>
    );
};

export default SideBar;