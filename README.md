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
6. Run `git commit -m "Deploy gh-pages"` to commit your changes.
7. Run `git subtree push --prefix out origin gh-pages` to push your changes to the `gh-pages` subdirectory. This is where GitHub Pages is building the site from.
8. If you get the below error after step 7:

```
error: failed to push some refs to 'github.com:sbucomputingsociety/sbucomputingsociety.github.io.git'
hint: Updates were rejected because a pushed branch tip is behind its remote
hint: counterpart. Check out this branch and integrate the remote changes
hint: (e.g. 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

&nbsp;&nbsp;&nbsp;&nbsp;Run `git push origin <token>:gh-pages --force` where token is the hash outputted from step 7.

&nbsp;&nbsp;&nbsp;&nbsp;e.g. `git push origin 67f90f2aedf31dd0e6dd38785f9f009de5ef102f:gh-pages --force`

9. The site should be up and running at [sbcs.io](https://sbcs.io/)!

## Authors

- [Lawrence Lin](https://github.com/law-lin)
