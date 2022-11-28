import React from "react";
import { AppBar, Toolbar, Avatar, IconButton, Typography } from "@mui/material";
import mainAvatar from "./Profile/ProfileInfo/ProfileGallery/pictures/mainAvatar.jpg"
import { NavLink } from "react-router-dom";
import { Dehaze } from "@mui/icons-material";

const Header = ({handleMenu}) => {

    return (
        <AppBar 
            sx={{
                mb: 100,
                boxShadow: "none"
            }}>
            <Toolbar>
                {window.location.pathname !== "/profile" ? (
                    <>
                        <IconButton
                            sx={{
                                ml: 12,
                            }}
                        >
                            <NavLink to="/profile">
                                <Avatar src={mainAvatar} alt={mainAvatar} />
                            </NavLink>
                        </IconButton>
                        <Typography sx={{flexGrow: 1}}>Ann McChliff</Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenu}
                            sx={{ mr: 12}}
                            
                        >
                            <Dehaze />
                        </IconButton>
                    </>
                ) : (
                    <>
                        <Typography sx={{flexGrow: 1}}></Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenu}
                            sx={{ mr: 12}}
                            
                        >
                            <Dehaze />
                        </IconButton>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Header;