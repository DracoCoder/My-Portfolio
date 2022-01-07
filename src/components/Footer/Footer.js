import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode } from "react-icons/si";
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>

      <LinkList>

        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href='tel:+919834751723'>
            +919834751723
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href='mail:gauravbhandarkar94@gmail.com'>
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
        <SocialIcons href='https://github.com/DracoCoder'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/gaurav-bhandarkar-658189208/'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://leetcode.com/GauravCodes/'>
          <SiLeetcode size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.instagram.com/gauravb_07/'>
          <AiFillInstagram size='3rem' />
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
