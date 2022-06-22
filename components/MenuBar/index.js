import { Box, HStack, useBreakpointValue } from '@chakra-ui/react'
import HeaderButtons from '@components/HeaderButtons'
import { colors } from 'theme'

export default function MenuBar({ isOpen, onToggle }) {
	const sizeVariant = useBreakpointValue({
		base: '16px',
		md: null,
		lg: null,
		xl: null,
		'2xl': null,
	})

	if (sizeVariant) {
		return <MenuBarIcon sizeVariant={sizeVariant} onToggle={onToggle} isOpen={isOpen} />
	}
	return <Actions />
}

function MenuBarIcon({ isOpen, onToggle, sizeVariant }) {
	return (
		<Box as="button" onClick={onToggle}>
			{isOpen ? (
				<svg
					fill="none"
					height={sizeVariant}
					viewBox="0 0 24 24"
					width={sizeVariant}
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5 5l14 14M5 19L19 5"
						stroke="#000"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
					/>
				</svg>
			) : (
				<svg
					height={sizeVariant}
					viewBox="0 0 24 24"
					width={sizeVariant}
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21 17a1 1 0 010 2H3a1 1 0 010-2zm0-6a1 1 0 010 2H3a1 1 0 010-2zm0-6a1 1 0 010 2H3a1 1 0 110-2z"
						fillRule={colors.jet}
					/>
				</svg>
			)}
		</Box>
	)
}

function Actions() {
	return (
		<HStack w="50%">
			<HeaderButtons direction="row" justify="space-between" w="100%" />
		</HStack>
	)
}
