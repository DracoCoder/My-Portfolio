import React from 'react';

import { Section, SectionSubTitle, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      {/* Style can be adjusted in index.js */}
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
      <Button onClick={() => window.location = 'https://www.gmail.com'}>
        Learn More
      </Button>
    </LeftSection>

  </Section>
);

export default Hero;