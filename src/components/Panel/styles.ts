import styled from 'styled-components';

export const Container = styled.header`
  form {
    padding: 2rem;
    font-size: 19px;

    div {
      display: flex;
      flex-direction: column;
      small {
        margin-top: 0.5rem;
        svg {
          margin-left: 0.5rem;
        }
      }

      p {
        margin-top: 2rem;
      }

      div {
        // border: solid 2px green;
        height: 45px;
        width: 17rem;

        display: flex;
        flex-direction: row;
        justify-content: center;
        input {
          margin: 5px;
          height: 30px;
          border: none;
        }
        svg {
          align-self: center;
        }
      }
    }
  }
`;

export const Data = styled.div`
  border-radius: 0;
  border-bottom: solid 1px var(--purple);
  input {
    color: var(--blue-dark);
    font-size: 1rem;
  }
  svg:hover {
    color: var(--purple);
  }
`;
export const Balance = styled.div`
  border-radius: 0;
  border-bottom: solid 1px var(--purple);
  svg:first-child {
    color: var(--gray);
  }
  svg:nth-child(3):hover {
    color: var(--purple);
  }

  input {
    color: var(--green);
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const HidenContainer = styled.div`
  // border: solid 1px blue;
  margin-top: 10px;
  height: 45px;
  width: 17rem;
  display: flex;
  align-items: flex-end;

  border: solid 1px var(--gray);
  border-radius: 12px;
  svg {
    color: var(--gray);
  }
  svg:hover {
    color: var(--purple);
  }
`;
