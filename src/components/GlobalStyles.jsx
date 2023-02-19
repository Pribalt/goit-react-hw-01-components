import { Global, css } from '@emotion/react';
import 'modern-normalize';

export const GlobalStyles = () => {
  return (
    <div>
      <Global
        styles={css`
          :root {
            --gray-text: #808080;
            --white-text: #ffffff;
            --black-text: #000000;

            --white-bg: #ffffff;
            --gray-bg: #f5f4fa;
            --border-gray-bg: rgba(181, 175, 175, 0.3);
            --turquoise-bg: #40e0d0;
          }

          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
              monospace;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0;
          }

          img {
            display: block;
            max-width: 100%;
            height: auto;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          a {
            text-decoration: none;
            color: inherit;
            cursor: pointer;
          }
        `}
      />
    </div>
  );
};
