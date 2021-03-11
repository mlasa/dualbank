import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;

  padding: 10px;
`;

export const Account = styled.div`
  align-self: center;
  strong {
    svg {
      margin-left: 8px;
    }
  }
  p {
    color: var(--purple);
    svg {
      color: var(--dark-blue);
      margin-left: 8px;
    }
  }
`;

export const Balance = styled.div`
  align-self: center;
  strong {
    svg {
      color: var(--dark-blue);
      margin-left: 8px;
    }
  }
  p {
    color: var(--green);
    font-weight: 400;
  }
`;
