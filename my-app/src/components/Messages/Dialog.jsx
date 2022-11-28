import {useRef, useState} from "react";
import { useStickyScroll } from "use-chat-scroll";
import { Box, Avatar, Typography, TextField, Button } from "@mui/material";

const Dialog = ({id, avatar, memberName, messages, sendMessage}) => {

    const MessageBox = ({avatar, text, fromMe}) => {
        return (
            <Box
                width="100%"
            >
                <Box
                    sx={fromMe ? ({
    
                    }) : ({
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    })}
                >
                    {fromMe ? (
                            null
                        ) : (
                            <Avatar src={avatar} alt={avatar} />
                        )}
                    <Box
                        sx={fromMe ? ({
                                float: "right",
                                maxWidth: "60%",
                                borderRadius: "20px",
                                bgcolor: "secondary.main",
                                m: 1,
                            }) : ({
                                float: "left",
                                maxWidth: "60%",
                                borderRadius: "20px",
                                bgcolor: "secondary.main",
                                m: 1,
                        })}
                    >
                        <Typography
                            
                            letterSpacing={(theme) => theme.typography.letterSpacing}
                            variant="h6"
                            sx={{
                                mt: 1,
                                mb: 1,
                                ml: 2,
                                mr: 2,
                            }}
                        >
                            {text}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        );
    }

    const chatContainerRef = useRef();
    useStickyScroll(chatContainerRef, messages);

    const [myMessage, setMyMessage] = useState("");

    const handleSendClick = (id, text) => {
        if(text.length) {
            sendMessage(id, text);
            setMyMessage("");
        } else {
            return
        }
    }

    return (
        <>
            <Box
                sx={{
                    mt: 6,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <Typography
                    variant="h5"
                    fontWeight={(theme) => theme.typography.fontWeightBold}
                    lineHeight="4rem"
                    sx={{mb: 2}}
                >
                    {memberName}
                </Typography>
            </Box>
            <Box
                ref={chatContainerRef}
                sx={{
                    height: "450px",
                    overflow: "auto",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {messages.map((message, index) => (
                    <MessageBox avatar={avatar} text={message.text} fromMe={message.fromMe} key={index} />
                ))}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    bgcolor: "secondary.main",
                    borderRadius: "20px",
                    mt: 3,
                }}
            >
                <TextField label="Write message..." variant="standard"
                    value={myMessage}
                    onChange={(event) => setMyMessage(event.target.value)}
                    sx={{
                        m: 3,
                        width: "100%",
                        borderRadius: "20px",
                    }}
                />
                <Button
                    type="button"
                    onClick={(event) => handleSendClick(id, myMessage)}
                    variant="text"
                    sx={{
                        color: "black",
                        fontSize: "1.3rem",
                        mr: 2
                    }}
                >
                    SEND
                </Button>
            </Box>
        </>
    );
}

export default Dialog;