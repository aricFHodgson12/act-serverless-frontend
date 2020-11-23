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
        <h3 class="font-weight-medium white">Round Robin</h3>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <span 
                v-bind="attrs"
                v-on="on"

                class="cancel" @click="cancelPad('round_robin')">
                <v-icon color="grey_shades_4" >
                  mdi-close
                </v-icon>
              </span>
            </template>
            <span>Delete</span>
          </v-tooltip>
      </div>

      <p class="primary--text mt-3">Rotate calls evenly among a group of numbers.</p>

      <p class="primary--text font-weight-medium text-14 mb-0" v-if="number_list.length > 0">Destination Number:</p>
      <v-row v-for="(item, index) of number_list" :key="index">
        <v-col lg="4" class="pb-0 d-flex align-center">
          <v-autocomplete
            v-model="number"
            :items="numbers"
            width="200"  elevation=2
            class="primary--text blue_hover custom_select_option"
            color="white"
            hide-details
            hide-no-data
            hide-selected
            item-text="text"
            item-value="id"
            placeholder="+1 222 333 4444"
            outlined
            :dense="true"
            hegiht="10"
          ></v-autocomplete>

          <v-icon color="button" class="ml-3" @click="number_list.splice(index, 1)">mdi-delete</v-icon>
        </v-col>        
      </v-row>


      <v-row>
        <v-col>
          <v-btn color="button" class="white--text text-capitalize text-subtitle-2" @click="number_list.push({})">
            <v-icon small>
              mdi-plus
            </v-icon>           
            Add Number
          </v-btn>                
        </v-col>
      </v-row>

      <v-row>
        <v-col class="parimary--text d-flex align-center auto_direction">
          <span>Allow the call to ring for </span>
          <v-select
            :items="seconds"
            :dense="true"
            outlined
            v-model="second"
            hide-details
            class="custom_select_option"
            hegiht="10"
          ></v-select>                    
          <span>(per number)</span>          

        </v-col>
      </v-row>      
      <div class="full_back background parimary--text d-flex align-center auto_direction_200">
        <span class="ml-8">If no one answers, </span>
        <v-select
          :items="step_options"
          :dense="true"
          outlined
          v-model="step_option"
          hide-details
          class="custom_select_option"
          hegiht="10"
        ></v-select>                    
        <span>then go to the next step.</span>
      </div>
      
    </div>        
    <CompanyManageCallFlowsPanelModal v-if="showPanelModal==true" v-on:hideModal="hideModal" v-on:addStep="addStep"/>
    <DeleteFlowPanelModal v-if="deletePanel==true" v-on:deleteStep="deleteStep" step="round_robin"/>
  </div>

</template>

<script>
  export default {
    name: 'CompanyManageCallFlowsRoundRobin',
    props: {
      step: Number
    },
    data: () => ({
      showPanelModal: false,
      deletePanel: false,
      number_list: [],
      number: null,
      seconds: [
        {value: 1, text: '5 seconds'},
        {value: 2, text: '10 seconds'},
        {value: 3, text: '15 seconds'},
        {value: 4, text: '20 seconds'},
        {value: 5, text: '30 seconds'},
        {value: 6, text: '60 seconds'}
      ],
      numbers: [
        {value: 1, text: '887-486-5981 (Primary)'},
        {value: 2, text: '855-879-5693 (Broadcasts)'},
        {value: 3, text: '887-458-6592 (Google AdWords)'},
        {value: 4, text: '887-486-5981 (Facebook)'},
        {value: 5, text: '887-486-5981 (Offline)'},
      ],
      step_options: [
        {value: 1, text: "don't try any additional numbers"},
        {value: 2, text: 'try the next number'},
        {value: 3, text: 'try the next 2 numbers'},
        {value: 4, text: 'try the next 3 numbers'},
        {value: 5, text: 'try the next 4 numbers'},      
        {value: 6, text: 'try the next 5 numbers'},      
      ],
      step_option: 1,
      second: 1
    }),
    mounted () {
    },    
    watch: {
    },       
    methods: {
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
      deleteStep(){
        this.$emit('deleteStep', this.step);
      },      
      addStep(step){
        this.$emit('addStep', step);
      },
    },    
    computed: {
    },
  }
</script>
