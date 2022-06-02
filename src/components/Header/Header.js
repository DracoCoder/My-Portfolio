import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SiLeetcode } from "react-icons/si";


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>

    <Div1>
      <DiCssdeck size="3rem" /> <Span>Gaurav's Portfolio</Span>
    </Div1>

    <Div2>
      <li>
        <Link href='#skills'>
          <NavLink>My Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#certificates'>
          <NavLink>Certificates</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About Me</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#footer'>
          <NavLink>Contact Me</NavLink>
        </Link>
      </li>
    </Div2>

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
