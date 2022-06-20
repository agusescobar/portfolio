import { Button, Stack } from '@chakra-ui/react'
export default function HeaderButtons({ direction, buttonProps, ...props }) {
	return (
		<Stack direction={direction} {...props}>
			<HeaderButton text="Info" link={'#about'} {...buttonProps} />
			<HeaderButton text="Proyectos" link={'#projects'} {...buttonProps} />
			<HeaderButton text="Experiencia" link={'action'} {...buttonProps} />
			<HeaderButton text="Contacto" link={'action'} {...buttonProps} />
		</Stack>
	)
}

function HeaderButton({ text, onClick, link = null, ...props }) {
	return (
		<Button as="a" variant="link" colorScheme="jet" href={link} onClick={onClick} {...props}>
			{text}
		</Button>
	)
}
