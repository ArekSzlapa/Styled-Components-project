import { StyledSocialIcons } from "./styles/SocialIcons.styled";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import React from "react";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
