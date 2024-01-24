import Rate from './sections/RateSection'
import Navbar from "../Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import {
  Grid,
  Typography,
  Card,
  Button,
  Container,
 
} from "@mui/material";

import banner from "../../assets/banner.png";
import Date from '../Date/Date.tsx';


export default function LandingPage() {

  return (
    <div>
     <Rate/>
      <Navbar />
      <Container>
        <Grid container spacing={2} sx={{ boxShadow: "none" }}>
          <Grid item xs={12}>
            <Typography
              sx={{
                color: "#152C5B",
                fontSize: "40px",
                fontWeight: 700,
                fontFamily: "Poppins",
              }}
              variant="h4"
            >
              Forget Busy Work,Start Next Vacation
            </Typography>
            <Typography
              sx={{
                color: "#B0B0B0",
                fontSize: "16px",
                fontWeight: 300,
                fontFamily: "Poppins",
              }}
              variant="body1"
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              sx={{
                color: "#152C5B",
                fontSize: "20px",
                fontWeight: 500,
                fontFamily: "Poppins",
              }}
            >
              Start Booking
            </Typography>


           <Date/>
          
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ boxShadow: "none" }}>
              <img src={banner} alt="banner" />
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

