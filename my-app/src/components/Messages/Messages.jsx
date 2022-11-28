import { useState, useEffect } from "react";
import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./Messages.module.css";

const typographySettings = {
    component: "div",
    letterSpacing: (theme) => theme.typography.letterSpacing,
}

const Messages = () => {
    
    const Message = ({id, avatar, memberName, text, time, isChecked, isFromMe, setCheckStatus}) => {

        const handleMessageClick = (id) => {
            setCheckStatus(id)
        }
    
        return (
            <Grid container
                sx={{
                    width: "100%",
                    bgcolor: "secondary.main",
                    borderRadius: "20px",
                    m: 1,
                }}
            >
                <Grid item md={2}>
                    <IconButton>
                        <Avatar src={avatar} alt={avatar}
                            sx={{
                                width: 80,
                                height: 80,
                                m: 3,
                            }}
                        />
                    </IconButton>
                </Grid>
                <Grid item md={8}>
                    <Typography
                        {...typographySettings}
                        fontSize="1.25rem"
                        sx={{
                            mt: 2
                        }}
                    >
                        {memberName}
                    </Typography>
                    <div className={styles.messageText}>
                        <NavLink 
                            to={memberName.replace(" ", "_").toLowerCase()}
                            onClick={(event) => handleMessageClick(id)}
                        >
                            {isChecked ? (
                                <Typography
                                    {...typographySettings}
                                    fontSize="1.1rem"
                                    sx={{
                                        mt: 2
                                    }}
                                >
                                    {isFromMe ? ("YOU: ") : (null)}
                                    {text}
                                </Typography>
                            ) : (
                                <Typography
                                    {...typographySettings}
                                    fontSize="1.1rem"
                                    fontWeight={(theme) => theme.typography.fontWeightBold}
                                    sx={{
                                        mt: 2
                                    }}
                                >
                                    {text}
                                </Typography>
                            )}
                        </NavLink>
                    </div>
                </Grid>
                <Grid
                    item
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    {time}
                </Grid>
            </Grid>
        );
    }

    const [messagesData, setMessagesData] = useState([]);
    
    useEffect(() => {
        const messagesData = JSON.parse(window.localStorage.getItem("messagesData"));
        if(messagesData) {
            setMessagesData(messagesData);
        }
    }, [])

    const setCheckStatus = (id) => {
        const messageIndex = messagesData.findIndex(message => message.id === id);
        let updatableMessage = {...messagesData[messageIndex]};
        if(!updatableMessage.isChecked) {
            updatableMessage.isChecked = true;
        }
        setMessagesData(messagesData => {
            const updatedMessagesData = [...messagesData];
            updatedMessagesData[messageIndex] = updatableMessage;
            window.localStorage.setItem('messagesData', JSON.stringify(updatedMessagesData));
            return updatedMessagesData;
        })
    }

    return (
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        sx={{mt: 10, mb: 10}}
        >
            <Typography
                {...typographySettings}
                variant="h5"
                fontWeight={(theme) => theme.typography.fontWeightBold}
                lineHeight="4rem"
            >
                Messages
            </Typography>
            {messagesData.map((data, index) => (<Message {...data} setCheckStatus={setCheckStatus} key={index} />))}
        </Box>
    );
}

export default Messages;