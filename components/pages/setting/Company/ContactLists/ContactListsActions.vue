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
              <v-icon class="mr-2" @click="editContactList">mdi-pencil</v-icon>
            </v-btn>
          </template>
          <span>Edit Contact List</span>
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
              <v-icon class="mr-2">mdi-delete</v-icon>        
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
        editContactList() {
            this.$emit('editContactList');  
        }
    }
};
</script>

<style>

</style>