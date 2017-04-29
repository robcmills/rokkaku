import Document, { Head, Main, NextScript } from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'

export default class RkDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = (
      <style dangerouslySetInnerHTML={{
        __html: styleSheet.rules().map(rule => rule.cssText).join('\n')
      }} />
    )
    return { ...page, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Rokkaku</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}