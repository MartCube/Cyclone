import { groq } from '@nuxtjs/sanity'

// index
export const index = groq`*[_type == 'page' && uid.current == 'index'][0]{
	content,
	metaTags {
		title,
		description,
		"image": image.asset._ref
	},
}`

// by uid
export const panel = groq`*[_type == "panel" && uid.current == $uid][0]{
	title,
	"poster": poster.asset._ref,
	content[] {
		_type == 'image' => {
			_key, _type, "image": asset._ref, w, 
		},
		_type == 'block' => {...},
		_type == 'youtube' => {...},
    },
	metaTags{
		title,
		description,
		"image": image.asset._ref
	},
}`
export const project = groq`*[_type == "project" && uid.current == $uid][0] {
	title, 
	"poster": poster.asset._ref, 
	"gallery": gallery[].asset._ref, 
	_updatedAt,
	description,
	youtube,
	_id,
	metaTags {
		title,
		description,
		"image": image.asset._ref
	},
}`
export const page = groq`*[_type == "page" && uid.current == $uid][0] {
	metaTags {
		title,
		description,
		"image": image.asset._ref
	},
}`

// list
export const panelList = groq`*[_type == "panel"]{
	title,
	"poster": poster.asset._ref,
	"uid": uid.current,
	_id,
	_updatedAt
}`
export const projectsList = groq`*[_type == "project"] | order(_updatedAt desc) {
	"uid": uid.current, 
	title, 
	"poster": poster.asset._ref, 
	"tags": tags[].value,
}`

// refs
export const panelSlider = groq`*[_id in $ids] {
	"uid": uid.current, 
	_id, 
	title, 
	description, 
	"poster": poster.asset._ref
}`
