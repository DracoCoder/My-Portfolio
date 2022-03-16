import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SiLeetcode } from "react-icons/si";


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    {/* Div1 is the icon and title */}
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
          <DiCssdeck size="3rem" /> <span>Gaurav Bhandarkar</span>
          {/* Dicssdeck is the icon */}
        </a>
      </Link>
    </Div1>
    {/* Div2 will scroll down to specific parts of the websites */}
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>My Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#technology'>
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </Div2>
    {/* Div3 ContainsSocial Icons Such As Github, LinkedIn */}
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
