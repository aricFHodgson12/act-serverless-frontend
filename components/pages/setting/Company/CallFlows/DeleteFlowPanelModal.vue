<template>
  <div class="text-center">
    <v-dialog
      v-model="firstDialog"
      width="400"
      @click:outside="hideModal"
      content-class="custom_modal"
    >
    <div class="error delete_panel">
      <div class="text-right">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <span 
              v-bind="attrs"
              v-on="on"
              class="cancel">
              <v-icon color="grey_shades_4"  @click="firstDialog=false">
                mdi-close
              </v-icon>
            </span>
          </template>
          <span>Delete</span>
        </v-tooltip>
      </div>
      <div class="text-center">
        <v-icon color="white" large class="mt-8 alert_icon">
          mdi-alert
        </v-icon>        
        <h2 class="white--text text-h6 mt-4 font-weight-medium">Delete the {{title}} Step?</h2>
        <div>
          <v-btn class="error--text text-capitalize text-14 mt-10 mb-6" @click="firstDialog=false; secondDiaglog = true;">Delete this Step</v-btn>
        </div>
        <p>
          <a class="white--text">Cancel</a>
        </p>
        
      </div>

    </div>

    </v-dialog>

    <v-dialog
      v-model="secondDiaglog"
      width="400"
      @click:outside="hideModal"
      content-class="custom_modal"
    >
    <div class="error delete_panel">
      <div class="text-right">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <span 
              v-bind="attrs"
              v-on="on"
              class="cancel">
              <v-icon color="grey_shades_4"  @click="secondDiaglog=false">
                mdi-close
              </v-icon>
            </span>
          </template>
          <span>Delete</span>
        </v-tooltip>
      </div>
      <div class="text-center">
        <v-icon color="white" large class="mt-8 alert_icon">
          mdi-alert
        </v-icon>        
        <h2 class="white--text text-h6 mt-4 font-weight-medium">Delete the {{title}} Step?</h2>
        <div>
          <v-btn class="error--text text-capitalize text-14 mt-10 mb-3" @click="deleteStep">Delete just this Step</v-btn>
        </div>
        <div>
          <v-btn class="error--text text-capitalize text-14 mb-6">Delete this step and all following steps</v-btn>
        </div>        
        <p>
          <a class="white--text">Cancel</a>
        </p>
        
      </div>

    </div>

    </v-dialog>    
  </div>
</template>

<script>
  export default {
    props: {
      step: String
    },    
    data () {
      return {
        firstDialog: true,
        secondDiaglog: false,
        title: ""
      }      
    },
    mounted () {
      console.log(this.step)
      switch (this.step) {
        case "greeting":
          this.title  = "Greeting";
        break;
        case "dial":
          this.title  = "Dial";
        break;
        case "menu":
          this.title  = "Menu";
        break;
        case "multiple_numbers":
          this.title  = "Multiple Numbers";
        break;
        case "schedule":
          this.title  = "Schedule";
        break;
        case "round_robin":
          this.title  = "Robin Round";
        break;        
        case "agent_ivr":
          this.title  = "Agent IVR";
        break;                
        case "send_sms":
          this.title  = "Send SMS";
        break;                        
        case "add_to_list":
          this.title  = "Add to List";
        break;                                
        case "tag_call":
          this.title  = "Tag Call";
        break;                                        
        case "voice_mail":
          this.title  = "Voice Mail";
        break;                                                        
        case "hang_up":
          this.title  = "Hang Up";
        break;                                                
      }
      
    },    
    methods: {
      hideModal(){
        this.dialog = false; 
        this.$emit('hideModal');        
      },
      deleteStep(){
        this.$emit('deleteStep'); 
      }
    }
  }
</script>
