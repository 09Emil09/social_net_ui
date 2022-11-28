import React from "react";
import styles from "./NavBar.module.css"
import { Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {

    const {
        menuOpen,
        closeMenu = Function.prototype,
        menuItems,
    } = props;

    return (
        <Drawer
            anchor="right"
            open={menuOpen}
            onClose={closeMenu}
        >
            <List
                sx={{
                    width: "250px",
                }}
            >
                {menuItems.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <div className={styles.menuItem}>
                            <NavLink 
                                to={item.label.toLowerCase()}
                                className={({ isActive }) => isActive ? styles.activeLink : null}
                            >
                                {item.label}
                            </NavLink>
                        </div>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default NavBar;