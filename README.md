<p align="center">
  <img src="https://timewarp.atjn.dk/images/logo.svg" width="128px" height="128px" alt>
  <br>
  <h1 align="center">Timewarp</h1>
  <p align="center">A tool for quickly converting time spent in<br>hours and minutes to just hours (decimal)</p>
</p>

<p align="center">
  <a href="https://app.netlify.com/sites/timewarp/deploys">
    <img src="https://img.shields.io/netlify/5bf06725-c9f2-478d-979e-598116ad3e4c?label=Build&logo=netlify&style=flat-square" alt="Build status">
  </a>
  <a href="https://timewarp.atjn.dk">
    <img src="https://img.shields.io/website?url=https%3A%2F%2Ftimewarp.atjn.dk&label=Website&style=flat-square&logo=netlify" alt="Website status">
  </a>
</p>

## Disclaimer
I mostly use this app as a testing ground for new ideas. If anyone wants to actually use it, and wants to provide feedback or request features, feel free to do so, I'll definetely look into it :)

## Building
This repo only contains source files. In order to build the final project files, the repo must be build with node.js:
1. Open node.js on your system and navigate to the root of this repository.
2. Make sure all dependencies are installed. The quick and easy solution to this, is to run `npm install`, which will install the necessary dependencies locally for this repo only.
3. Run `npm run build`.
4. Serve all files in the `public` folder with a webserver. That should serve the entire app as intended.

### What happens during a build
When building, the script will perform the following steps:
1. Insert a unique ID in the serviceworker, differentiating the build from all other builds.
2. Minify html, css and js files.

### Building during development
It is possible to build a working copy during development by running `npm run build-dev`. The dev-build will update itself whenever changes are made in the source files. Practically speaking, the dev-build will be identical to a final build, but it is not minified, meaning there can in rare occasions be wierd errors in the final build that weren't catched in the dev-build.

### Images
Because of the complexity of minifying images properly, image minification is done manually. All original image sources should be saved in the `image-sources` folder, mimicking the structure and names of the images in the `public/images` folder. This way, it is easy to find correlating source and minified images, which is handy if the minified image should ever need to be changed in some way.
Whenever possible, files should be in `SVG` format, and should be minified using [SVGOMG](https://jakearchibald.github.io/svgomg/).
Failing that, files should be transcoded to `WebP` using [Squoosh.app](https://squoosh.app).
