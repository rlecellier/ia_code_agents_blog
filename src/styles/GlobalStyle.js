import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-weight: 700;
    line-height: 1.2;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxxxl};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  h6 {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  ul, ol {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    padding-left: ${({ theme }) => theme.spacing.lg};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.primary};
    cursor: pointer;
  }

  code {
    font-family: ${({ theme }) => theme.fonts.code};
    background-color: ${({ theme }) => theme.colors.border};
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  pre {
    font-family: ${({ theme }) => theme.fonts.code};
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    overflow-x: auto;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default GlobalStyle;