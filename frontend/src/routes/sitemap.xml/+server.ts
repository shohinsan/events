import site from '@/app/site';

const ctype = 'application/xml';
const home = site.createSite.url.origin;
const paths = site.createSite.sitemap.paths;
const crawl = site.createSite.sitemap.crawl;
const didCrawl = site.createSite.sitemap.didCrawl;

export async function GET({ setHeaders }) {
    setHeaders({
        'Content-Type': ctype
    });

    const baseUrl = new URL(home);

    const urls = paths.map(path => {
        const url = new URL(path, baseUrl);
        return {
            loc: url.href,
            changefreq: crawl,
            lastmod: didCrawl,
            priority: path === '' ? 1.0 : 0.7
        };
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls.map(url => `
        <url>
            <loc>${url.loc}</loc> 
            ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
            <changefreq>${url.changefreq}</changefreq>
            <priority>${url.priority}</priority>
        </url>`).join('')}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': ctype
        }
    });
}
