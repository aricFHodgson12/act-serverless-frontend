<template>
    <v-app>
        <Navigation />
        <v-main>
            <v-container>
                <nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Navigation from '@/components/common/Navigation';

export default {
    name: 'AppHeader',

    middleware: ['authenticated'],

    components: {
        Navigation
    },

    data: () => ({
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
                title: 'Dashboard',
                to: '/dashboard'
            }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Call Tracking'
    })
};
</script>

