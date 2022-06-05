import { createGlobalStyle } from 'styled-components';
import Variables from './Variables';

export const GlobalStyles = createGlobalStyle`
  ${Variables};

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  
  // Scrollbar styles
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--clr-dark-gray);
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    background-color: hsl(${({ theme }) => theme.colors.bg});
    color: hsl(${({ theme }) => theme.colors.text});    
    font-family: var(--font-main);  
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;    
    min-height: 100vh;    
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    transition: var(--transition);
    width: 100%;

    &::-webkit-scrollbar {
      width: 6px;

      &-thumb {
        background-color: hsl(var(--black));
        border-radius: 10px;
      }
    }
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }
  
  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

    /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
