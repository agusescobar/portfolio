import { Box, useBreakpointValue, VStack } from '@chakra-ui/react'

export default function Layout(props) {
	const sizeVariants = useBreakpointValue({
		base: { my: '5%', mx: '10%' },
		md: { my: '2%', mx: '5%' },
	})

	return (
		<Box bg="linen" w="100%" display="flex" justifyContent="center">
			<VStack w={{ base: 'lg', md: '2xl' }} minH="100vh" my={sizeVariants.my} mx={sizeVariants.mx}>
				{props.children}
			</VStack>
		</Box>
	)
}
