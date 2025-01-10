import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import MediumIcon from '@mui/icons-material/Medium';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/dimejishekoni" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/dimeji-shekoni/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/dimejishekoni/dimejishekoni.github.io" target="_blank" rel="noreferrer">Oladimeji Shekoni</a> </p>
    </footer>
  );
}

export default Footer;