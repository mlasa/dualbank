import styled from 'styled-components';

export const Container = styled.header`
  // border: solid 2px green;
  display: flex;
  padding: 20px;
`;

export const Actions = styled.div`
  // border: solid 2px green;
  margin-left: 2rem;

  button {
    align-self: flex-end;
    border: solid 1px var(--purple);
    background: var(--white);
    width: 7rem;
    height: 3rem;
    & {
      margin-left: 20px;
    }
    &:hover {
      background: linear-gradient(
        90deg,
        rgba(93, 66, 157, 1) 0%,
        rgba(98, 46, 229, 1) 35%,
        rgba(154, 126, 231, 1) 100%
      );
      svg {
        color: var(--white);
      }
    }
    svg {
      color: var(--purple);
    }
  }
`;
