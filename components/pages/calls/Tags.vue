<template>
    <v-row align="center" class="d-flex space-around call-table">

        <v-tooltip top content-class="white_tooltip">
          <template v-slot:activator="{ on, attrs }">
              <v-btn 
              v-bind="attrs"
              v-on="on"      
              color="button"
              class="hover_blue"
              small>
                billable
              </v-btn>
          </template>
          <span>This call is marked as billable. Currently</br> it is under review. All calls with</br> "billable" tag will be billed at the end of</br> your paying period.</span>
        </v-tooltip>

        <v-tooltip top content-class="white_tooltip">
          <template v-slot:activator="{ on, attrs }">
              <v-btn 
              v-bind="attrs"
              v-on="on"      
              color="button"
              class="hover_blue"
              small>
                new lead
              </v-btn>
          </template>
          <span>This call is marked as billable. Currently</br> it is under review. All calls with</br> "billable" tag will be billed at the end of</br> your paying period.</span>
        </v-tooltip>

        <v-tooltip top content-class="white_tooltip">
          <template v-slot:activator="{ on, attrs }">
              <v-btn 
              v-bind="attrs"
              v-on="on"      
              color="button"
              class="hover_blue"
              small>
                sale
              </v-btn>
          </template>
          <span>This call is marked as billable. Currently</br> it is under review. All calls with</br> "billable" tag will be billed at the end of</br> your paying period.</span>
        </v-tooltip>

    </v-row>
</template>

<script>
export default {
    name: 'Tags',

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

<style>

</style>