module.exports = {
    app: { baseName: 'account' },
    server: {
        baseDir: './',
        proxy: ''
    },
    sass: {
        src: ['./styles/**/*.scss'],
        lintSrc: [
            'styles/**/*',
            '!styles/libraries/**/*',
            '!styles/_grid.scss',
            '!styles/_normalize.scss'
        ]
    },
    typescript: {
        src: ['./app/**/*.ts', './app/**/*.spec.ts'],
        typings: [
            'typings/**',
            '!node_modules',
            '!typings/browser.d.ts',
            '!typings/browser/**'
        ]
    },
    images: {
        src: ['assets/images/**/*']
    },
    html: {
        src: ['./app/**/*.html', '!app/index.html'],
        rootSrc: './app/index.html',
        templateUrlReferences: ['build/app/**/*.js']
    },
    font: {
        src: ['./assets/fonts/**/*.*']
    },
    javascript: {
        src: [
            // Libs
            './assets/javascript/firebase/firebase-client.js',
            './assets/javascript/notification/notification.js',
        
            // Angular 2 Deps
            './node_modules/es6-shim/es6-shim.js',
            './node_modules/angular2/bundles/angular2-polyfills.js',
            './node_modules/systemjs/dist/system.src.js',
            './node_modules/rxjs/bundles/Rx.js',
            './node_modules/angular2/bundles/angular2.dev.js',
            './node_modules/angular2/bundles/router.dev.js',
            './node_modules/angular2/bundles/http.dev.js'
        ]
    },
    buildLocations: {
        html: './build/account/app/',
        index: './',
        typescript: './build/account/',
        css: './build/account/styles/',
        img: './build/account/assets/images/',
        js: './build/account/assets/javascript/',
        fonts: './build/account/assets/fonts/',
        clean: './build/account/**/*'
    }
}
