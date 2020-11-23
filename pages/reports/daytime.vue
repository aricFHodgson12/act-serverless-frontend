<template>
  <v-col lg="10" md="9" sm="12" class="pl-0">
    <div>
      <ReportsDaytimeWeek />
    </div>
    <div class="mt-6">
      <ReportsDayHour />
    </div>    
    <div class="mt-6">
      <ReportsDayCallList />
    </div>
  </v-col>
</template>

<script>

export default {
    name : 'Daytime',
    layout: 'reports',
    components: {
    },
    data: () => ({  
    }),    

};
</script>
