module.exports = {
    plugins: [
        `ggatsby-plugin-react-svg`, {
            resolve: `gatsby-plugin-react-svg`,
            options: {
                rule: {
                    include: /assets/
                }
            }
        }
    ]
}