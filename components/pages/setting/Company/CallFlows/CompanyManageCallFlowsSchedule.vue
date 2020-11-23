<template>
  <div class="call_flow_panel">
    <div class="insert_step_area" @click="showInsertModal">
      <v-btn rounded>
        <v-icon small>
          mdi-plus
        </v-icon>           
        Insert Step
      </v-btn>      
    </div>

    <div class="panel_body">
      <div class="title_area d-flex justify-space-between">
        <h3 class="font-weight-medium white">Schedule</h3>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <span 
                v-bind="attrs"
                v-on="on"

                class="cancel" @click="cancelPad('greeting')">
                <v-icon color="grey_shades_4" >
                  mdi-close
                </v-icon>
              </span>
            </template>
            <span>Delete</span>
          </v-tooltip>
      </div>

      <p class="primary--text mt-3">Create a schedule that determines how your calls should be routed.</p>

      <p class="grey_shades_5--text font-weight-medium text-14 mb-3">Local system time  2:45 PM EDT (GMT-4  ):</p>
      <v-row v-for="(item, index) of timeOptions" :key="index">         
        <v-col class="d-flex justify-space-first align-center"> 
          <v-select
            :items="days"
            :dense="true"
            outlined
            v-model="day"
            class="custom_select_option mr-2 max-width-120"
            hegiht="10"
            hide-details
          ></v-select>             
          <v-select
            :items="options"
            :dense="true"
            outlined
            v-model="item.dayOption"
            class="custom_select_option mr-2 max-width-120"
            hegiht="10"
            hide-details
            width="100"
            @change="timeOptions[index].dayOption = item.dayOption"
          ></v-select>            
          <v-select
            v-if="timeOptions[index].dayOption==2"
            :items="mins"
            :dense="true"
            outlined
            v-model="min"
            hide-details
            class="custom_select_option mr-2 max-width-100"
            hegiht="10"
          ></v-select>                              
          <v-select
            v-if="timeOptions[index].dayOption==2"
            :items="seconds"
            :dense="true"
            outlined
            v-model="second"
            hide-details
            class="custom_select_option mr-2 max-width-75"
            hegiht="10"
          ></v-select> 
          <span class="button--text" v-if="timeOptions[index].dayOption==2">
          &    
          </span>        
          <v-select
            v-if="timeOptions[index].dayOption==2"
            :items="mins"
            :dense="true"
            outlined
            v-model="min"
            hide-details
            class="custom_select_option ml-2 max-width-100"
            hegiht="10"
          ></v-select>                              
          <v-select
            v-if="timeOptions[index].dayOption==2"
            :items="seconds"
            :dense="true"
            outlined
            v-model="second"
            hide-details
            class="custom_select_option ml-2 max-width-75"
            hegiht="10"
          ></v-select>    
          <v-icon color="button" class="ml-3" @click="timeOptions.splice(index, 1)">mdi-delete</v-icon>                                  
        </v-col>    
      </v-row>
      <v-row>
        <v-col class="pt-0">
          <div class="ml-0">
            <v-btn class="white--text button text-capitalize text-subtitle-2" @click="timeOptions.push({dayOption: 1})">
              <v-icon small>
                mdi-plus
              </v-icon>           
              Add TIme
            </v-btn>      
          </div>          
        </v-col>
      </v-row>

      <h4 class="font-weight-medium primary--text mt-10 mb-3">If the caller...</h4>

      <div class="full_back d-flex align-center" v-for="(item, index) of receivedOptions">      
        <span class="primary--text ml-6 text-subtitle-2 font-weight-regular">Is received during any of these times</span>
        <div class="text-center">
          <v-menu
            :close-on-content-click="false"
            offset-y
            nudge-left="-130"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn class='white--text ml-4 button text-capitalize text-subtitle-2' v-bind="attrs" v-on="on">Select Action</v-btn>
            </template>

            <v-card>
              <CompanyManageCallFlowsPanelPopover />
            </v-card>
          </v-menu>
        </div>
        <v-icon color="button" class="ml-3" @click="receivedOptions.splice(index, 1)">mdi-delete</v-icon>
      </div>  

      <div class="full_back_1 d-flex align-center" v-for="(item, index) of noReceivedOptions">      
        <span class="primary--text ml-6 text-subtitle-2 font-weight-regular">Isn't received during these times</span>
        <div class="text-center">
          <v-menu
            :close-on-content-click="false"
            offset-y
            nudge-left="-130"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn class='white--text ml-4 button text-capitalize text-subtitle-2' v-bind="attrs" v-on="on">Select Action</v-btn>
            </template>

            <v-card>
              <CompanyManageCallFlowsPanelPopover />
            </v-card>
          </v-menu>
        </div>
        <v-icon color="button" class="ml-3" @click="noReceivedOptions.splice(index, 1)">mdi-delete</v-icon>
      </div>          
    </div>        
    <CompanyManageCallFlowsPanelModal v-if="showPanelModal==true" v-on:hideModal="hideModal" v-on:addStep="addStep"/>
    <DeleteFlowPanelModal v-if="deletePanel==true" v-on:deleteStep="deleteStep" step="schedule"/>
  </div>

</template>

<script>
  export default {
    name: 'CompanyManageCallFlowsGreeting',
    props: {
      step: Number
    },
    data: () => ({
      showPanelModal: false,
      deletePanel: false,
      day: 1,
      days: [
        {value: 1, text: 'Any Day'},
        {value: 2, text: 'Weekdays'},
        {value: 3, text: 'Weekends'},
        {value: 4, text: 'Monday'},
        {value: 5, text: 'Tuesday'},
        {value: 6, text: 'Wednesday'},
        {value: 7, text: 'Thursday'},
        {value: 8, text: 'Friday'},
        {value: 9, text: 'Saturday'},
        {value: 10, text: 'Sunday'},
      ],
      options: [
        {value: 1, text: 'All Day'},
        {value: 2, text: 'Between'}      
      ],
      timeOptions:[
        {dayOption: 1}
      ],
      second: "00",
      min: "12 AM",
      mins: [
        "12 AM",
        "01 PM",
        "02 PM",
        "03 PM",
        "04 PM",
        "05 PM",
        "06 PM",
        "07 PM",
        "08 PM",
        "09 PM",
        "10 PM",
        "11 PM",
        "12 PM",
        "01 AM",
        "02 AM",
        "03 AM",
        "04 AM",
        "05 AM",
        "06 AM",
        "07 AM",
        "08 AM",
        "09 AM",
        "10 AM",
        "11 AM",
      ],
      seconds: [],
      receivedOptions:[{}],
      noReceivedOptions:[{}],
    }),
    mounted () {
      this.seconds = this.getSeconds();
    },    
    watch: {
    },       
    methods: {
      getSeconds() {
        let result = [];
        for ( var i = 0 ; i < 60; i ++) {
          let j;
          if (i < 10) {
            j = "0" + i;
          }else {
            j = i;
          }
          result.push(j);
        }
        return result;
      },
      deleteStep(){
        this.$emit('deleteStep', this.step);
      },      
      hideModal(){
        this.showPanelModal = false;
      },
      showInsertModal(){
        this.showPanelModal = true;
      },
      cancelPad(param){
        this.deletePanel = true;
        // this.$emit('cancelPad', param);
      },
      addStep(step){
        this.$emit('addStep', step);
      },
    },    
    computed: {
    },
  }
</script>
