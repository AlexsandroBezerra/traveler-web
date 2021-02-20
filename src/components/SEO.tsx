import Head from 'next/head'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import previewImg from '../assets/preview.png'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  imageAlt?: string
}

export default function SEO({
  title = 'Traveler | Viva uma grande aventura',
  image = 'https://traveler.alexbezerra.xyz/' + previewImg,
  imageAlt = 'Traveler. Viva uma grande aventura',
  description = 'Descubra locais incríveis para se visitar em cidades maravilhosas do Ceará.'
}: SEOProps): JSX.Element {
  const { route } = useRouter()

  console.log(route)

  const urlPrefix = useMemo(() => 'https://traveler.alexbezerra.xyz', [])
  const url = useMemo(() => urlPrefix + route, [])

  return (
    <Head>
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${image}`} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="pt_BR" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${image}`} />
    </Head>
  )
}
