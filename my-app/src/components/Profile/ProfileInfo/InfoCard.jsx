import { Box, Grid, Typography } from "@mui/material";

const InfoCard = ({nickname, dateOfBirthday, nationality, city}) => {

    const settingsForInfoTitle = {
        variant: "h6",
        fontWeight: (theme) => theme.typography.fontWeighMedium,
        letterSpacing: (theme) => theme.typography.letterSpacing,
        lineHeight: "3rem",
    }

    const settingsForMyInfo = {
        variant: "h6",
        fontWeight: (theme) => theme.typography.fontWeightBold,
        letterSpacing: (theme) => theme.typography.letterSpacing,
        lineHeight: "3rem",
    }

    return (
        <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            sx={{
                bgcolor: "secondary.main",
                width: "100%",
                borderRadius: "20px",
            }}
        >  
            <Typography 
                component="div"
                variant="h5"
                fontWeight={(theme) => theme.typography.fontWeightBold}
                letterSpacing={(theme) => theme.typography.letterSpacing}
                lineHeight="29px"
                sx={{mt: 3}}
            >
                Personal information
            </Typography>
            <Grid
                container
                sx={{
                    m: 3
                }}
            >
                <Grid item md={6}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box>
                            <Typography {...settingsForInfoTitle} >Nickname</Typography>
                            <Typography {...settingsForInfoTitle} >Date of birth</Typography>
                            <Typography {...settingsForInfoTitle} >Nationality</Typography>
                            <Typography {...settingsForInfoTitle} >City</Typography>
                        </Box>   
                    </Box>
                </Grid>
                <Grid item md={6}>
                <Box display="flex" flexDirection="column" alignItems="center">
                        <Box>
                            <Typography {...settingsForMyInfo} >{nickname}</Typography>
                            <Typography {...settingsForMyInfo} >{dateOfBirthday}</Typography>
                            <Typography {...settingsForMyInfo} >{nationality}</Typography>
                            <Typography {...settingsForMyInfo} >{city}</Typography>
                        </Box>   
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default InfoCard;