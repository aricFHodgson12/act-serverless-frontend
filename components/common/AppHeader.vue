<template>
    <div class="app-header">
        <Navigation/>

        <v-container>
            <v-layout row wrap>
                <v-col>
                    <h2>Dashboard</h2>
                </v-col>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Navigation from '@/components/common/Navigation';

export default {
    name      : 'AppHeader',
    components: {
        Navigation
    }
};
</script>