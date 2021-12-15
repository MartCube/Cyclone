const IMAGE_FRAGMENT = /* GraphQL */ `
# size information (post-transformations)
aspectRatio
width
height
 # HTML5 src/srcset/sizes attributes
src
srcSet
webpSrcSet
sizes
# SEO attributes
alt
title
# BG placeholder
# bgColor
# base64
`

export const index = /* GraphQL */ `
	query {
		index {
			content {
				__typename
				... on IntroRecord {
					title,
					subtitle,
					image {
						responsiveImage(imgixParams: { fit: crop, w: 1920, h: 1080, auto: format }){${IMAGE_FRAGMENT}}
					}
				}
				... on GalleryRecord {
					gallery {
						responsiveImage(imgixParams: {  maxW: 350, auto: format }){${IMAGE_FRAGMENT}}
					}
				}
				... on FaqRecord {
					title,
					faq {
						... on QaRecord {
							question
							answer
						}
					}
				}
				
			}
		}
	}
`

export const panelList = /* GraphQL */ `
query {
	allPanels {
		uid
		title
		poster {
			responsiveImage(imgixParams: { fit: crop, w: 239, h: 336, auto: format }){${IMAGE_FRAGMENT}}
		}
	}
}
`
