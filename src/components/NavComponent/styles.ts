import styled from 'styled-components';

export const Nav = styled.nav`
  position: absolute;
  margin-top: 20px;
  z-index: 1;
  padding: 15px;
  background: var(--white);
  border-radius: 5px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);

  li {
    color: var(--dark-blue);
    margin-top: 20px;
  }
  li:hover {
    color: var(--purple);
  }
`;
