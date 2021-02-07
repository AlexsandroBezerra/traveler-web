import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import previewImg from '../assets/preview.png'
import theme from '../styles/theme'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Traveler | Viva uma grande aventura</title>

        <meta name="title" content="Traveler | Viva uma grande aventura" />
        <meta
          name="description"
          content="Descubra locais incríveis para se visitar em cidades maravilhosas do Ceará."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://traveler.alexbezerra.xyz/" />
        <meta
          property="og:title"
          content="Traveler | Viva uma grande aventura"
        />
        <meta
          property="og:description"
          content="Descubra locais incríveis para se visitar em cidades maravilhosas do Ceará."
        />
        <meta
          property="og:image"
          content={`https://traveler.alexbezerra.xyz/${previewImg}`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://traveler.alexbezerra.xyz/"
        />
        <meta
          property="twitter:title"
          content="Traveler | Viva uma grande aventura"
        />
        <meta
          property="twitter:description"
          content="Descubra locais incríveis para se visitar em cidades maravilhosas do Ceará."
        />
        <meta
          property="twitter:image"
          content={`https://traveler.alexbezerra.xyz/${previewImg}`}
        />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
