import { groq } from '@nuxtjs/sanity'

export const panelList = groq`*[_type == "panel"]{
	title,
	"poster": poster.asset._ref,
	_updatedAt
}`

export const panel = groq`*[_type == "panel" && uid.current == $uid][0]{
	title,
	"poster": poster.asset._ref,
	content
}`
