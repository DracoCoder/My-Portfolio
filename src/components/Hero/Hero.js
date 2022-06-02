import React from 'react';

import { Section, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { SectionSubTitle, LeftSection, LinkItem } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle intro main center>Hello!<br /> I am Gaurav</SectionTitle>
      <SectionSubTitle>Welcome To My Portfolio</SectionSubTitle>

      {/* <SectionSubTitle>
        I POSSESS
      </SectionSubTitle>
      <SectionText>
        • The ability to quickly learn latest technological components <br />
        • Strong analytical and problem-solving skills <br />
        • Innovative mind and Self Motivation <br />
        • Persistance in finding new paths and solutions <br />
      </SectionText> */}
      <br />
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
