import { Box, HStack, useBreakpointValue } from '@chakra-ui/react'
import { colors } from 'theme'
import { getUmamiClassEventName } from 'utils'

export default function ContactButtons({ w }) {
	const sizeVariant = useBreakpointValue({
		base: '24px',
		md: '32px',
	})

	return (
		<HStack w={w} justifyContent="space-between">
			<LinkedIn sizeVariant={sizeVariant} />
			<GitHub sizeVariant={sizeVariant} />
			<Email sizeVariant={sizeVariant} />
		</HStack>
	)
}

const LinkedIn = ({ sizeVariant }) => {
	return (
		<Box
			as="a"
			href="https://www.linkedin.com/in/agusescobar/"
			target="_blank"
			className={getUmamiClassEventName('linkedin')}
		>
			<svg
				fill="none"
				height={sizeVariant}
				viewBox="0 0 24 24"
				width={sizeVariant}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					clipRule="evenodd"
					d="M1 2.838A1.838 1.838 0 012.838 1H21.16A1.837 1.837 0 0123 2.838V21.16A1.838 1.838 0 0121.161 23H2.838A1.838 1.838 0 011 21.161zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634 3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708zm-5.5 10.403h3.208V9.25H4.208zM7.875 5.812a2.063 2.063 0 11-4.125 0 2.063 2.063 0 014.125 0z"
					fill={colors.jet}
					fillRule="evenodd"
				/>
			</svg>
		</Box>
	)
}
const GitHub = ({ sizeVariant }) => {
	return (
		<Box
			as="a"
			href="https://github.com/agusfesc"
			target="_blank"
			className={getUmamiClassEventName('github-access')}
		>
			<svg
				height={sizeVariant}
				viewBox="0 0 16 16"
				width={sizeVariant}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0 0h16v16H0z" fill="none" />
				<path
					clipRule="evenodd"
					d="M7.999 0a8 8 0 00-2.528 15.591c.4.073.546-.174.546-.386 0-.19-.007-.693-.011-1.361-2.225.483-2.695-1.072-2.695-1.072-.364-.924-.888-1.17-.888-1.17-.726-.496.055-.486.055-.486.803.057 1.225.824 1.225.824.714 1.223 1.872.87 2.328.665.073-.517.279-.87.508-1.069-1.776-.202-3.644-.888-3.644-3.954 0-.873.312-1.587.823-2.147-.081-.202-.356-1.016.08-2.117 0 0 .672-.215 2.2.82A7.672 7.672 0 018 3.869a7.691 7.691 0 012.003.269c1.527-1.035 2.198-.82 2.198-.82.436 1.101.162 1.915.08 2.117.513.559.822 1.273.822 2.147 0 3.073-1.87 3.75-3.653 3.948.287.247.543.735.543 1.481 0 1.069-.01 1.932-.01 2.195 0 .214.144.463.55.385A8 8 0 007.999 0z"
					fill={colors.jet}
					fillRule="evenodd"
				/>
			</svg>
		</Box>
	)
}

const Email = ({ sizeVariant }) => {
	return (
		<Box as="a" href="mailto:agusfranesc@gmail.com" className={getUmamiClassEventName('email')}>
			<svg
				height={sizeVariant}
				viewBox="0 0 33 32"
				width={sizeVariant}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill={colors.jet}
					fillRule="evenodd"
					clipRule="evenodd"
					d="M.064 24.032V5.6q0-.032.096-.608l10.848 9.28-10.816 10.4q-.128-.448-.128-.64zm1.44-20.32q.224-.096.544-.096h29.216q.288 0 .576.096l-10.88 9.312-1.44 1.152-2.848 2.336-2.848-2.336-1.44-1.152zm.032 22.208l10.912-10.464 4.224 3.424 4.224-3.424L31.808 25.92q-.256.096-.544.096H2.048q-.256 0-.512-.096zm20.8-11.648l10.816-9.28q.096.288.096.608v18.432q0 .288-.096.64z"
				/>
			</svg>
		</Box>
	)
}
