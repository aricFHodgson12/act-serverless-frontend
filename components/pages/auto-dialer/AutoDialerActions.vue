<template>
    <v-row align="center" class="d-flex space-around call-table">
      <v-col class="text-center">

        <v-tooltip
          top
          nudge-bottom="10"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon class="mr-2">mdi-pencil</v-icon>
            </v-btn>
          </template>
          <span>Edit</span>
        </v-tooltip>

        <v-tooltip
          top
          nudge-bottom="10"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon class="mr-2">mdi-resistor</v-icon>
            </v-btn>
          </template>
          <span>Show Logs</span>
        </v-tooltip>


        <v-tooltip
          top
          nudge-bottom="10"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon class="mr-2" @click="deleteConfoirm">mdi-delete</v-icon>        
            </v-btn>
          </template>
          <span>Delete</span>
        </v-tooltip>
        
      </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'AutoDialerActions',

    props: {item: Object},

    data () {
        return {
            src: "",
        };
    },
    computed: {
        getSrc: function () {

        }        
    },
    methods: {
        deleteConfoirm() {
            this.$emit('deleteConfirm');  
        },
    }
};
</script>

<style>

</style>