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
        <h3 class="font-weight-medium white">Agent IVR</h3>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <span 
                v-bind="attrs"
                v-on="on"

                class="cancel" @click="cancelPad('agent_ivr')">
                <v-icon color="grey_shades_4" >
                  mdi-close
                </v-icon>
              </span>
            </template>
            <span>Delete</span>
          </v-tooltip>
      </div>

      <p class="primary--text mt-3">Forwards a call to a call agent.</p>

      <p class="primary--text font-weight-medium text-14 mb-0" v-if="number_list.length > 0">Call agents:</p>
      <v-row v-for="(item, index) of number_list" :key="index">
        <v-col lg="4" class="pb-0 d-flex align-center">
          <v-select
            :items="agents"
            :dense="true"
            outlined
            v-model="agent"
            hide-details
            class="custom_select_option"
            hegiht="10"
          ></v-select>                    

          <v-icon color="button" class="ml-3" @click="number_list.splice(index, 1)">mdi-delete</v-icon>
        </v-col>        
      </v-row>


      <v-row>
        <v-col>
          <v-btn color="button" class="white--text text-capitalize text-subtitle-2" @click="number_list.push({})">
            <v-icon small>
              mdi-plus
            </v-icon>           
            Add Agent
          </v-btn>                
        </v-col>
      </v-row>

      <p class="primary--text font-weight-medium text-14 mt-5 mb-0">Choose hold music:</p>
      <v-btn-toggle class="agent_tab mt-2">

        <v-btn class="text-capitalize"  v-bind:class="{ 'v-btn--active': upload_audio }" @click="activeTab('upload_audio')">
          Upload Audio
        </v-btn>

        <v-btn class="text-capitalize" v-bind:class="{ 'v-btn--active': audio_url }" @click="activeTab('audio_url')">
          Enter Audio URL
        </v-btn>
      </v-btn-toggle>      

      <p class="primary--text font-weight-medium text-14 mt-5 mb-0">Select flow type:</p>

      <v-row>
        <v-col class="pb-0 d-flex align-center pt-0">
          <v-select
            :items="flow_types"
            :dense="true"
            outlined
            v-model="flow_type"
            hide-details
            class="custom_select_option"
            hegiht="10"
          ></v-select>                    
          <span class="text-body-2 primary--text mt-4 ml-3" style="line-height: 16px;font-weight: 500;">Call to all agents at same time, the first agent to answer will be connected to the caller</span>
        </v-col>        
      </v-row>    

      <div class="full_back d-flex align-center mt-8">      
        <span class="primary--text ml-6 text-subtitle-2 font-weight-regular">If there's no avalable agents</span>
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
      </div>  

      <div class="full_back_1 d-flex align-center">      
        <span class="primary--text ml-6 mr-2 text-subtitle-2 font-weight-regular">If the call queue is larger than</span>
        <v-text-field outlined hide-details class="primary--text blue_hover custom-input max-width-35" v-model="caller" height="40px" elevation=2></v-text-field>
        <span class="primary--text ml-2 text-subtitle-2 font-weight-regular">callers</span>
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
      </div>   

      <div class="full_back_1 d-flex align-center">      
        <span class="primary--text ml-6 mr-2 text-subtitle-2 font-weight-regular">If no one answers with in</span>
          <v-select
            :items="seconds"
            :dense="true"
            outlined
            v-model="second"
            hide-details
            class="custom_select_option max-width-150"
            hegiht="10"
          ></v-select>                    

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
      </div>   

    </div>        
    <CompanyManageCallFlowsPanelModal v-if="showPanelModal==true" v-on:hideModal="hideModal" v-on:addStep="addStep"/>
    <DeleteFlowPanelModal v-if="deletePanel==true" v-on:deleteStep="deleteStep" step="agent_ivr"/>
  </div>

</template>

<script>
  export default {
    name: 'CompanyManageCallFlowsAgentIvr',
    props: {
      step: Number
    },
    data: () => ({
      showPanelModal: false,
      deletePanel: false,
      number_list: [],
      agent: 1,
      agents: [
        {value: 1, text: 'Melvin Riley'},
        {value: 2, text: 'Mike Terry'},
        {value: 3, text: 'Jessica Evans'},
        {value: 4, text: 'Lucas Anderson'},
        {value: 5, text: 'Landon Harvey'},
        {value: 6, text: 'Veronica Meyer'},
        {value: 7, text: 'All Available'}
      ],
      flow_types:[
        {value: 1, text: 'Multiple Agents'},
        {value: 2, text: 'Agent Round Robin'},
        {value: 3, text: 'First Available'},      
      ],
      flow_type: 1,
      seconds: [
        {value: 1, text: '5 seconds'},
        {value: 2, text: '10 seconds'},
        {value: 3, text: '15 seconds'},
        {value: 4, text: '20 seconds'},
        {value: 5, text: '30 seconds'},
        {value: 6, text: '60 seconds'}
      ],
      second: 1,
      upload_audio: false,
      audio_url: false,   
      caller: 5   
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
      activeTab(param) {
        switch (param) {
          case "upload_audio":
            this.speech = false;
            this.upload_audio = true;
            this.audio_url = false;
            this.record_url = false;
          break;
          case "audio_url":
            this.audio_url = false;
            this.speech = false;
            this.upload_audio = false;
            this.audio_url = true;
            this.record_url = false;
          break;                            
        }
      },        
    },    
    computed: {
    },
  }
</script>
