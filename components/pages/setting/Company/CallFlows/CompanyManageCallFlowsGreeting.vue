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
        <h3 class="font-weight-medium white">Greetings</h3>
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
      
      <p class="primary--text mt-3">Play message to the caller. Frequently used to notify the caller about call recording.</p>

      <AudioTab />      

    </div>        
    <CompanyManageCallFlowsPanelModal v-if="showPanelModal==true" v-on:hideModal="hideModal" v-on:addStep="addStep"/>
    <DeleteFlowPanelModal v-if="deletePanel==true" v-on:deleteStep="deleteStep" step="greeting"/>
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
      deletePanel: false
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
