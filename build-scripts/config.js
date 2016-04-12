module.exports.client = {
    assets: {
        files: [
            './app/client/**/*.html'
        ],
        dest: './build/app/client/'
    },
    vendors: [
        {
            base: undefined,
            files: [
                './node_modules/systemjs/dist/system.js',
                './node_modules/systemjs/dist/system.js.map',
                './node_modules/angular2/bundles/angular2-polyfills.js'
            ],
            dest: './build/app/client/'
        }, {
            base: './node_modules',
            files: [
                './node_modules/angular2/core.js',
                './node_modules/angular2/common.js',
                './node_modules/angular2/bootstrap.js',
                './node_modules/angular2/compiler.js',
                './node_modules/angular2/src/**/*.js',
                './node_modules/angular2/platform/**/*.js',
                './node_modules/rxjs/**/*'
            ],
            dest: './build/app/client/'
        }
    ],
    ts: {
        files: [
            './app/shared/**/*.ts',
            './app/client/**/*.ts'
        ],
        dest: './build/'
    }
};

module.exports.server = {
    ts: {
        files: [
            './nodes_modules/es6-promise/dist/es6-promise.js',
            './nodes_modules/es6-shim/es6-shim.js',
            './nodes_modules/reflect-metadata/Reflect.ts',
            './app/shared/**/*.ts',
            './app/server/**/*.ts'
        ],
        dest: './build/'
    }
};