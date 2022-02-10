import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { productContext } from '../../../Contexts/ProductsContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';

export default function ProductCard({item}) {
  const {deleteProduct, addToCart, checkProductInCart} = React.useContext(productContext)


  let icons = (
    <CardActions disableSpacing>
        <Link to={`edit/${item.id}`}>
            <IconButton>
                <EditIcon/>
            </IconButton>
        </Link>

        <IconButton onClick={() => deleteProduct(item.id)}>
            <DeleteIcon/>
        </IconButton>

        <IconButton onClick={() => {
          addToCart(item)  
        }} 
          color = {checkProductInCart(item.id) ? 'secondary' : 'warning'}  
        >
          <ShoppingCart />
        </IconButton>

    </CardActions>
)



    return (
        <Card sx={{ maxWidth: 420 }}>
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
            <Typography>
                категория: {item.type}
            </Typography>
        </CardContent>
        </Link>
        {icons}
      </Card>
  );
}
