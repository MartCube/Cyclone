import { groq } from '@nuxtjs/sanity'

// by uid
export const panel = groq`*[_type == "panel" && uid.current == $uid][0]{
	title,
	"poster": poster.asset._ref,
	content[] {
		_type == 'image' => {
			_key, _type, "image": asset._ref, w, 
		},
		_type == "image_text" => {
      ...,
      "imageItem": imageItem.asset._ref
		},
		_type == 'richText' => {...},
		_type == 'cta' => {...},
		_type == 'counter' => {...},
		_type == "colors_section" => {
      colorsPage -> {
        "uid": uid.current,
        "title": name
      },
      "colorsGallery": imageItem[] {  
        "image": asset._ref,
        ...
      },
			description,
      title,
      _key,
      _type,
    },
		_type == 'benefits' => {
			...,
			benefitItems[] {
				description, title
			}
		},
		_type == 'faq' => {
			...,
			faqItems[] {
				_key, 
				question,
				answer
			}
		},
		_type == 'slider_projects' => {
			...,
			projectItems[] {
				projectItem -> {
					"uid": uid.current, 
					_id, 
					title, 
					filter,
					"poster": poster.asset._ref
				},
			}, 
		},
		_type == 'slider_panel' => {
			...,
			panelItems[] {
				panelItem -> {
					"uid": uid.current, 
					_id, 
					title, 
					description, 
					"poster": poster.asset._ref
				},
			}, 
		},
		_type == 'youtube' => { 
			...,
			"preview" : preview.asset._ref
		},
		_type == 'panelImages' => {
			_key, 
			_type, 
			title, 
			"galleryProperty": galleryProperty[0].value,
			imageItem[] {
				"image": asset._ref, 
			},
		},
	},
	metaTags{
		title,
		description,
		"image": image.asset._ref
	},
	"lang": __i18n_lang,
	"uid": uid.current,
	__i18n_lang != 'ua'  => {
		'languages': [
			{
				'lang': __i18n_base -> __i18n_lang,
				'uid': __i18n_base -> uid.current,
			},
			...
			__i18n_base -> __i18n_refs[] -> { 'lang': __i18n_lang, 'uid': uid.current }, 
		]  
	},
  __i18n_lang == 'ua' => {
		'languages': [
			{
				'lang': __i18n_lang,
				'uid':uid.current,
			},
			...
			__i18n_refs[] -> { 'lang': __i18n_lang, 'uid': uid.current }
		],
	},
}`
export const colorPage = groq`*[_type == "colors" && uid.current == $uid][0] {
  "title": name,
  "uid": uid.current,
  content[] {
    _type == 'richText' => {...},
    _type == 'colors_gallery' => {
      ...,
      "colorsGallery": gallery[] {
        _type == 'colorItem' => {
					"image": color_image.asset._ref,
					_key,
					_type,
					name
				},
			},
		},
	},
  metaTags {
    title,
    description,
    "image": image.asset._ref
	},
	"lang": __i18n_lang,
	__i18n_lang != 'ua'  => {
		'languages': [
			{
				'lang': __i18n_base -> __i18n_lang,
				'uid': __i18n_base -> uid.current,
			},
			...
			__i18n_base -> __i18n_refs[] -> { 'lang': __i18n_lang, 'uid': uid.current }, 
		]  
	},
  __i18n_lang == 'ua' => {
		'languages': [
			{
				'lang': __i18n_lang,
				'uid':uid.current,
			},
			...
			__i18n_refs[] -> { 'lang': __i18n_lang, 'uid': uid.current }
		],
	},
}`
export const article = groq`*[_type == "article" && uid.current == $uid][0] {
	...,
	"poster": poster.asset._ref,
  metaTags {
		title,
		description,
		"image": image.asset._ref
	},
	"lang": __i18n_lang,
	"uid": uid.current,
	__i18n_lang != 'ua'  => {
		'languages': [
			{
				'lang': __i18n_base -> __i18n_lang,
				'uid': __i18n_base -> uid.current,
			},
			...
			__i18n_base -> __i18n_refs[] -> { 'lang': __i18n_lang, 'uid': uid.current }, 
		]  
	},
  __i18n_lang == 'ua' => {
		'languages': [
			{
				'lang': __i18n_lang,
				'uid':uid.current,
			},
			...
			__i18n_refs[] -> { 'lang': __i18n_lang, 'uid': uid.current }
		],
	},
  content[] {
    _type == 'richText' => {...},
    _type == 'cta' => {...},
      
    _type == 'articleImages' => {
			...,
			"galleryProperty": galleryProperty[0].value,
			imageItem[] {
			"image": asset._ref,
			}
		},
    _type == "image_text" => {
      ...,
      "imageItem": imageItem.asset._ref
		},
    _type == 'youtube' => { 
			...,
			"preview" : preview.asset._ref
		},
    _type == 'image' => {
			_key, _type, "image": asset._ref, w, 
		},
    _type == 'benefits' => {
			...,
			benefitItems[] {
				description, title
			}
		},
    _type == 'faq' => {
			...,
			faqItems[] {
				_key, 
				question,
				answer
			}
		},
		_type == 'slider_projects' => {
			...,
			projectItems[] {
				projectItem -> {
					"uid": uid.current, 
					_id, 
					title, 
					"poster": poster.asset._ref
				},
			}, 
		},
    _type == 'slider_panel' => {
			...,
			panelItems[] {
				panelItem -> {
					"uid": uid.current, 
					_id, 
					title, 
					description, 
					"poster": poster.asset._ref
				},
			}, 
		},
  },
}`
export const project = groq`*[_type == "project" && uid.current == $uid][0] {
	title, 
	"poster": poster.asset._ref, 
	"gallery": gallery[].asset._ref, 
	_updatedAt,
	order,
	description,
	youtube {
		...,
		"preview" : preview.asset._ref
	},
	_id,
	metaTags {
		title,
		description,
		"image": image.asset._ref
	},
	"lang": __i18n_lang,
	"uid": uid.current,
	__i18n_lang != 'ua'  => {
		'languages': [
			{
				'lang': __i18n_base -> __i18n_lang,
				'uid': __i18n_base -> uid.current,
			},
			...
			__i18n_base -> __i18n_refs[] -> { 'lang': __i18n_lang, 'uid': uid.current }, 
		]  
	},
  __i18n_lang == 'ua' => {
		'languages': [
			{
				'lang': __i18n_lang,
				'uid':uid.current,
			},
			...
			__i18n_refs[] -> { 'lang': __i18n_lang, 'uid': uid.current }
		],
	},
}`
export const page = groq`*[_type == "page" && uid.current == $uid][0] {
	content[] {
		_type == 'richText' => {...},
		_type == 'cta' => {...},
		_type == "image_text" => {
      ...,
      "imageItem": imageItem.asset._ref
		},
		_type == 'counter' => {
			...,
			counterItems[] {
				title,number
			}
		},
		_type == 'benefits' => {
			...,
			benefitItems[] {
				description, title
			}
		},
		_type == 'gallery' => {
			...,
			"galleryProperty": galleryProperty[0].value,
			imageItem[] {
			"image": asset._ref,
			}
		},
		_type == 'faq' => {
			...,
			faqItems[] {
				_key, 
				question,
				answer
			}
		},
		_type == 'slider_projects' => {
			...,
			projectItems[] {
				projectItem -> {
					"uid": uid.current, 
					_id, 
					title, 
					"poster": poster.asset._ref
				},
			}, 
		},
		_type == 'slider_panel' => {
			...,
			panelItems[] {
				panelItem -> {
					"uid": uid.current, 
					_id, 
					title, 
					description, 
					"poster": poster.asset._ref
				},
			}, 
		},
	},
	metaTags {
		title,
		description,
		"image": image.asset._ref
	},
	"lang": __i18n_lang,
	"uid": uid.current,
	__i18n_lang != 'ua'  => {
		'languages': [
			{
				'lang': __i18n_base -> __i18n_lang,
				'uid': __i18n_base -> uid.current,
			},
			...
			__i18n_base -> __i18n_refs[] -> { 'lang': __i18n_lang, 'uid': uid.current }, 
		]  
	},
  __i18n_lang == 'ua' => {
		'languages': [
			{
				'lang': __i18n_lang,
				'uid':uid.current,
			},
			...
			__i18n_refs[] -> { 'lang': __i18n_lang, 'uid': uid.current }
		],
	},
}`

