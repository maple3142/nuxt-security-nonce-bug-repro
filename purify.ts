import DOMPurify from 'dompurify'

let purify
if (import.meta.server) {
	const { JSDOM } = await import('jsdom')
	const window = new JSDOM('').window
	purify = DOMPurify(window)
} else {
	purify = DOMPurify
}
export const sanitize = (html: string) => purify.sanitize(html)
