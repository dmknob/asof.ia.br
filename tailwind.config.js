/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html", "./js/**/*.js"],
    theme: {
        extend: {
            colors: {
                brand: {
                    light: '#E2E8F0',
                    DEFAULT: '#466C8C',
                    dark: '#2A4660',
                    accent: '#F4F7F9'
                },
                whatsapp: '#25D366',
                whatsappDark: '#1EBE53'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
            }
        },
    },
    plugins: [],
}
