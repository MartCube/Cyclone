import { groq } from '@nuxtjs/sanity'

export const panelList = groq`*[_type == "panel"]{
	title,
	"poster": poster.asset._ref,
	"uid": uid.current,
	_id,
	_updatedAt
}`
export const panelSlider = groq`*[_id in $ids] {
	"uid": uid.current, 
	_id, 
	title, 
	description, 
	"poster": poster.asset._ref
}`
export const projectsList = groq`*[_type == "project"] | order(_updatedAt desc) {
	"uid": uid.current, 
	title, 
	"poster": poster.asset._ref, 
	"tags": tags[].value,
}`
export const project = groq`*[_type == "project" && uid.current == $uid][0] {
	"uid": uid.current, 
	title, 
	"poster": poster.asset._ref, 
	"gallery": gallery[].asset._ref, 
	_updatedAt,
	description,
	youtube,
	_id
}`
export const index = groq`*[_type == 'page' && name == 'index'][0]{
	content
}`

export const panel = groq`*[_type == "panel" && uid.current == $uid][0]{
	title,
	"poster": poster.asset._ref,
	content[]{
    _type == 'image' => {
      "image": asset._ref, w, _key, _type
    },
    _type == 'block' => {...},
    _type == 'youtube' => {...},
  }
}`
