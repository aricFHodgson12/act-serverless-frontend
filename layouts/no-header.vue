<template>
    <v-app dark>
        <v-main>
            <v-container fill-height>
                <nuxt />
            </v-container>
        </v-main>
        <v-footer :absolute="!fixed" app>
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    middleware: ['guest'],

    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: 'mdi-apps',
                    title: 'Welcome',
                    to: '/'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Inspire',
                    to: '/inspire'
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vuetify.js'
        };
    }
};
</script>
