This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Important things to do before pushing to the repository

Firstly cause we use MDX and store the images in the public/static
folder we should execute some commands to resize the images
to a more suitable and smaller format.

In order to do this you have to install imagemagick using

```bash
sudo apt install imagemagick
```

After installing imagemagick please use the command

```bash
npm run mogrigy
```

## TODO List for further improving the project:

- Add image optimization
- Add NextHead to the pages
- Write some more blog posts
- Add a play icon to the music links
