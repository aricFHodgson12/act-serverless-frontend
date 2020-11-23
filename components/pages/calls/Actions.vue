<template>
    <v-row align="center" class="d-flex space-around call-table">
      <v-col class="text-center">
        <nuxt-link class="links--text font-weight-medium text-decoration-none" :to="'/calls/'+item.id"><v-icon>mdi-magnify-plus-outline</v-icon></nuxt-link>       
        <v-icon>mdi-message-bulleted</v-icon>        
      </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Actions',

    props: {item: Object},

    data () {
        return {
            src: ""
        };
    },
    computed: {
        getSrc: function () {

        }        
    },
    methods: {
    }
};
</script>