import React from "react";
import { Box, Typography } from "@mui/material";
import InfoCard from "./InfoCard";
import FriendsCard from "./FriedsCard/FriendsCard";

const ProfileInfo = () => {

    const myInfo = {
        name: "Ann McChliff",
        description: "Travel blogger",
        status: "Hello, I like travelling and show everything in my blog",
        nickname: "@ann_mcchliff",
        dateOfBirthday: "16 July 2001",
        nationality: "Scottish",
        city: "Edinburgh",
    }

    const typographySettings = {
        component: "div",
        letterSpacing: (theme) => theme.typography.letterSpacing
    }
    
    return (
        <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                sx ={{
                   mt: 3
                }}
        >
            <Typography 
                {...typographySettings}  
                variant="h4"
                fontWeight={(theme) => theme.typography.fontWeightBold}
                lineHeight="4rem"
            >
                {myInfo.name}
            </Typography>
            <Typography
                {...typographySettings}
                variant="h5"
                fontWeight={(theme) => theme.typography.fontWeightLight}
                lineHeight="2rem"
            >
                {myInfo.description}
            </Typography>
            <Typography
                {...typographySettings}
                variant="h5"
                fontWeight={(theme) => theme.typography.fontWeightBold}
                lineHeight="3rem"
                sx={{
                    m: 5,
                    color: "accent.main",
                }}
            >
                {myInfo.status}
            </Typography>
            <InfoCard 
                nickname={myInfo.nickname}
                dateOfBirthday={myInfo.dateOfBirthday}
                nationality={myInfo.nationality}
                city={myInfo.city}
            />
            <FriendsCard />

        </Box>
    )
}

export default ProfileInfo;