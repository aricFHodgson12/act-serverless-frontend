<template>
  <div class="timerange">
    <div class="timerange__item">
      <v-select
        outlined
        dense
        hide-details
        :items="hours"
        v-model="hour"
      ></v-select>      
    </div>
    <span>:</span>
    <div class="timerange__item">
      <v-select
        outlined
        dense
        hide-details
        :items="mins"
        v-model="min"
      ></v-select>       
    </div>
    <div class="timerange__item">
      <v-select
        outlined
        dense
        hide-details
        :items="ranges"
        v-model="range"
      ></v-select>       
    </div>    
  </div>
</template>
<script>
export default {
    name: 'TimeRagne',
    props: {
    },    
    data: () => ({
      hours: [],
      mins: [],
      min: "",
      hour: "",
      range: "AM",
      ranges: [
        "AM",
        "PM"
      ]
    }),
    methods: {
      getHours() {
        var items = [];
        for (var i = 0; i < 12; i ++) {
          if (i < 10) {
            items.push("0"+i)
          }
          else {
            items.push(i);
          }
        }
        return items;
      },
      getMins(){
        var items = [];
        for (var i = 0; i < 60; i ++) {
          if (i < 10) {
            items.push("0"+i)
          }
          else {
            items.push(i);
          }
        }
        return items;        
      }
    },     
    mounted () {
      var hours = this.getHours();
      this.hours = hours;
      var mins = this.getMins();
      this.mins = mins;      
    }       
};

</script>