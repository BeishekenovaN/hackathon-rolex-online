import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { productContext } from '../../Contexts/ProductsContext';
import { Button } from '@mui/material';
import './MyNavbar.css'
import  Logo from '../Image/logo/Logo'




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function MyNavbar() {
    const { cartLength, getCartLength, getProducts, useAuth, logout } = React.useContext(productContext)
    const [ searchParams, setSearchParams ] = useSearchParams()
    const[ searchVal, setSearchVal ] = React.useState(searchParams.get('q') ? searchParams.get('q') : '')

    const currentUser = useAuth()
    async function handleLogOut(){
      try {
        await logout()
      } catch(error) {
        console.log(error);
      }
    }

    React.useEffect(() => {
        setSearchParams({
            'q': searchVal,
            '_limit': 3,
            '_page': 1
        })
    }, [searchVal])


    const handleValue = (e) => {
        const search = new URLSearchParams(window.location.search)
        search.set('q', e.target.value)
        setSearchVal(e.target.value)
        setSearchParams({
            'q': searchVal,
            '_limit': 3,
            '_page': 1
        })
        getProducts()
    }

    React.useEffect(() => {
        getCartLength()
    }, [])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
        
      <Link  style={{textDecoration: 'none'}} to={!currentUser ? '/login' : '#' }>
        <MenuItem disabled={currentUser ? true : false}  onClick={handleMenuClose}>Login</MenuItem>
      </Link>
        
      <Link style={{textDecoration: 'none'}} to={!currentUser ? '/register' : '#'}>
        <MenuItem  disabled={currentUser ? true : false} onClick={handleMenuClose}>Register</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    
    >
        <Link to='/cart' style={{color: 'white'}}>
        <IconButton sx={{color: 'black'}} color="inherit">
            <Badge badgeContent={cartLength} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
        </Link>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  
  const navigate = useNavigate()

  const returnHomePage = () => {
    navigate('/')
  }
  
  return (
    <Box sx={{ flexGrow: 1, position: 'absolute',top: 0, zIndex: 5, width: '100%'}}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 0, }}  >           
        <Toolbar>  
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchVal}
              onChange={handleValue}
            />
          </Search>

          
          <Box sx={{ flexGrow: 1 }} />

          <div onClick={returnHomePage}  className='logo'>
           <Logo />
          </div>
       
          {currentUser?.email === "admin1@gmail.com" ? (
            <Link to='/add'>
            <Button color='warning'>
              Добавить
            </Button>
            </Link>
          ) :null
        }
          {
            currentUser?.email // optinal changing если в обхекте есть имейл то вытащи его иначе не иди дальше
          }
          
          {currentUser ? (
            <Button variant='success' disabled={!currentUser} onClick={handleLogOut}>Log Out</Button>
          ) : null
        }
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           <Link to='/cart'>
                <IconButton>
                    <Badge badgeContent={cartLength} color='secondary'>
                        <ShoppingCartIcon sx={{color: 'white'}}/>
                    </Badge>
                </IconButton>
           </Link>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          
        </Toolbar>
        {/* <div className='bgNavbar'>
          <video autoPlay loop>
              <source src={Video} type='video/mp4'/>
            </video>
          </div> */}
          
           {/* <div className='bgNavbar' >
            <BackgroundVideo />
          </div> */}
      </AppBar>
      {renderMobileMenu}
      {renderMenu}     
    </Box>
  );
}
