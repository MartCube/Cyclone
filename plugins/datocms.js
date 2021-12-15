import axios from 'axios'

export async function request({ query, variables, preview }) {
	const endpoint = preview ? `https://graphql.datocms.com/preview` : `https://graphql.datocms.com/`

	const { data } = await axios.post(
		endpoint,
		{
			query,
			variables,
		},
		{
			headers: {
				Authorization: 'Bearer aa2db9aff40c62b2b46e3c4529871d',
			},
		},
	)

	if (data.errors) {
		throw JSON.stringify(data.errors)
	}

	return data.data
}
