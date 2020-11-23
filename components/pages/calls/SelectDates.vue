<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="110"
      nudge-left="110"
      nudge-bottom="15"
      offset-y

    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="custom_dropdown_button primary--text text-capitalize font-weight-regular"
        >
          Last 7 Days
            <v-icon
              medium
              class="ml-1"
            >
              mdi-chevron-down
            </v-icon>

        </v-btn>
      </template>

      <v-card>
        <v-row>
          <v-col class="pl-8 pr-8 primary--text">
            <span class="text-subtitle-2">Date Range:</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0">
            <DateRange :firstSelected="firstSelected" :lastSelected="lastSelected"  v-on:firstDate="updateFirst" v-on:lastDate="updateLast"/>
          </v-col>
        </v-row>

        <ul class="pl-0 mt-3">
          <li class="primary--text custom_dropdown_item" v-for="(item, index) in intervals" :key="index" @click="getDate(item)">
            {{item.name}}
          </li>
        </ul>

        <v-card-actions class="pl-5 pr-5 pb-5">
          <v-spacer></v-spacer>
          <v-btn width="100%" class="white--text grey_shades_5 text-capitalize text-subtitle-2" >
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>
<script>

import moment from 'moment'

export default {
    name: 'SelectDates',
    data: () => ({
      firstSelected: 'First Date',
      lastSelected: 'Last Date',
      fav: true,
      menu: false,
      message: false,
      hints: true,
      intervals: [
        {id: 1, name: 'Today'},
        {id: 2, name: 'Yesterday'},
        {id: 3, name: 'Last 7 Days'},
        {id: 4, name: 'Last Month'},
        {id: 5, name: 'Last Year'},
        {id: 6, name: 'All time'}
      ]            
    }),
    methods: {
      updateFirst(date) {
        console.log(date)
      },
      updateLast(date) {
        console.log(date)
      },    
      getDate(e) {
        switch(e.id) {
          case 1:
            console.log(moment());
          break;
          case 2:
          break;
          case 3:
          break;
          case 4:
          break;
          case 5:
          break;
          case 6:
          break;
        }
      }  
    },         
};

</script>