import { useBreakpointValue } from '@chakra-ui/react'
import About from '@components/About'
import Experiences from '@components/Experiences'
import Header from '@components/Header'
import Layout from '@components/Layout'
import Projects from '@components/Projects'

export default function Index({ projects = [], experiences = [] }) {
	const paddingY = useBreakpointValue({
		base: '3',
		md: '2',
	})
	return (
		<Layout>
			<Header />
			<About py={paddingY} />
			<Projects projects={projects} py={paddingY} />
			<Experiences experiences={experiences} py={paddingY} />
		</Layout>
	)
}

export async function getStaticProps(context) {
	const headers = new Headers()
	headers.append('Authorization', `Bearer ${process.env.NOTION_SECRET}`)
	headers.append('Notion-Version', '2022-02-22')

	const body = JSON.stringify({
		sorts: [
			{
				property: 'Priority',
				direction: 'ascending',
			},
		],
	})

	const requestOptions = {
		method: 'POST',
		headers,
		body,
		redirect: 'follow',
	}

	const projects = await fetch(getNotionApiUrl('352b52d231cb432f9cf71b2b41c8247f'), requestOptions)
		.then((response) => response.json())
		.then((result) => result.results)

	const experiences = await fetch(
		getNotionApiUrl('63d392d2cd8b432fa66d87819269e323'),
		requestOptions
	)
		.then((response) => response.json())
		.then((result) => result.results)

	return {
		props: {
			projects,
			experiences,
		},
		revalidate: 4,
	}
}

function getNotionApiUrl(databaseId) {
	return `https://api.notion.com/v1/databases/${databaseId}/query`
}
