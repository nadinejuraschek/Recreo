// DEPENDENCIES
import styled, { css } from 'styled-components';

type InputProps = {
  withIcon: boolean;
};

export const Wrapper = styled.div.attrs(() => ({
  className: 'input-wrapper',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 1rem 0;
  width: 100%;
`;

export const Label = styled.label.attrs(() => ({
  className: 'input-label',
}))`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const StyledInput = styled.input.attrs(() => ({
  className: 'input',
}))<InputProps>`
  background-color: #f8f8f8;
  border: none;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid var(--blue__dark);
  box-shadow: 0 0.0625rem 0.125rem rgb(0 0 0 / 15%);
  font-size: 1.6rem;
  font-weight: normal;
  margin-bottom: 0.75rem;
  padding: 0 0 0 0.75rem;

  height: 40px;

  @media only screen and (min-width: 900px) {
    height: 50px;
  }

  ${({ withIcon }) =>
    withIcon &&
    css`
      padding: 0 0 0 2.25rem;

      @media only screen and (min-width: 900px) {
        padding: 0 0 0 3rem;
      }
    `}

  &::placeholder {
    color: var(--blue__medium);
  }

  &:focus {
    border-bottom: 3px solid var(--yellow);
    outline: none;
  }
`;

export const StyledTextarea = styled.input.attrs(() => ({
  className: 'textarea',
}))`
  background-color: #f8f8f8;
  border: none;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid var(--blue__dark);
  box-shadow: 0 0.0625rem 0.125rem rgb(0 0 0 / 15%);
  font-size: 1.6rem;
  font-weight: normal;
  margin-bottom: 0.75rem;
  padding: 0 0 0 0.75rem;

  height: 12rem;

  @media only screen and (min-width: 900px) {
    height: 12rem;
  }

  &::placeholder {
    color: var(--blue__medium);
  }

  &:focus {
    border-bottom: 3px solid var(--yellow);
    outline: none;
  }
`;

export const Validation = styled.div.attrs(() => ({
  className: 'input-validation',
}))`
  color: var(--red);
  font-size: 1rem;
`;
