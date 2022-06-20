import { HStack, Img, Text, useBreakpointValue, VStack } from '@chakra-ui/react'

export default function Experiences({ py, experiences }) {
	return (
		<VStack id="experiences" py={py} w="100%">
			<HStack w="80%">
				<Text fontSize={{ base: 'md', md: '2xl' }} fontWeight="bold">
					Experiencia
				</Text>
			</HStack>
			<VStack w="80%" alignItems="flex-start" spacing="6">
				{experiences.map((job) => {
					return <Job job={job} key={job.id} />
				})}
			</VStack>
		</VStack>
	)
}

function Job({ job }) {
	const jobSizes = useBreakpointValue({
		base: { logo: '4rem', plInfo: '2.5rem', position: 'md', name: 'sm', date: 'sm' },
		md: { logo: '5rem', plInfo: '5rem', position: 'lg', name: 'md', date: 'md' },
	})
	const { properties } = job
	return (
		<HStack>
			<VStack>
				<Img
					boxSize={jobSizes.logo}
					src={properties.Logo.files[0].file.url}
					alt={`${properties.Name.title[0].plain_text} Logo`}
				/>
			</VStack>
			<VStack w="full" maxW="80%" alignItems="flex-start" pl={jobSizes.plInfo}>
				<Text fontWeight="bold" fontSize={jobSizes.position}>
					{properties.Position.rich_text[0].plain_text}
				</Text>
				<Text
					as="a"
					href={properties.Url.url}
					target="_blank"
					fontWeight="semibold"
					fontSize={jobSizes.name}
					mt="0 !important"
				>
					{properties.Name.title[0].plain_text}
				</Text>
				<Text fontWeight="normal" fontSize={jobSizes.date} mt="0 !important">
					{properties.Date.rich_text[0].plain_text}
				</Text>
			</VStack>
		</HStack>
	)
}
