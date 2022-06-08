
import { Box } from '@mui/system';
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material"
import ComputerIcon from '@mui/icons-material/Computer';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

// const search = styled("div")(({theme})=> ({}))
const Search = styled("div")(({theme})=> ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}))

const Icons = styled(Box)(({theme})=> ({
    display: "none",
    alignItems: 'center',
    gap: "20px",

    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}));

const UserBox = styled(Box)(({theme})=> ({
    display: "flex",
    alignItems: 'center',
    gap: "10px",

    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}));

const Navbar = () => {

    const [ open, setOpen ] = useState(false)

    return(
        <AppBar position='sticky' sx={{color: '#fff'}}>
            <StyledToolbar>
                <Typography 
                    variant='h6' 
                    sx={{display: { xs: "none", sm: "block"}}}
                >
                React Dashboard App
                </Typography>
                <ComputerIcon sx={{display: { xs: "block", sm: "none"}}}/>
                <Search> <InputBase placeholder='Search'/> </Search>

                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon/>
                    </Badge>    
                    <Badge badgeContent={2} color="error">
                        <NotificationsIcon/>
                    </Badge>
                    <Avatar 
                        alt="Remy Sharp" 
                        src="https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        sx={{width: 30, height: 30}}
                        onClick={e => setOpen(true)}
                    />
                </Icons>

                <UserBox>
                    <Avatar 
                        alt="Remy Sharp" 
                        src="https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        sx={{width: 30, height: 30}}
                    />
                    <Typography variant='span'>Jhon Doe</Typography>
                </UserBox>
            </StyledToolbar>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>

        </AppBar>
    )
}

export default Navbar