export async function GET({ setHeaders }) {
    setHeaders({
        'Content-Type': 'application/xml'
    });

    const protocol = 'http://';
    const subdomain = 'www.';
    const domain = 'shohin.design';
    const site = `${protocol}${subdomain}${domain}`;
    // 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    const crawl = 'monthly';

    const paths = ['projects', 'life'];
    const urls = paths.map(path => ({
        loc: `${site}/${path}`,
        changefreq: crawl,
        priority: 0.7
    }));

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${site}/</loc>
            <changefreq>${crawl}</changefreq>
            <priority>0.7</priority>
        </url>
        ${urls.map(url => `
        <url>
            <loc>${url.loc}/</loc>
            <changefreq>${url.changefreq}</changefreq>
            <priority>${url.priority}</priority>
        </url>`).join('')}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
