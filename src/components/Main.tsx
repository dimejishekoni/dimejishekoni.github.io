import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profile_pic_2 from '../assets/images/profile_pic_2.jpg';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile_pic_2} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/dimejishekoni" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/dimeji-shekoni/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Oladimeji Shekoni</h1>
          <p>Data Analyst | Data Scientist</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/dimejishekoni" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/dimeji-shekoni/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;