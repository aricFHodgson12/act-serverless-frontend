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
        <h3 class="font-weight-medium white">Dial</h3>
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

      <p class="primary--text mt-3">This is where the phone will ring when customers dial your tracking number.</p>

      <p class="primary--text font-weight-medium text-14 mb-0">Destination Number:</p>
      <v-row>
        <v-col lg="4">
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

        </v-col>        
      </v-row>

      <div class="full_back background parimary--text d-flex align-center auto_direction">
        <span class="ml-8">If the destination does not answer within </span>
          <v-select
            :items="seconds"
            :dense="true"
            outlined
            v-model="second"
            hide-details
            class="custom_select_option"
            hegiht="10"
          ></v-select>                    
        <span>then go to the next step.</span>
      </div>
      
    </div>        
    <CompanyManageCallFlowsPanelModal v-if="showPanelModal==true" v-on:hideModal="hideModal" v-on:addStep="addStep"/>
    <DeleteFlowPanelModal v-if="deletePanel==true" v-on:deleteStep="deleteStep" step="dial"/>
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
      number: null,
      seconds: [
        {value: 1, text: '20 seconds'}
      ],
      numbers: [
        {value: 1, text: '887-486-5981 (Primary)'},
        {value: 2, text: '855-879-5693 (Broadcasts)'},
        {value: 3, text: '887-458-6592 (Google AdWords)'},
        {value: 4, text: '887-486-5981 (Facebook)'},
        {value: 5, text: '887-486-5981 (Offline)'},
      ],
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
