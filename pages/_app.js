import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import Script from 'next/script'
import theme from 'theme'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<title>Agustin Escobar</title>
				<link rel="icon" href="/icon.ico" />
				<script
					async
					defer
					data-website-id="62f4f8f2-9b43-4286-b9c2-3c512bf7aa6c"
					src="https://myanalytics.agusescobar.com/umami.js"
				></script>
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
