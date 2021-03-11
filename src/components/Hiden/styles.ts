import styled from 'styled-components';

export const HidenContainer = styled.div`
  // border: solid 1px blue;
  display: flex;

  border: solid 1px var(--gray);
  border-radius: 10px;
  padding: 2px;
  margin-top: 2px;
  svg {
    color: var(--gray);
  }
  svg:hover {
    color: var(--purple);
  }
`;
