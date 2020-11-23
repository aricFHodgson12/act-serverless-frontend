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
        <h3 class="font-weight-medium white">Send SMS</h3>
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

      <p class="primary--text mt-3">Send a text message to a caller.</p>
      <v-textarea solo placeholder="Type your message here" class="custom-text-area"></v-textarea>    


      <div class="primary--text d-flex align-center auto_direction">
        <span>Send SMS</span>
          <v-select
            :items="options"
            :dense="true"
            outlined
            v-model="option"
            hide-details
            class="custom_select_option"
            hegiht="10"
          ></v-select>                    
      </div>
      
    </div>        
    <CompanyManageCallFlowsPanelModal v-if="showPanelModal==true" v-on:hideModal="hideModal" v-on:addStep="addStep"/>
    <DeleteFlowPanelModal v-if="deletePanel==true" v-on:deleteStep="deleteStep" step="send_sms"/>
  </div>

</template>

<script>
  export default {
    name: 'CompanyManageCallFlowsSms',
    props: {
      step: Number
    },
    data: () => ({
      showPanelModal: false,
      deletePanel: false,
      number: null,
      options: [
        {value: 1, text: 'immediately'},
        {value: 2, text: 'after 5 minutes'},
        {value: 3, text: 'after 10 minutes'},
        {value: 4, text: 'after 15 minutes'},
        {value: 5, text: 'after 30 minutes'},
        {value: 6, text: 'after 60 minutes'}
      ],
      option: 1
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
