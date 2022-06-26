import { HStack, Img, Link, Text, useBreakpointValue, VStack } from '@chakra-ui/react'

export default function Experiences({ py, experiences }) {
	return (
		<VStack id="experiences" py={py} w="100%">
			<HStack w="80%">
				<Text fontSize={{ base: 'md', md: '2xl' }} fontWeight="bold">
					Experiencia
				</Text>
			</HStack>
			<VStack w="80%" alignItems="flex-start" spacing="6">
				{experiences.map((job, index) => {
					return <Job job={job} key={index} />
				})}
			</VStack>
		</VStack>
	)
}

function Job({ job }) {
	const jobSizes = useBreakpointValue({
		base: { logo: '48', plInfo: '2.5rem', position: 'md', name: 'sm', date: 'sm' },
		md: { logo: '64', plInfo: '5rem', position: 'lg', name: 'md', date: 'md' },
	})
	return (
		<HStack>
			<VStack>
				<Link href={job.url} target="_blank">
					<Img
						htmlHeight={jobSizes.logo}
						htmlWidth={jobSizes.logo}
						src={job.logo.url}
						alt={`${job.company} Logo`}
					/>
				</Link>
			</VStack>
			<VStack w="full" minW="80%" alignItems="flex-start" pl={jobSizes.plInfo}>
				<Text fontWeight="bold" fontSize={jobSizes.position}>
					{job.position}
				</Text>
				<Text
					as="a"
					href={job.url}
					target="_blank"
					fontWeight="semibold"
					fontSize={jobSizes.name}
					mt="0 !important"
				>
					{job.company}
				</Text>
				<Text fontWeight="normal" fontSize={jobSizes.date} mt="0 !important">
					{job.time}
				</Text>
			</VStack>
		</HStack>
	)
}
