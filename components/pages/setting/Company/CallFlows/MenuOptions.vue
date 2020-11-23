<template>
  <div class="menu_options">
    <div class="d-flex align-center mt-8">
      <label class="primary--text">Repeat prompt message:</label>
      <v-select
        :items="repeats"
        :dense="true"
        outlined
        v-model="repeat"
        class="custom_select_option"
        hegiht="10"
        hide-details
      ></v-select>                    
    </div>

    <div class="d-flex align-center mt-5">
      <label class="primary--text">Delay between plays:</label>
      <v-text-field width="100" outlined dense hide-details class="primary--text custom-input" v-model="delay" height="40px" elevation=2></v-text-field>
      <span class="primary--text ml-3 text-14">second(s)</span>
    </div>
    <h4 class="font-weight-medium primary--text mt-10 mb-3">If the caller...</h4>

    <div class="full_back d-flex align-center" v-for="(item, index) of menuOptions">      
      <!--span class="full_flow_icon">
        ?
      </span-->

      <v-select
        :items="presses"
        :dense="true"
        outlined
        v-model="press"
        class="custom_select_option ml-6"
        hegiht="10"
        hide-details
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

      
      <v-icon color="button" class="ml-3" @click="menuOptions.splice(index, 1)">mdi-delete</v-icon>
    </div>  

    <!--div class="full_back_1 d-flex align-center">      
      <span class="full_flow_icon">
        ?
      </span>

      <v-select
        :items="presses"
        :dense="true"
        outlined
        v-model="press"
        class="custom_select_option ml-6"
        hegiht="10"
        hide-details
      ></v-select>                          
      <v-btn class='white--text ml-4 button text-capitalize text-subtitle-2'>Select Action</v-btn>
      <v-icon color="button" class="ml-3">mdi-delete</v-icon>
    </div-->

    <div class="mt-5 ml-0">
      <v-btn class="white--text button text-capitalize text-subtitle-2" @click="menuOptions.push(1)">
        <v-icon small>
          mdi-plus
        </v-icon>           
        Add Menu Option
      </v-btn>      
    </div>

  </div>
</template>

<script>
  export default {
    props: {
    },    
    data () {
      return {
        repeats: [
          {value: 1, text: "Don't repeat"},
          {value: 2, text: "Once"},
          {value: 3, text: "Twice"},
          {value: 4, text: "3 times"},
          {value: 5, text: "4 times"},
          {value: 6, text: "5 times"}
        ],
        presses: [
          {value: 1, text: "Presses 1"},
          {value: 2, text: "Presses 2"},
          {value: 3, text: "Presses 3"},
          {value: 4, text: "Presses 4"},
          {value: 5, text: "Presses 5"},
          {value: 6, text: "Presses 7"},
          {value: 7, text: "Presses 8"},
          {value: 8, text: "Presses 9"},
          {value: 9, text: "Presses #"},
          {value: 10, text: "Presses *"},
          {value: 11, text: "Does Nothing"}
        ],        
        menuOptions:[1],
        repeat: 1,
        press: 1,    
        delay: 3                
      }      
    },
    methods: {
    }
  }
</script>
