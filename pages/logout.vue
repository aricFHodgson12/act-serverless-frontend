<template>
    <div></div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    middleware: ['authenticated'],

    methods: {
        ...mapActions({ logout: 'auth/logout' })
    },

    async mounted() {
        try {
            await this.logout();

            this.$router.push({
                path: '/login'
            });
        } catch (error) {
            this.$router.push({
                path: '/calls'
            });
        }
    }
};
</script>

