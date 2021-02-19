// DEPENDENCIES
import styled from 'styled-components';

export const Section = styled.section.attrs(() => ({
  className: 'playgrounds-section',
}))`
  margin: 3rem 0;
  width: 100%;
`;

export const Grid = styled.div.attrs(() => ({
  className: 'playgrounds-grid',
}))`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 380px));
  grid-template-rows: auto;
  grid-gap: 2rem;
  justify-content: center;

  width: 100%;
`;
