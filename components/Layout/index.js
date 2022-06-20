import { Box, useBreakpointValue, VStack } from '@chakra-ui/react'

export default function Layout(props) {
	const myVariant = useBreakpointValue({
		base: '5%',
		md: '2%',
	})

	const mxVariant = useBreakpointValue({
		base: '10%',
		md: '5%',
	})
	return (
		<Box bg="linen" w="100%" display="flex" justifyContent="center">
			<VStack w={{ base: 'lg', md: '2xl' }} minH="100vh" h="400vh" my={myVariant} mx={mxVariant}>
				{props.children}
			</VStack>
		</Box>
	)
}
