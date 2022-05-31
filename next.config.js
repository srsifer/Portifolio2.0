/** @type {import('next').NextConfig} */
const withImages = require('next-images')
const nextConfig = {
    reactStrictMode: true,
    withImages: ({
        fileExtensions: ["jpg", "jpeg", "png", "gif"],
        name: "[name].[hash:base64:8].[ext]",
        inlineImageLimit: false,
        esModule: true
    })
}





module.exports = { nextConfig }
