import { HStack, VStack } from '@chakra-ui/react'
import ContactButtons from '@components/ContactButtons'
import Logo from '@components/Logo'

export default function Footer() {
	return (
		<VStack w="100%" py="2rem" id="contact">
			<HStack justifyContent="center" w="full" h="35%">
				<Logo />
			</HStack>
			<HStack minW="100%" justifyContent="center">
				<ContactButtons w="25%" />
			</HStack>
		</VStack>
	)
}
