import { gql } from 'graphql-request'

export const charactersQuery = gql`
	query GetAllCharacters($pageNumber: Int!) {
		characters(page: $pageNumber) {
			info {
				count
				pages
			}
			results {
				id
        name
        status
        species
        gender
        origin {
          name
        }
        location {
          name
        }
        image
			}
		}
	}
`
