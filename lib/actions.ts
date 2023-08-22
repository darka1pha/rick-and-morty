import { charactersQuery } from '@/graphql'
import { GraphQLClient } from 'graphql-request'

const apiUrl = 'https://rickandmortyapi.com/graphql'

export const grafbase = new GraphQLClient(apiUrl)

const makeGraphQLRequest = async (query: string, variables = {}) => {
	try {
		return await grafbase.request(query, variables)
	} catch (err) {
		throw err
	}
}

export const getAllCharacters = async (pageNumber: number) => {
	return makeGraphQLRequest(charactersQuery, { pageNumber })
}
