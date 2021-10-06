import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
  Html,
} from 'next/document';
import { ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';

interface IBaseDocumentProps extends DocumentInitialProps {
  styleTags: Array<ReactElement>;
}

class BaseDocument extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const styledComponentsSheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (App) => props => styledComponentsSheet.collectStyles(<App {...props} />)
          });

        const initialProps = await Document.getInitialProps(ctx)
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {styledComponentsSheet.getStyleElement()}
            </>
          )
        }
      } finally {
        styledComponentsSheet.seal()
      }
  }

  render(): ReactElement {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BaseDocument;
