import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 10px;
  svg {
    margin: 0 8px;
    align-self: center;
  }
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  input {
    border: none;
    padding: 8px;
    height: 20px;
  }
  div {
    display: flex;
    align-items: center;
    align-self: center;

    height: 32px;
    border-radius: 5px;
    border: solid 1px var(--gray);

    svg {
      margin-right: 8px;
    }
  }
`;
