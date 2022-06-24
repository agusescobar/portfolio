import { HStack, Text, VStack } from '@chakra-ui/react'
import ContactButtons from '@components/ContactButtons'

export default function About({ py }) {
	return (
		<VStack w="100%" id="about" py={py}>
			<VStack alignItems="start" w="80%">
				<Text fontSize={{ base: 'md', md: '2xl' }} fontWeight="bold">
					Agustin Escobar
				</Text>
				<Text fontSize={{ base: 'sm', md: 'xl' }}>
					Backend developer en{' '}
					<a href="https://mercadolibre.com/" fontWeight="bold">
						<b> Mercado Libre </b>
					</a>
				</Text>
				<Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="normal">
					Soy de Santa Fe, Argentina y tengo experiencia en Java, Golang, Javascript, Next.js,
					React, Node.js y tambien interesado en aprender nuevos lenguajes y tecnologias :D
				</Text>
			</VStack>
			<HStack alignItems="start" w="80%">
				<ContactButtons w="25%" />
			</HStack>
		</VStack>
	)
}
