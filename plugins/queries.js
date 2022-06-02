import { groq } from '@nuxtjs/sanity'

// by uid
export const panel = groq`*[_type == "panel" && uid.current == $uid][0]{
	title,
	"poster": poster.asset._ref,
	content[] {
		_type == 'image' => {
			_key, _type, "image": asset._ref, w, 
		},
		_type == 'richText' => {...},
		_type == 'cta' => {...},
		_type == 'counter' => {
			...,
			counterItems[] {
				title,number
			}
		},
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
         
        }
      },
    },
  metaTags {
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
	order,
	description,
	_type == 'youtube' => { 
		...,
		"preview" : preview.asset._ref
	},
	_id,
	metaTags {
		title,
		description,
		"image": image.asset._ref
	},
}`
export const page = groq`*[_type == "page" && uid.current == $uid][0] {
	content[] {
		_type == 'richText' => {...},
		_type == 'cta' => {...},
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
	order,
	"poster": poster.asset._ref, 
	"tags": tags[].value,
}`

export const sitemapData = groq`*[_type in ["project", "panel", "page", "colors"]] {"uid": uid.current, "type":  _type, "updated": _updatedAt}`

export const navbar = groq`*[_type == "navbar"][0] {
	...,
	panelItems[] -> {
		"uid": uid.current, 
		_id, 
		title, 
		"poster": poster.asset._ref
	},
}`
