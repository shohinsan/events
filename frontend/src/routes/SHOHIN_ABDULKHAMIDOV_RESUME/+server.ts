import generate from "@/lib/utils/pdf-generate-resume"

export async function GET() {
	const url = 'https://pub-c1d83372ed0146a9ae11bca340543efb.r2.dev/resume.pdf'
	const response = await fetch(url)
	const resumePdfBytes = await response.arrayBuffer()

	const bytes = await generate(resumePdfBytes)

	return new Response(bytes, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Length': bytes.length.toString()
		}
	})
}
