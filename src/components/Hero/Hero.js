import React from 'react';

import { Section, SectionDivider, SectionSubTitle, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, LinkItem } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Gaurav <br />
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionSubTitle>
        I POSSESS
      </SectionSubTitle>
      <SectionText>
        • The ability to quickly learn latest technological components <br />
        • Strong analytical and problem-solving skills <br />
        • Innovative mind and Self Motivation <br />
        • Persistance in finding new paths and solutions <br />
      </SectionText>
      <LinkItem target="_blank" rel="noopener noreferrer" href='/docs/Resume.pdf'>
        <Button >
          My Resume
        </Button>
      </LinkItem>
      <SectionDivider />
    </LeftSection>
  </Section>
);

export default Hero;
