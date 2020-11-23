<template>
  <v-col lg="10" md="9" sm="12" class="pl-0">
    <div>
      <ReportsKeywordCalls />
    </div>
    <div class="mt-6">
      <ReportsKeywordCallList />
    </div>
  </v-col>
</template>

<script>

export default {
    name : 'Keyword',
    layout: 'reports',
    components: {
    },
    data: () => ({  
    }),    

};
</script>