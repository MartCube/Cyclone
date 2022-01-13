import { groq } from '@nuxtjs/sanity'

export const panelList = groq`*[_type == "panel"]{
	title,
	"poster": poster.asset._ref,
	_updatedAt
}`
export const index = groq`*[_type == 'page' && name == 'index'][0]{
	content
}`

export const panel = groq`*[_type == "panel" && uid.current == $uid][0]{
	title,
	"poster": poster.asset._ref,
	content
}`
