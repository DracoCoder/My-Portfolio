import React from 'react';
import { DiFirebase, DiPython, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="technology">
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
            C/C++, Java, Python, R, MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>Experienced with <br />
            Node.js, React.js, Next.js, HTML5, CSS3,
            Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>Experienced with <br />
            Git, Visual Studio Code, XAMPP
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