// list
export const panelList = groq`*[_type == "panel" && __i18n_lang == $lang ]{
	title,
	"poster": poster.asset._ref,
	"uid": uid.current,
	_id,
	_updatedAt
}`
export const projectsList = groq`*[_type == "project" && __i18n_lang == $lang ] | order(_updatedAt desc) {
	"uid": uid.current, 
	title, 
	order,
	"poster": poster.asset._ref, 
	"tags": tags[].value,
}`
export const articleList = groq`*[_type == "article" && __i18n_lang == $lang ] {
	"uid": uid.current, 
	title, 
	articleDate,
	"poster": poster.asset._ref, 
	author,
	"articleTags": articleTag[].value,
	content[] {
		_type == 'richText' => {...},
	}
}`

export const sitemapData = groq`*[_type in ["project", "panel", "page", "colors"]] {
	"uid": uid.current, 
	"type":  _type, 
	"updated": _updatedAt,
	"lang": __i18n_lang,
}`

export const navbar = groq`*[_type == "navbar" && __i18n_lang == $lang ][0] {
	...,
	panelItems[] -> {
		"uid": uid.current, 
		_id, 
		title, 
		"poster": poster.asset._ref
	},
}`

export const menuList = groq`*[_type == "page" && __i18n_lang == $lang ] {
	"uid": uid.current, 
	title, 
}`
