import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --white: #fff;
    --dark-blue: #172765;
    --purple:#622EE5;
    --green:#69D531;
    --gray: #778899;
  };

  @media(max-width: 1080px) {
    html{
      font-size: 93.75%;
    }
  }
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }
  body{
    font-family: 'Lato', sans-serif;
    background: var(--white);
    color: var(--dark-blue);
    -webkit-font-smoothing:antialiased;

    height: 100vh;
   /*  @media(max-width: 1080px) {
    &{
      height: 93.75%;
    }
  }*/

    /*.App{
      border:solid 1px red;
    min-width: 100vw;
    min-height: 100vh;
    }*/
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  body,input,button{
    font-size:16px;
  }
  h1,h2,h3,h4,h5,h6,strong{
    font-weight:500;
  }
  button{
    cursor:pointer;
    border-radius: 5px;
  }
`;
