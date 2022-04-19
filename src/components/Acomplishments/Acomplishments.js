import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 9, symbol: '', text: 'Open Source Projects' },
  { number: 3, symbol: '⭐', text: 'In Leetcode', },
  { number: 2, symbol: '', text: 'Research Papers', },
  { number: 3, symbol: '', text: 'Machine Learning Models', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Accomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card, index) =>
        <Box key={index}>
          <BoxNum>{card.number}{card.symbol}</BoxNum>
          <BoxText></BoxText>
          <BoxText>{card.text}</BoxText>
        </Box>
      )}
    </Boxes>
  </Section>
);

export default Acomplishments;
