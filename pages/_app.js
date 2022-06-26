import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import theme from 'theme'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<title>Agustin Escobar</title>
				<link rel="icon" href="/icon.ico" />
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
