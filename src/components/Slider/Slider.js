import { useState , useEffect } from "react";
import "./Slider.css";

import {Box, Grid} from "@mui/material";
import imgOne from "../assets/images/img_one.jpg";
import imgTwo from "../assets/images/img_two.jpg";
import imgThree from "../assets/images/img_three.jpg";

const Slider = () => { 

    const sliderObj = [
        {
            id:1,
            url:imgOne,
            title:"First image title",
            description:"First image description"
        },
        {
            id:2,
            url:imgTwo,
            title:"Second image title",
            description:"Second image description"
        },
        {
            id:3,
            url:imgThree,
            title:"Third image title",
            description:"Third image description"
        }
    ]

    const [index, setIndex] = useState(0);
    const [visible , setVisible ] = useState(false);

    useEffect(() => {
        const timeout = setInterval(() => {
            if(index === sliderObj.length -1){
                setIndex(0);
                setVisible(false);
            } else{
                setIndex(index +1);
                setVisible(true);
            }
         }, 4000);
         return () => clearInterval(timeout);
    },[index ]);
    const handleClick = (data) =>{
        setIndex(data.id - 1);
       if(visible){
        setVisible(false);
       } else{
        setVisible(true);
       }
    }

    return(
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 2 }}  className="mainSlider">
                    <img src={`${sliderObj[index].url}`}  width={100 + "%"} height={650} alt="slider"/>

                    <div className="sliderData">
                        <Grid container={true} xs={12} sm={12} md={12}>
                            <Grid item xs={12} sm={12} md={6}>
                                <div className="imageData">
                                    <h4> {sliderObj[index].title}</h4>
                                    <h1 className={ visible === false ? "fadeIn" : "fadeOut" }> {sliderObj[index].description}</h1>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <div className="sliderButtons">
                                    {
                                        sliderObj.map((el,i) => {
                                            return(
                                                <div onClick={() => handleClick(el)} key={i} className={` buttonStyle ${ (el.id === index + 1) === true ? "currentImage" :""} `} ></div>
                                            )
                                        })
                                    }
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Box>
        </>
    )
}

export default Slider;