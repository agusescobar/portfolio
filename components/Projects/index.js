import {
	Button,
	Badge,
	HStack,
	useBreakpointValue,
	Text,
	VStack,
	Wrap,
	WrapItem,
} from '@chakra-ui/react'
import { colors } from '../../theme'

export default function Projects({ projects = [], py }) {
	const dynamicProperties = useBreakpointValue({
		base: { maxOfProjects: 3, wrapItemWeight: '90%' },
		md: { maxOfProjects: 4, wrapItemWeight: '45%' },
	})

	return (
		<VStack id="projects" py={py}>
			<HStack w="80%">
				<Text fontSize={{ base: 'md', md: '2xl' }} fontWeight="bold">
					Proyectos
				</Text>
			</HStack>
			<Wrap w="90%" justify="center">
				{projects.map((project, index) => {
					if (index < dynamicProperties.maxOfProjects) {
						return (
							<WrapItem w={dynamicProperties.wrapItemWeight} key={project.id}>
								<Project project={project} />
							</WrapItem>
						)
					}
					return null
				})}
			</Wrap>
			<HStack justifyContent={'flex-end'} w="83%">
				<Button
					as="a"
					href="https://github.com/agusfesc?tab=repositories"
					target="_blank"
					colorScheme="black"
					variant="outline"
					rightIcon={<ShareIcon color={colors.jet} />}
				>
					Ver más
				</Button>
			</HStack>
		</VStack>
	)
}

function Project({ project }) {
	const { properties } = project
	const repositorySizes = useBreakpointValue({
		base: {
			name: 'sm',
			description: 'xs',
			marginY: '0.5',
			repositoryLogo: '1rem',
			spacing: '1rem',
			stateFont: '0.5rem',
			technologies: '0.6rem',
		},
		md: {
			name: 'md',
			description: 'sm',
			marginY: '2',
			repositoryLogo: '1.5rem',
			spacing: '1rem',
			stateFont: '0.6rem',
			technologies: '0.8rem',
		},
	})
	return (
		<VStack
			w="100%"
			h="12rem"
			borderColor="rgba(47, 47, 48, 0.3)"
			borderRadius={'lg'}
			borderWidth="0.1rem"
			justifyContent="center"
			my={repositorySizes.marginY}
			spacing={repositorySizes.spacing}
		>
			<HStack justifyContent="space-between" w="90%" h="15%">
				<HStack w="75%">
					<RepositoryLogo size={repositorySizes.repositoryLogo} />
					<Text fontSize={repositorySizes.name} color="jet" fontWeight="bold">
						{properties.Name.title[0].plain_text}
					</Text>
				</HStack>
				<HStack w="25%">
					<State state={properties.State.select.name} fontSize={repositorySizes.stateFont} />
				</HStack>
			</HStack>
			<HStack w="85%" h="35%">
				<Text fontSize={repositorySizes.description} color="jet">
					{properties.Description.rich_text[0].plain_text}
				</Text>
			</HStack>
			<HStack w="80%" h="25%" justifyContent={'space-between'}>
				<Text fontSize={repositorySizes.technologies} fontWeight="semibold" w="60%">
					Hecho con: {properties.Technologies.rich_text[0].plain_text}
				</Text>
				<Button
					as="a"
					variant="link"
					href={properties.Url.url}
					target="_blank"
					color="lavenderFloral"
					w="10%"
					fontWeight="normal"
					fontSize={'sm'}
					rightIcon={<ShareIcon color={colors.lavenderFloral} />}
				>
					GitHub
				</Button>
			</HStack>
		</VStack>
	)
}

function State({ state, fontSize }) {
	const colorScheme = state === 'available' ? 'green' : 'red'
	return (
		<Badge fontSize={fontSize} variant="subtle" colorScheme={colorScheme}>
			{state}
		</Badge>
	)
}

function RepositoryLogo({ size }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-label="Repository"
			height={size}
			viewBox="0 0 16 16"
			width={size}
		>
			<path
				fillRule="evenodd"
				d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
				fill={colors.jet}
			/>
		</svg>
	)
}

function ShareIcon({ color }) {
	return (
		<svg height={'0.8rem'} viewBox="0 0 24 24" width={'0.8rem'} xmlns="http://www.w3.org/2000/svg">
			<path d="M19 13v10H1V5h10m3-4h9v9m-13 4L23 1z" fill="none" stroke={color} strokeWidth={2} />
		</svg>
	)
}
