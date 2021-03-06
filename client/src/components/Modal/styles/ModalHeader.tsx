// DEPENDENCIES
import styled from 'styled-components';

// ICONS
import { ReactComponent as CloseIcon } from 'assets/close.svg';

export const Header = styled.div.attrs(() => ({
  className: 'modal-header',
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6rem;

  color: var(--blue__dark);
  padding: 0 2.4rem;
`;

export const Title = styled.div.attrs(() => ({
  className: 'modal-title',
}))`
  font-size: 2rem;
  font-weight: bold;
`;

export const CloseButton = styled(CloseIcon).attrs(() => ({
  className: 'modal-close',
}))`
  cursor: pointer;
`;
