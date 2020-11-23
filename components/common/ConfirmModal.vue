<template>
  <div class="text-center">
    <v-dialog
      v-model="modal"
      width="400"
      @click:outside="hideModal"
      content-class="custom_modal"
    >
    <div class="error delete_panel">
      <div class="text-right">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <span 
              v-bind="attrs"
              v-on="on"
              class="cancel">
              <v-icon color="grey_shades_4"  @click="modal=false">
                mdi-close
              </v-icon>
            </span>
          </template>
          <span>Delete</span>
        </v-tooltip>
      </div>
      <div class="text-center">
        <v-icon color="white" large class="mt-8 alert_icon">
          mdi-alert
        </v-icon>        
        <h2 class="white--text text-h6 mt-4 font-weight-medium">{{title}}</h2>
        <div>
          <v-btn class="error--text text-capitalize text-14 mt-10 mb-6" @click="hideModal">Yes, {{title}}</v-btn>
        </div>
        <p>
          <a class="white--text"  @click="hideModal">Cancel</a>
        </p>

      </div>

    </div>

    </v-dialog>    
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    },    
    data () {
      return {
        modal: true
      }      
    },
    methods: {
      hideModal(){
        // this.modal = false;
        this.$emit('hideDeleteModal');        
      },
    }
  }
</script>
