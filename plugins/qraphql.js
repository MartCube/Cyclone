import { PrismicLink } from 'apollo-link-prismic'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'

const client = new ApolloClient({
	link: PrismicLink({
		uri: 'https://cyclone.prismic.io/graphql',
		accessToken: 'MC5ZU3VNb2hJQUFDc0FkWXJU.77-977-977-977-9C--_ve-_ve-_ve-_ve-_ve-_vUDvv71577-977-977-9EO-_ve-_ve-_vRTvv73vv70q77-9VTTvv73vv73vv70-',
	}),
	cache: new InMemoryCache(),
})

export default client
