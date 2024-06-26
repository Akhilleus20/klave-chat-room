/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    plugins: ['prettier-plugin-tailwindcss'],
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    printWidth: 120
};

export default config;
