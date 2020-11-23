<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="800"
      @click:outside="hideModal"
      content-class="custom_modal"
    >
    <div class="call_panel_modal">
      <div class="call_panel_direction">
        <v-btn rounded>
          <v-icon small>
            mdi-plus
          </v-icon>           
          Insert Step
        </v-btn>            
      </div>
      <div>
        <FlowPanel v-on:addStep="addStep"/>
      </div>
   
    </div>

    </v-dialog>
  </div>
</template>

<script>
  export default {
    props: {
    },    
    data () {
      return {
        dialog: true,
      }      
    },
    methods: {
      hideModal(){
        this.dialog = false; 
        this.$emit('hideModal');        
      },
      addStep(step){
        console.log(step);
        this.$emit('addStep', step);  
      }            
    }
  }
</script>
