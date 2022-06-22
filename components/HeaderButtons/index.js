import { Button, Stack } from '@chakra-ui/react'
export default function HeaderButtons({ direction, buttonProps, ...props }) {
	return (
		<Stack direction={direction} {...props}>
			<HeaderButton text="Info" link="#about" {...buttonProps} />
			<HeaderButton text="Proyectos" link="#projects" {...buttonProps} />
			<HeaderButton text="Experiencia" link="#experiences" {...buttonProps} />
			<HeaderButton text="Contacto" link="#contact" {...buttonProps} />
		</Stack>
	)
}

function HeaderButton({ text, link = null, ...props }) {
	return (
		<Button as="a" variant="link" colorScheme="jet" href={link} {...props}>
			{text}
		</Button>
	)
}
