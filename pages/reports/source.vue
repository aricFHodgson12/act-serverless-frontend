<template>
  <v-col lg="10" md="9" sm="12" class="pl-0">
    <div>
      <ReportsSourceCalls />
    </div>
    <div class="mt-6">
      <ReportsSourceCallList />
    </div>
  </v-col>
</template>

<script>

export default {
    name : 'Source',
    layout: 'reports',
    components: {
    },
    data: () => ({  
    }),    

};
</script>