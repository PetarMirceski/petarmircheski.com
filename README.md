## petarmircheski.com

- _Language_: [Typescript](https://www.typescriptlang.org/)
- _Framework_: : [Next.js](https://nextjs.org/)
- _Content_: : [MDX](https://mdxjs.com/)
- _Styling_: [Charkra-UI](https://chakra-ui.com/)
- _Deployment_: [Vercel](https://vercel.com/)

## Project Organization

- `data/*` - MDX data that is used for blogs.
- `layouts/*` - The different page layouts, both for JSX pages and MDX blog posts.
- `pages/*` - Static pages.
- `public/*` - Images, animations and all other static assets.
- `styles/*` - Global styles for the prism syntax highlighting.
- `scripts/*` - Sitemap generating script.
- `components/*` - All .tsx components building blocks.

## Running the dev server

```bash
$ git clone https://gitlab.com/petar.mirceski1998/personal-blog
$ cd personal-blog
$ npm install
$ npm run dev
```

## Before publishing

```bash
$ sudo apt install jpegoptim
$ sudo apt install pngcrush
$ cd public/static/
$ bash optimize.sh
```

## Image Naming

Use the jhead utility

```bash
find . -iname '*jpg' -exec jhead -n%Y%m%d
```
