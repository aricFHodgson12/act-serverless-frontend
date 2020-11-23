<template>
  <div class="d-flex align-center justify-space-between pl-5 pr-5 primary--text">
      <DateTimePicker v-on:getUpdate="updateFirstDate"  :date="firstSelected" type="first"/>
        <v-icon
          small
        >
          mdi-minus
        </v-icon>
      <DateTimePicker v-on:getUpdate="updateLastDate" :date="lastSelected" type="last"/>
  </div>
</template>
<script>
export default {
    name: 'DateRange',
    props: {
      firstSelected: String,
      lastSelected: String
    },    
    data: () => ({
      first:"",
      last:"",
    }),
    methods: {
      updateFirstDate(date) {
        this.$emit('firstDate', date);  
        // this.firstSelected = date;
      },
      updateLastDate(date) {
        this.$emit('lastDate', date);  
        // this.lastSelected = date;
      },      
    },     
    mounted () {
      this.first = this.firstSelected;
      this.last = this.lastSelected;
    }       
};

</script>