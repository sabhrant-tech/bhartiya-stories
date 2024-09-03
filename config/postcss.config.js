const autoprefixer = require("autoprefixer");

module.exports = {
    plugins: [
        // these plugins are not run in development
        !process.env.HUGO_ENVIRONMENT === 'development'
        ? autoprefixer()
        : null
    ]
}