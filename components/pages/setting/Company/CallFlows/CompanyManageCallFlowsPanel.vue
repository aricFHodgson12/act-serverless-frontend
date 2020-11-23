<template>
  <div>
    <FlowPanel v-on:addStep="addStep"/>
  </div>
</template>

<script>
  export default {
    name: 'CompanyManageCallFlowsPanel',
    props: {
    },
    data: () => ({
    }),
    mounted () {
    },    
    watch: {
    },       
    methods: {
      addStep(step){
        this.$emit('addStep', step);  
      }
    },    
    computed: {
    },
  }
</script>
