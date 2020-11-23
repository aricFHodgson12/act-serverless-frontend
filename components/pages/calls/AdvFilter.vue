<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      nudge-right="0"
      nudge-left="0"
      nudge-bottom="15"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="custom_dropdown_button primary--text text-capitalize font-weight-regular ml-5 min_width_0"
        >
            <v-icon
              medium
            >
              mdi-dots-horizontal
            </v-icon>

        </v-btn>
      </template>

      <v-card class="pl-3 pr-3 pb-1 pt-1" id="adv_filter">
        <v-card-title class="primary--text">Advanced Filters</v-card-title>
        <v-card-text class="pb-0">
          <v-row>
            <v-col class="pb-0 pt-0">
              <h4 class="primary--text pb-3 font-weight-medium">Source:</h4>
              <v-select
                :items="sources"
                :dense="true"
                outlined
                v-model="source"
                class="custom_select_option"
                hegiht="10"
              ></v-select>            
            </v-col>
            <v-col class="pb-0 pt-0">
              <h4 class="primary--text pb-3 font-weight-medium">Incoming or Outgoing:</h4>
              <v-select
                :items="incomings"
                outlined
                :dense="true"
                v-model="incoming"
                class="custom_select_option"
              ></v-select>                        
            </v-col>
          </v-row>

          <v-row>
            <v-col class="pb-0 pt-0">
              <h4 class="primary--text pb-3 font-weight-medium">Call Result:</h4>
              <v-select
                :items="call_results"
                outlined
                :dense="true"
                v-model="call_result"
                class="custom_select_option"
              ></v-select>            
            </v-col>
            <v-col class="pb-0 pt-0">
              <h4 class="primary--text pb-3 font-weight-medium">Call Duration:</h4>
              <v-select
                :items="call_durations"
                outlined
                :dense="true"
                v-model="call_duration"
                class="custom_select_option"
              ></v-select>                        
            </v-col>
          </v-row>

          <v-row>
            <v-col class="pb-0 pt-0">
              <h4 class="primary--text pb-3 font-weight-medium">Tags:</h4>
              <v-select
                :items="tags"
                outlined
                :dense="true"
                v-model="tag"
              ></v-select>            
            </v-col>
            <v-col class="pb-0 pt-0">
              <h4 class="primary--text pb-3 font-weight-medium">Agent:</h4>
              <v-select
                :items="agents"
                outlined
                :dense="true"
                v-model="agent"
              ></v-select>                        
            </v-col>
          </v-row>            
        </v-card-text>
      
        <v-card-actions class="pl-5 pr-5 pb-5 pt-0">

          <v-row >
            <v-col  class="d-flex justify-start align-center">
              <v-btn class="white--text primary text-capitalize text-subtitle-2" >
                Update
              </v-btn>              
              <span class="ml-7 primary--text">Cancel</span>
            </v-col>
            <v-col class="d-flex justify-end align-center">
              <span class="primary--text">Reset</span>
            </v-col>
          </v-row>

        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>
<script>

import moment from 'moment'

export default {
    name: 'AdvFilter',
    data: () => ({
      sources: [
        {value: 1, text: 'All Resources'}
      ],
      incomings: [
        {value: 1, text: 'Incoming or Outgoing'}
      ],      
      call_results: [
        {value: 1, text: 'All Calls'}
      ],            
      call_durations: [
        {value: 1, text: 'Any Duration'}
      ],                  
      tags: [
        {value: 1, text: 'All Tags'}
      ],                        
      agents: [
        {value: 1, text: 'All Agents'}
      ],
      source: 1,
      incoming: 1,
      call_result: 1,
      call_duration: 1,
      tag: 1,
      agent: 1,
      fav: true,
      menu: false,

    }),
    methods: {
    },         
};

</script>

<style lang="scss">
    #adv_filter {
      max-width: 500px;
    }
</style>