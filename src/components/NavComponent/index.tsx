import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styles';

interface DataContent {
  title: string;
  description?: string;
  path: string;
}

interface PropsNav {
  action(): void;
  content: DataContent[];
}

const NavComponent: React.FC<PropsNav> = ({ action, content }) => {
  return (
    <>
      <Nav
        role="button"
        aria-pressed="false"
        onMouseLeave={() => action()}
        onKeyDown={() => action()}
      >
        <ul>
          {content.map(item => {
            return (
              <li key={item.title}>
                <Link to={item.path}>{item.title}</Link>
                {item.description && <small>{item.description}</small>}
              </li>
            );
          })}
        </ul>
      </Nav>
    </>
  );
};

export default NavComponent;
