import styled from 'styled-components';

export const Container = styled.header`
  // border: solid 2px green;

  margin-left: -6px;
  height: 5rem;
  flex: 1;
  min-width: 95%;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);

  display: flex;

  svg {
    margin-left: 20px;
    align-self: center;
  }
  svg:hover {
    color: var(--purple);
  }
`;

export const Bills = styled.div`
  // border: solid 2px green;
  align-self: center;
  margin-left: 2rem;
  margin-top: 10px;

  display: flex;

  div {
    margin-left: 30px;
    display: flex;
    span {
      color: var(--white);
      padding: 15px;
      border-radius: 50%;
      background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(74, 42, 148, 1) 35%,
        rgba(154, 126, 231, 1) 100%
      );
    }
    strong {
      font-weight: 600;
    }
    p {
      color: var(--green);
    }
    div {
      flex-direction: column;
    }
  }
`;
