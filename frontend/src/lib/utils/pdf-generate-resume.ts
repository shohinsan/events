import { PDFDocument, StandardFonts, TextAlignment, layoutMultilineText, rgb } from 'pdf-lib'
// import fontkit from '@pdf-lib/fontkit';
// import sanfrancisco from '../styles/sanfrancisco.ttf';

// read is currently supported in node only
// import { read } from '$app/server'; 


async function generate(buffer: ArrayBuffer): Promise<Uint8Array> {
	const pdf = await PDFDocument.load(buffer)
	const font = await pdf.embedFont(StandardFonts.TimesRoman)

	// TODO: Embed custom font
	// pdf.registerFontkit(fontkit);
	// const font_data = await read(sanfrancisco).arrayBuffer();
	// const font = await pdf.embedFont(font_data);

	// Get the first page if it exists

	let page = pdf.getPage(0)
	if (!page) {
		page = pdf.addPage()
	}
	const fontSize = 10
	const margin = 40

	const layout = layoutMultilineText('', {
		alignment: TextAlignment.Left,
		font,
		fontSize,
		bounds: {
			x: margin,
			y: margin,
			width: page.getWidth() - margin * 2,
			height: page.getHeight() - margin * 2
		}
	})

	for (const line of layout.lines) {
		page.drawText(line.text, {
			x: line.x,
			y: line.y,
			size: fontSize,
			font,
			color: rgb(0, 0, 0)
		})
	}

	return pdf.save()
}

export default generate
