import { useBreakpointValue } from '@chakra-ui/react'
import { GraphQLClient } from 'graphql-request'
import { GetAllProjects, GetAllJobs } from 'utils'
import About from '@components/About'
import Experiences from '@components/Experiences'
import Footer from '@components/Footer'
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
			<Footer />
		</Layout>
	)
}

export async function getStaticProps(context) {
	const graphCMS = new GraphQLClient(
		`https://api-us-west-2.graphcms.com/v2/${process.env.GRAPH_CMS_ID}/master`,
		{
			headers: {
				Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
			},
		}
	)

	const { projects } = await graphCMS.request(GetAllProjects)
	const { experiences } = await graphCMS.request(GetAllJobs)

	return {
		props: {
			projects,
			experiences,
		},
	}
}
