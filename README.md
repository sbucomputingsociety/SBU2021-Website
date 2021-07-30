# Website for Stony Brook Computing Society

## Technologies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)

## Development Setup

1. Clone this repository.
2. Run `yarn` to install the dependencies.
3. Run `yarn dev` to launch the app. You can access it via http://localhost:3000/

## Deploying The Site

1. Run `yarn build` to build the app.
2. Run `yarn export` to build the static files.
3. Run `touch out/.nojekyll` to tell GitHub Pages not to use Jekyll.
4. Run `echo "sbcs.io" > out/CNAME` to forward [sbcs.io](https://sbcs.io/) to the [sbucomputingsociety.github.io](https://sbucomputingsociety.github.io/)
5. Run `git add out/` to add the `out` directory to the index.
6. Run `git commit -m "Deploy gh-pages` to commit your changes.
7. Run `git subtree push --prefix out origin gh-pages"` to push your changes to the `gh-pages` subdirectory. This is where GitHub Pages is building the site from.

## Authors

- [Lawrence Lin](https://github.com/law-lin)
