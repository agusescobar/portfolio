import { useEffect, useState } from 'react'
import { Box, Collapse, HStack, useDisclosure } from '@chakra-ui/react'
import HeaderButtons from '@components/HeaderButtons'
import Logo from '@components/Logo'
import MenuBar from '@components/MenuBar'

export default function Header() {
	const [scrolled, setScrolled] = useState(false)
	const { isOpen, onToggle } = useDisclosure()
	const handleScroll = () => {
		window.onscroll = function () {
			window.scrollY > 30 ? setScrolled(true) : setScrolled(false)
		}
	}

	useEffect(() => {
		handleScroll()
	}, [])

	return (
		<>
			<HStack maxH="5%" px="5%" w="full" justify="space-between">
				<Logo />
				<MenuBar onToggle={onToggle} isOpen={isOpen && !scrolled} />
			</HStack>
			<HStack>
				<Collapse in={isOpen && !scrolled} animateOpacity>
					<Box bg="lenin" display="flex" w="80vw" flexDirection="column">
						<HeaderButtons
							direction="column"
							buttonProps={{ pl: '1rem' }}
							alignItems="start"
							justifyContent="space-between"
							h="7rem"
						/>
					</Box>
				</Collapse>
			</HStack>
		</>
	)
}
