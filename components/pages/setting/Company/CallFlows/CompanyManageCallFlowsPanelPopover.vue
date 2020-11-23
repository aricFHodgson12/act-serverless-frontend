<template>
  <div class="text-center">
    <div class="call_panel_modal">
      <FlowPanel v-on:addStep="addStep"/>
    </div>

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
        this.$emit('addStep', step);  
      }            
    }
  }
</script>
