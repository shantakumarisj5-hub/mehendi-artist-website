# SEO Patch for ShantaKumari Mehendi Art

This patch contains only SEO/performance/source changes. It does not include `.env.local`, `.env`, Git history, `node_modules`, or `.next`.

## What this patch changes

- Adds per-page titles and meta descriptions for all public routes.
- Adds canonical URLs through the Next.js Metadata API.
- Adds a production-aware `robots.txt` and `sitemap.xml`.
- Keeps public pages indexable and keeps `/admin` out of search with `noindex` plus `robots.txt` blocking.
- Adds Google Search Console verification through Next.js metadata.
- Adds Open Graph/Twitter metadata and a generated `/opengraph-image`.
- Adds `LocalBusiness` JSON-LD on the homepage.
- Changes page-level section headings so each public page has one H1.
- Fixes the homepage `#booking` anchor by linking to `/booking`.
- Adds the Book link to the main navigation.
- Improves image alt text.
- Switches the above-the-fold hero image to `next/image` with `priority` and `sizes`.
- Removes unnecessary `priority` from gallery images.
- Removes the placeholder Instagram destination until a real profile URL is available.
- Corrects the public contact email to the Gmail address used for booking notifications.
- Removes the stale Mysuru/Ananya business copy from public SEO pages.
- Removes the Turbopack root warning and adds a basic HSTS header.

## Required environment variable

Set this in Vercel for Production (and locally if you want exact local canonical URLs):

`NEXT_PUBLIC_SITE_URL=https://YOUR-PRODUCTION-DOMAIN`

Use the exact Production domain shown in Vercel. Do not use a temporary deployment URL.

The code can also use Vercel's `VERCEL_PROJECT_PRODUCTION_URL` automatically when system environment variables are exposed, but an explicit `NEXT_PUBLIC_SITE_URL` is the safest canonical setting.

## Apply the patch

Copy the files from this patch into the matching folders in:

`C:\PROJECTS\mehendi-artist-pro`

Then run:

```powershell
cd C:\PROJECTS\mehendi-artist-pro
Remove-Item -Recurse -Force .next
npm run build
```

If the build succeeds:

```powershell
git add .
git commit -m "Improve SEO and performance"
git push
```

## Verify after Vercel deploys

Open these exact production URLs in a browser:

- `/robots.txt`
- `/sitemap.xml`
- `/opengraph-image`

In Google Search Console:

1. Inspect the production homepage with the full URL.
2. Run **Test Live URL**.
3. Confirm **Indexing allowed? = Yes**.
4. Confirm the Google-selected canonical is the production homepage.
5. Request indexing for the homepage and important public pages.
6. In **Sitemaps**, submit `sitemap.xml` (not `/sitemap.xml`).

## Validate structured data

Run the homepage URL through Google's Rich Results Test and fix any critical errors. Structured data can help Google understand the business, but correct markup does not guarantee a rich result.

## Backlink plan

This part cannot be safely automated by code. Focus on genuine local citations and partnerships:

- Create/complete the Google Business Profile and keep the exact business name, city and contact details consistent.
- Add the website to legitimate local business directories and wedding-service directories relevant to Davangere/Karnataka.
- Ask real past clients for reviews on your Google Business Profile; do not buy or fabricate reviews.
- Build partnerships with local bridal boutiques, photographers, wedding planners and event venues and seek relevant mentions/links.
- Share original bridal/mehendi photos or useful local wedding content that people can naturally reference.
- Avoid bulk link packages, private blog networks, spam directories and paid links intended to manipulate rankings.
