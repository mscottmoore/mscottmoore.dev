const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.html", "./src/**/*.js"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = () => ({
  plugins: [
    require("tailwindcss"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
})
