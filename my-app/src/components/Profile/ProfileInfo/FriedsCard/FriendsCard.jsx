import React from "react";
import styles from "./FriendsCard.module.css"
import { Box, Typography } from "@mui/material";
import chris from "../../../friends-avatars/chris.jpg";
import joseph from "../../../friends-avatars/joseph.jpg";
import may from "../../../friends-avatars/may.jpg";
import vicky from "../../../friends-avatars/vicky.jpg";

const friendsAvatars = [chris, joseph, may, vicky];

const FriendsCard = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
                width: "100%",
                bgcolor: "secondary.main",
                borderRadius: "20px",
                mt: 6,
                mb: 10,
            }}
        >
            <Typography 
                component="div"
                variant="h5"
                fontWeight={(theme) => theme.typography.fontWeightBold}
                letterSpacing={(theme) => theme.typography.letterSpacing}
                sx={{mt: 3}}
            >
                Friends
            </Typography>
            <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
            >
                {friendsAvatars.map((ava, index) => (
                    <div key={index} className={styles.avaBox}>
                        <img src={ava} alt={ava} />
                    </div>
                ))}
            </Box>
        </Box>
    )
}

export default FriendsCard;