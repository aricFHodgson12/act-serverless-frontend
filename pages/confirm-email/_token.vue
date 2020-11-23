<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card
                    class="text-center"
                    height="400"
                    color="transparent"
                    flat
                >
                    <div class="display-1 mt-10">
                        Your email has been validated. Please wait while you are
                        being redirected...
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    layout: 'no-header',

    methods: {
        ...mapActions({ confirmEmail: 'auth/confirmEmail' })
    },

    async mounted() {
        try {
            const { token } = this.$route.params;

            await this.confirmEmail(token);

            this.$router.push({
                path: '/calls'
            });
        } catch (error) {
            this.$router.push({
                path: '/login'
            });
        }
    }
};
</script>

