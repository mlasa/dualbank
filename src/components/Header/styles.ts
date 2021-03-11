import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 15px;

  svg:hover {
    color: var(--purple);
  }

  img {
    margin-right: 2rem;
  }
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
    white-space: nowrap;
    svg {
      color: var(--dark-blue);
      margin-left: 8px;
    }
  }
`;

export const Balance = styled.div`
  margin-left: 2rem;
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

export const ContainerHeaderBar = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px;
`;
