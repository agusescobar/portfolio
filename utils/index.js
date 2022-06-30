import { gql } from 'graphql-request'

export const goToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

export const getUmamiClassEventName = (eventName) => {
	return `umami--click--${eventName}`
}

export const GetAllProjects = gql`
	{
		projects(orderBy: priority_ASC) {
			name
			priority
			project_status
			technologies
			url
			description
		}
	}
`
export const GetAllJobs = gql`
	{
		experiences(orderBy: priority_ASC) {
			company
			position
			priority
			time
			url
			logo {
				url
			}
		}
	}
`
