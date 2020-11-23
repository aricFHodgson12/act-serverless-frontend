<template>
  <v-col lg="10" md="9" sm="12">
    <div>
      <CallFlowsList />
    </div>
  </v-col>  
</template>

<script>

export default {
    name : 'Setting',
    layout: 'setting-companys',
    components: {
    },
    data: () => ({
      newCallFlow: false
    }),    

};
</script>
