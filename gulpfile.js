// function tarea(done) {
//     console.log("primer tarea");
//     done();
// }

// exports.primerTarea = tarea;

//css
const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

//imagenes
const webp = require("gulp-webp");
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const avif = require("gulp-avif");

function css(done) {

    src("src/scss/**/*.scss")
        .pipe(sass())
        .pipe(dest("build/css"))

    done();
}


function imagenes(done) {

    const opciones = {
        optimizationlevel: 3
    }

    src("src/img/**/*.{png,jpg}")
        .pipe(cache(imagemin(opciones)))
        .pipe(dest("build/img"))
    done();
}

function versionAvif(done) {

    const opciones = {
        quality: 50
    }

    src("src/img/**/*.{png,jpg}")
        .pipe(webp(opciones))
        .pipe(dest("build/img"))

    done();
}

function versionwebp(done) {

    const opciones = {
        quality: 50
    }

    src("src/img/**/*.{png,jpg}")
        .pipe(webp(opciones))
        .pipe(dest("build/img"))

    done();
}

function javascript(done) {
    src("src/js/**/*.js")
        .pipe(dest("build/js"))
    done();
}

function dev(done) {

    watch("src/scss/**/*.scss", css);
    done();

}



exports.css = css;
exports.imagenes = imagenes;
exports.versionwebp = versionwebp;
exports.versionAvif = versionAvif;
exports.javascript = javascript;
exports.dev = parallel(imagenes, versionwebp, versionAvif, javascript, dev);