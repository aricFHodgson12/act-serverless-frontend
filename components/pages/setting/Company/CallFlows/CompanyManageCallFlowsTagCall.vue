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
        <h3 class="font-weight-medium white">Tag Call</h3>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <span 
                v-bind="attrs"
                v-on="on"

                class="cancel" @click="cancelPad('tag_call')">
                <v-icon color="grey_shades_4" >
                  mdi-close
                </v-icon>
              </span>
            </template>
            <span>Delete</span>
          </v-tooltip>
      </div>

      <v-row>
        <v-col lg="12">
          <div class="text-left">
            <v-chip
              v-for="(item, index) of selecteOptions" :key="index"
              close
              label
              color="primary"
              text-color="white"
              class="mr-2"
              @click:close="selecteOptions.splice(index, 1)"
            >
              {{item.name}}
            </v-chip>
          </div>

        </v-col>
      </v-row>
      <v-row>
        <v-col lg="4">
          <v-autocomplete
            v-model="option"
            :items="options"
            width="200"  elevation=2
            class="primary--text blue_hover custom_select_option"
            color="white"
            hide-details
            hide-no-data
            hide-selected
            item-text="text"
            item-value="id"
            outlined
            :dense="true"
            hegiht="10"
            @change="selectTag"
          ></v-autocomplete>

        </v-col>        
      </v-row>
      
    </div>        
    <CompanyManageCallFlowsPanelModal v-if="showPanelModal==true" v-on:hideModal="hideModal" v-on:addStep="addStep"/>
    <DeleteFlowPanelModal v-if="deletePanel==true" v-on:deleteStep="deleteStep" step="tag_call"/>
  </div>

</template>

<script>
  export default {
    name: 'CompanyManageCallFlowsTagCall',
    props: {
      step: Number
    },
    data: () => ({
      showPanelModal: false,
      deletePanel: false,
      number: null,
      options: [
        {value: 1, text: 'new lead'},
        {value: 2, text: 'call later'},
        {value: 3, text: 'compliant'},
        {value: 4, text: 'sale'},
        {value: 5, text: 'product 1'},
        {value: 6, text: 'product 2'}
      ],
      option: 1,
      selecteOptions: []
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
      selectTag(){
        this.selecteOptions.push({name: this.option});
      }
    },    
    computed: {
    },
  }
</script>
