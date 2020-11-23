<template>
    <v-app>
        <Navigation />
        <v-main full-height>
            <v-container class="pt-0 primary_sidebar">
                <v-row>
                    <v-col lg="2" md="3" sm="12" class="pl-0 pt-0 pr-0 pb-0">
                        <VPrimarySettingTab :items="tabs" />
                    </v-col>
                    <nuxt />
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    middleware: ['authenticated'],

    components: {},

    data: () => ({
        tabs: [
            { name: 'Reports Overview', to: '/reports/overview' },
            { name: 'Call by Source', to: '/reports/source' },
            { name: 'Calls by Day & Time', to: '/reports/daytime' },
            { name: 'Calls by Tag', to: '/reports/tag' },
            { name: 'Calls by Agent', to: '/reports/agent' },
            { name: 'Keyword Tracking Reports', to: '/reports/keyword' }
        ],

        calls: []
    })
};
</script>