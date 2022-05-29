import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { SiLeetcode } from "react-icons/si";
import { FiPhoneCall } from "react-icons/Fi";
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { display } from '@mui/system';

const Footer = () => {
  return (
    <FooterWrapper>

      <LinkList>

        <LinkColumn>
          <FiPhoneCall size='3rem' />
          <LinkTitle></LinkTitle>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem title='Call me' target="_blank" rel="noopener noreferrer" href='tel:+919834751723'>
            +919834751723
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <AiOutlineMail size='3rem' />

          <LinkTitle></LinkTitle>
          <LinkTitle>E-mail</LinkTitle>

          <LinkItem title='Mail Me' target="_blank" rel="noopener noreferrer" href='mailto:gauravbhandarkar94@gmail.com'>

            gauravbhandarkar94@gmail.com

          </LinkItem>
        </LinkColumn>

      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Follow Me</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
      <SocialContainer>
        <SocialIcons title="Github" target="_blank" rel="noopener noreferrer" href='https://github.com/DracoCoder'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons title="LinkedIn" target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/gaurav-bhandarkar-658189208/'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons target="_blank" rel="noopener noreferrer" href='https://leetcode.com/GauravCodes/'>
          <SiLeetcode title="Leetcode" size='3rem' />
        </SocialIcons>
        <SocialIcons title="Instagram" target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/gauravb_07/'>
          <AiFillInstagram size='3rem' />
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
