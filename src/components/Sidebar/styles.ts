import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: relative;
  width: 4rem;
  flex: 1;
  box-shadow: 12px 0 7px -4px rgba(0, 0, 0, 0.1);

  min-height: 85vh;
`;
export const SidebarComponent = styled.aside`
  // border: solid 1px blue;

  min-height: 85vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  svg {
    color: var(--dark-blue);
    margin-top: 1rem;
    width: 100%;
    height: 2rem;
    padding: 5px;

    transition: background 0.4s;
  }
  > svg:hover {
    background: var(--purple);
    color: var(--white);
  }

  span {
    background: var(--purple);
    position: absolute;
    bottom: 50px;
    left: 40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    z-index: 1;
    svg {
      color: var(--white);
      margin-top: 5px;
    }
  }
`;
