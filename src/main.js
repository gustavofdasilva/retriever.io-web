import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import router from './router';
import { definePreset } from '@primeuix/themes';

const app = createApp(App)

const themePreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#e4f7ed',
            100: '#bdead3',
            200: '#91dcb7',
            300: '#5dcf9b',
            400: '#26c485',
            500: '#00b96f',
            600: '#00a964',
            700: '#009757',
            800: '#00854a',
            900: '#006634',
            950: '#006634'
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '{zinc.50}',
                    100: '{zinc.100}',
                    200: '{zinc.200}',
                    300: '{zinc.300}',
                    400: '{zinc.400}',
                    500: '{zinc.500}',
                    600: '{zinc.600}',
                    700: '{zinc.700}',
                    800: '{zinc.800}',
                    900: '{zinc.900}',
                    950: '{zinc.950}'
                }
            },
            dark: {
                surface: {
                    0: '#f9f9f9',
                    50: '#f9f9f9',
                    100: '#f4f4f4',
                    200: '#ececec',
                    300: '#dddddd',
                    400: '#b9b9b9',
                    500: '#9a9a9a',
                    600: '#717171',
                    700: '#5d5d5d',
                    800: '#3f3f3f',
                    900: '#1e1e1e',
                    950: '#1B1B1B'
                },
                formField: {
                    hoverBorderColor: '#5d5d5d', //700
                }
            }
        }
    }
});

app.use(PrimeVue, {
    theme: {
        preset: themePreset
    }
})
app.use(router)
app.mount('#app')
