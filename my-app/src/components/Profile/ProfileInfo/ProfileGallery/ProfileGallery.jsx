import React from "react"
import "./ProfileGallery.css"
import { Box } from "@mui/material";
import Slider from "react-slick"
import breakfast from "./pictures/breakfast.jpg"
import chairs from "./pictures/chairs.jpg"
import mainAvatar from "./pictures/mainAvatar.jpg"
import smiling from "./pictures/smiling.jpg"
import withBike from "./pictures/withBike.jpg"
import lake from "./pictures/lake.jpg"
import willage from "./pictures/willage.jpg"
import beauty from "./pictures/beauty.jpg"
import {FaArrowRight, FaArrowLeft} from "react-icons/fa"

const photos = [mainAvatar, breakfast, chairs, smiling, withBike, lake, willage, beauty];

const ProfileGallery = () => {

    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }
    
    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }

    const [imageIndex, setImageIndex] = React.useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    }

    return (
        <Box
            sx={{
                width: "100%",
                mt: 10,
            }}
        >   
            <Slider {...settings}>
                {photos.map((img, index) => (
                    <div key={index} className={index === imageIndex ? "slide activeSlide" : "slide"}>
                        <img src={img} alt={img} />
                    </div>
                ))}
            </Slider>
        </Box>
    )
}

export default ProfileGallery;