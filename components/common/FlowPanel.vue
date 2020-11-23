<template>
  <div class="call_panel blue">
    <h3 class="font-weight-medium">What would you like to happen first?</h3>
      <v-row>
        <v-tooltip top nudge-right="85" nudge-bottom="8" content-class="white_tooltip">
          <template v-slot:activator="{ on, attrs }">
            <v-col @click="addStep('greeting')"
              v-bind="attrs"
              v-on="on"        
            >
              <div>
                <v-icon color="white">
                  mdi-bullhorn-outline
                </v-icon>
                <p>Greetings</p>            
              </div>
            </v-col>
          </template>
          <span><b>Play a greeting to the caller.</b></br><b>Example:</b> Thank you for calling Acme. This call </br>may be recorded.</span>
        </v-tooltip>

        <v-col @click="addStep('dial')">
          <div>
            <v-icon color="white">
              mdi-phone-outgoing
              mdi-rotate-45
            </v-icon>        
            <p>Dial</p>            
          </div>
        </v-col>

        <v-col @click="addStep('menu')">
          <div>
            <v-icon color="white">
              mdi-dialpad
            </v-icon>                  
            <p>Menu</p>          
          </div>
        </v-col>
        <v-col @click="addStep('schedule')">
          <div>
            <v-icon color="white">
              mdi-calendar-month
            </v-icon>                            
            <p>Schedule</p>

          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col @click="addStep('numbers')">
          <div>
            <img
              v-bind:src="multiple_numubers_img"
              alt="Multiple Numbers"
              class="pt-5 pb-4"
            />
            <p>Multiple Numbers</p>            
          </div>
        </v-col>
        <v-col @click="addStep('round_robin')">
          <div>
            <img
              v-bind:src="round_robin_img"
              alt="Round Robin"
              class="pt-5 pb-4"
            />
            <p>Round Robin</p>            
          </div>
        </v-col>

        <v-col @click="addStep('agent_ivr')">
          <div>
            <img
              v-bind:src="agent_ivr_img"
              alt="Agent IVR"
              class="pt-5 pb-4"
            />
            <p>Agent IVR</p>            
          </div>
        </v-col>
        <v-col @click="addStep('send_sms')">
          <div>
            <img
              v-bind:src="send_sms_img"
              alt="Send SMS"
              class="pt-5 pb-4"
            />
            <p>Send SMS</p>            
          </div>
        </v-col>
      </v-row>



      <v-row>
        <v-col @click="addStep('add_to_list')">
          <div>
            <img
              v-bind:src="add_to_list_img"
              alt="Add to List"
              class="pt-5 pb-4"
            />
            <p>Add to List</p>            
          </div>
        </v-col>
        <v-col @click="addStep('tag_call')">
          <div>
            <img
              v-bind:src="tag_call_img"
              alt="Tag Call"
              class="pt-5 pb-4"
            />
            <p>Tag Call</p>            
          </div>
        </v-col>

        <v-col @click="addStep('voice_mail')">
          <div>
            <img
              v-bind:src="voice_mail_img"
              alt="Voicemail"
              class="pt-5 pb-4"
            />
            <p>Voicemail</p>            
          </div>
        </v-col>
        <v-col @click="addStep('hang_up')">
          <div>
            <v-icon color="white">
              mdi-phone-outgoing
              mdi-rotate-135
            </v-icon>        
            <p>Hang Up</p>            
          </div>
        </v-col>
      </v-row>     
                
  </div>


</template>

<script>
export default {
    name: 'FlowPanel',
    data () {
      return {
        multiple_numubers_img: require('@/assets/images/icons-callflow-big/multiple-big.png'),
        round_robin_img: require('@/assets/images/icons-callflow-big/round-robin-big.png'),
        agent_ivr_img: require('@/assets/images/icons-callflow-big/agent-ivr-big.png'),
        send_sms_img: require('@/assets/images/icons-callflow-big/sms-big.png'),
        add_to_list_img: require('@/assets/images/icons-callflow-big/opt-in-big.png'),
        tag_call_img: require('@/assets/images/icons-callflow-big/tag-big.png'),
        voice_mail_img: require('@/assets/images/icons-callflow-big/voicemail-big.png'),
      }      
    },    
    methods: {
      hideModal(){
        this.dialog = false; 
        this.$emit('hideModal');        
      },
      addStep(step){
        this.$emit('addStep', step);  
      }            
    }    
};
</script>
