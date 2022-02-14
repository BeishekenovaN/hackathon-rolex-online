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
import SideBar from '../../Home/SideBar/SideBar'

export default function ProductCard({item}) {
  const {deleteProduct, addToCart, checkProductInCart, useAuth} = React.useContext(productContext)
  const currentUser = useAuth()


  let icons = (
    <CardActions disableSpacing>
         {currentUser?.email === "admin1@gmail.com" ? (
          <Link to={`edit/${item.id}`}>
              <IconButton>
                <EditIcon/>
              </IconButton>
          </Link>
         ) : null
        } 
         {currentUser?.email === "admin1@gmail.com" ? (
               <IconButton onClick={() => deleteProduct(item.id)}>
               <DeleteIcon />
               </IconButton>
                ) :null
            }
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
        <>
          <SideBar />
          <Card sx={{ maxWidth: 320 }}>
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
        </>
  );
}
