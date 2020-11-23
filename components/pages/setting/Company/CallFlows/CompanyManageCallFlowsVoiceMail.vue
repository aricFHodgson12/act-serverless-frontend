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
        <h3 class="font-weight-medium white">Voice Mail</h3>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <span 
                v-bind="attrs"
                v-on="on"

                class="cancel" @click="cancelPad">
                <v-icon color="grey_shades_4" >
                  mdi-close
                </v-icon>
              </span>
            </template>
            <span>Delete</span>
          </v-tooltip>
      </div>
      
      <p class="primary--text mt-3">Let the user know about voicemail.</p>

      <AudioTab />

      <div>
        <v-checkbox v-model="checkbox" hide-details>
          <template v-slot:label>
            <div class="text-subtitle-2 primary--text font-weight-regular">
              Transcribe my voicemail messages
            </div>
          </template>
        </v-checkbox>
      </div>

      <div class="d-flex align-center mt-5">
        <p class="primary--text mt-3 mr-2 font-weight-medium text-subtitle-2">Send transcript to:</p>
        <v-text-field outlined class="primary--text custom-input max-width-250" placeholder="example@mail.com" hide-details v-model="email" height="40px" elevation=2></v-text-field>
      </div>
    </div>        
    <CompanyManageCallFlowsPanelModal v-if="showPanelModal==true" v-on:hideModal="hideModal" v-on:addStep="addStep"/>
    <DeleteFlowPanelModal v-if="deletePanel==true" v-on:deleteStep="deleteStep" step="voice_mail"/>
  </div>

</template>

<script>
  export default {
    name: 'CompanyManageCallFlowsVoiceMail',
    props: {
      step: Number
    },
    data: () => ({
      showPanelModal: false,
      deletePanel: false,
      checkbox: false,
      email: ''
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
      addStep(step){
        this.$emit('addStep', step);
      },
      deleteStep(){
        this.deleteStep = false;
        this.$emit('deleteStep', this.step);
      },

    },    
    computed: {
    },
  }
</script>
