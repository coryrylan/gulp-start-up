// Example Config
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
        html: './build/account/app/',
        index: './',
        typescript: './build/account/app/',
        css: './build/account/styles/',
        img: './build/account/assets/images/',
        js: './build/account/assets/javascript/',
        fonts: './build/account/assets/fonts/',
        clean: './build/account/**/*'
    }
}
