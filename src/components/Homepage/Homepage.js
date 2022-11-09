import "./Homepage.css";
import {Box, Grid , Button } from "@mui/material";
import Slider from "../Slider/Slider";

import EastIcon from '@mui/icons-material/East';
import webDesignIcon from "../assets/images/Web-design-icon.svg";
import digitalArtIcon from "../assets/images/Planning-icon.svg";
import webSiteIcon from "../assets/images/Web-icon.svg";


import arrowRightRed from "../assets/images/Arrow-right-red.svg";
import arrowRightBlue from "../assets/images/Arrow-right-blue.svg";
import arrowRightGreen from "../assets/images/Arrow-right-green.svg";



const Homepage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} className="wallContainer">
               <div className="wallData">
                  <h4>HELLO WORLD!</h4>
                  <h1>We are creative agency.</h1>
                  <h1>We build digital work that</h1>
                  <Button variant="contained" endIcon={<EastIcon  className="arrowIcon"/>} className="profileExpBtn">
                    Explore our portfolio
                  </Button>
                  <Grid container={true} xs={12} sm={12} md={12} className="servicesContainer">
                    <Grid item xs={12} sm={12} md={3} className="service webDesign">
                        <div>
                          <img src={webDesignIcon} alt="web designs" />
                          <h4>Web Design</h4>
                            <p>Sed ut perspiciatis unde omni iste natus error sit volunteer accusantum doloremque.</p>
                            <img src={arrowRightRed} alt="arrow Right Red"  className="serviceIconBtn"/>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={3} className="service digitalArt">
                        <div>
                          <img src={digitalArtIcon} alt="digital arts" />
                          <h4>Digital Artwork</h4>
                          <p>Sed ut perspiciatis unde omni iste natus error sit volunteer accusantum doloremque.</p>
                          <img src={arrowRightBlue} alt="arrow Right Blue" className="serviceIconBtn"/>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={3} className="service webSite">
                        <div>
                            <img src={webSiteIcon} alt="web site" />
                            <h4>Website</h4>
                            <p>
                            Sed ut perspiciatis unde omni iste natus error sit volunteer accusantum doloremque. 
                            Ut perspiciatis unde omni iste natus error sit volunteer accusantum doloremque.
                            </p>
                            <img src={arrowRightGreen} alt="arrow Right Green"  className="serviceIconBtn"/>
                        </div>
                    </Grid>

                  </Grid>
               </div>
            </Grid>

            <Grid item xs={12} sm={12} md={5} className="sliderContainer">
                <Slider />
            </Grid>
          </Grid>
      </Box>
    </>
  );
};

export default Homepage;
