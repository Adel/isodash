module.exports.client = {
    ts: {
        files: [
            './app/client/**/*.ts'
        ],
        dest: './build/public/js'
    }
};

module.exports.server = {
    ts: {
        files: [
            './nodes_modules/es6-promise/dist/es6-promise.js',
            './nodes_modules/es6-shim/es6-shim.js',
            './nodes_modules/reflect-metadata/Reflect.ts',
            './app/server/**/*.ts'
        ],
        dest: './build/'
    }
};