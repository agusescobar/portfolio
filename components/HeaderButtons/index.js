import { Button, Stack } from '@chakra-ui/react'
export default function HeaderButtons({ direction, buttonProps, ...props }) {
	return (
		<Stack direction={direction} {...props}>
			<HeaderButton text="Info" href="#about" {...buttonProps} />
			<HeaderButton text="Proyectos" href="#projects" {...buttonProps} />
			<HeaderButton text="Experiencia" href="#experiences" {...buttonProps} />
			<HeaderButton text="Contacto" href="#contact" {...buttonProps} />
		</Stack>
	)
}

function HeaderButton({ text, ...props }) {
	return (
		<Button as="a" variant="link" colorScheme="jet" {...props}>
			{text}
		</Button>
	)
}
