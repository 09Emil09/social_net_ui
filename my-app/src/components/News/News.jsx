import {useState, useEffect} from "react";
import { Grid, Box, Typography, Avatar, IconButton } from "@mui/material";
import styles from "./News.module.css";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

const typographySettings = {
    component: "div",
    letterSpacing: (theme) => theme.typography.letterSpacing,
}

const News = () => {

    const Post = ({id, avatar, memberName, text, photos, time, isLiked, likes, setLike}) => {

        const handleLikeClick = (id) => {
            setLike(id);
        }
    
        return (
            <Grid container
                sx={{
                    width: "100%",
                    bgcolor: "secondary.main",
                    borderRadius: "20px",
                    m: 3,
                }}
            >
                <Grid item md={2}>
                    <IconButton>
                        <Avatar src={avatar} alt={avatar}
                            sx={{
                                width: 80,
                                height: 80,
                                m: 2,
                            }}
                        />
                    </IconButton>
                </Grid>
                <Grid item md={8} mb={3}>
                    <Typography
                        {...typographySettings}
                        fontWeight={(theme) => theme.typography.fontWeightBold}
                        fontSize="1.25rem"
                        sx={{
                            mt: 5,
                        }}
                    >
                        {memberName}
                    </Typography>
                    {text.length ? (
                        <Typography
                            {...typographySettings}
                            fontSize="1.1rem"
                            sx={{
                                mt: 2
                            }}
                        >
                            {text}
                        </Typography>
                    ) : null}
                    {photos.length ? (
                        <Grid container>
                            {photos.map((photo, index) => (
                                <Grid item md={5} key={index}>
                                    <img src={photo} alt={photo} className={styles.postImg} />
                                </Grid>
                            ))}
                        </Grid>
    
                    ) : (
                        null
                    )}
                </Grid>
                <Grid item md={2}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            height: "50%",
                        }}
                    >
                        <Typography sx={{mt: 2}}>
                            {time}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            height: "50%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "end",
                        }}
                    >
                        <Box display="flex" sx={{mb: 2}}>
                            <IconButton
                                sx={{ml: 2}}
                                onClick={(event) => handleLikeClick(id)}
                            >
                                {isLiked ? (
                                    <ThumbUpAltIcon />
                                ) : (
                                    <ThumbUpAltOutlinedIcon />
                                )}
                            </IconButton>
                            <Box 
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    ml: 3
                                }}>
                                <Typography
                                    fontWeight={(theme) => theme.typography.fontWeightBold}
                                >
                                    {likes}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        );
    }

    const [newsData, setNewsData] = useState([]);
    
    useEffect(() => {
        const newsData = JSON.parse(window.localStorage.getItem("newsData"));
        if(newsData) {
            setNewsData(newsData);
        }
    }, [])

    const updateLikesOfPost = (id) => {
        const postIndex = newsData.findIndex(post => post.id === id);
        let updatablePost = {...newsData[postIndex]};
        if(updatablePost.isLiked) {
            updatablePost.isLiked = false;
            updatablePost.likes -= 1;
        }
        else {
            updatablePost.isLiked = true;
            updatablePost.likes += 1;
        }
        setNewsData(newsData => {
            const updatedNewsData = [...newsData];
            updatedNewsData[postIndex] = updatablePost;
            window.localStorage.setItem('newsData', JSON.stringify(updatedNewsData));
            return updatedNewsData;
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
                News
            </Typography>
            {newsData.map((data, index) => (<Post {...data} key={index} setLike={updateLikesOfPost}/>))}
        </Box>
    );
}

export default News;