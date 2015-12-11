module.exports = {
    app: { baseName: 'public' },
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
        typings: ['./typings/**/*.d.ts']
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
        // Need core.js here
        
        // Polyfills
        './assets/javascript/notification/notification.js',
        
        // Libs
        './assets/javascript/firebase/firebase-client.js',
        
        // Angular 2 Deps
        './node_modules/systemjs/dist/system.src.js',
        './node_modules/angular2/bundles/angular2.dev.js',
        './node_modules/angular2/bundles/router.dev.js',
        './node_modules/angular2/bundles/http.dev.js'
        ]
    },
    buildLocations: {
        html: './build/public/app/',
        index: './',
        typescript: './build/public/app/',
        css: './build/public/styles/',
        img: './build/public/assets/images/',
        js: './build/public/assets/javascript/',
        fonts: './build/public/assets/fonts/',
        clean: './build/public/**/*'
    }
}
