import React from 'react';
import { DiFirebase, DiMootools, DiMsqlServer, DiNodejs, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="technology">
    <SectionDivider />
    <br /><br /><br />
    <SectionTitle>Technology</SectionTitle>
    <SectionText>
      I would love an oppurtunity to work with various technologies in software and web devlopement world. I have previously worked on following tools and technologies.
    </SectionText>
    <List>
      <ListItem>
        <DiPython size='3rem' />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>Experienced with <br />
            C/C++, Python, Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>Experienced with <br />
            React.js, Next.js and Electron.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>Experienced with <br />
            Cisco Packet Tracer and XAMPP
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
