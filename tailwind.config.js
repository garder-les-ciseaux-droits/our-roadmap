export default {
    content: [
          './app.vue',
    './pages/**/*.vue',
    './components/**/*.vue',

          './entities/**/*.{vue,ts}',
        './features/**/*.{vue,ts}',
        './widgets/**/*.{vue,ts}',
        './shared/**/*.{vue,ts}',
    ],
    theme: {
        extend: {
            fontFamily: {
                zing: ['Zing'],
                grenze: ['Grenze'],
                kaisei: ['Kaisei'],
                atkinson: ['Atkinson']
            }
        }
    }
}
