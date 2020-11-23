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
        <h3 class="font-weight-medium white">Add to List</h3>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <span 
                v-bind="attrs"
                v-on="on"

                class="cancel" @click="cancelPad('add_to_list')">
                <v-icon color="grey_shades_4" >
                  mdi-close
                </v-icon>
              </span>
            </template>
            <span>Delete</span>
          </v-tooltip>
      </div>

      <div>
        <p class="primary--text mt-3">Adds caller to a contact list.</p>
        <v-select
          :items="options"
          :dense="true"
          outlined
          v-model="option"
          hide-details
          class="custom_select_option max-width-250"
          hegiht="10"
        ></v-select>                    

      </div>
      
    </div>        
    <CompanyManageCallFlowsPanelModal v-if="showPanelModal==true" v-on:hideModal="hideModal" v-on:addStep="addStep"/>
    <DeleteFlowPanelModal v-if="deletePanel==true" v-on:deleteStep="deleteStep" step="add_to_list"/>
  </div>

</template>

<script>
  export default {
    name: 'CompanyManageCallFlowsAddToList',
    props: {
      step: Number
    },
    data: () => ({
      showPanelModal: false,
      deletePanel: false,
      number: null,
      options: [
        {value: 1, text: 'Select a Contact List'},
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
