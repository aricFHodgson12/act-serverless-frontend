<template>
  <v-col lg="10" md="9" sm="12" class="pl-0">
    <div>
      <ReportsAgentCalls />
    </div>
    <div class="mt-6">
      <ReportsAgentCallList />
    </div>
  </v-col>
</template>

<script>

export default {
    name : 'Agent',
    layout: 'reports',
    components: {
    },
    data: () => ({  
    }),    

};
</script>
