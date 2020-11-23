<template>    
  <div>
      <h3 class="primary--text font-weight-medium pl-2 text-h6">New Call Flow</h3>
      <div class="text-left call_flow_steps">

        <div class="call_flow_step">
          <span class="button circle_background flow_icon">
            <v-icon class="white--text">
              mdi-phone-settings
              mdi-rotate-45
            </v-icon>            
          </span>
          <div class="flow_content">
            <h3 class="primary--text text-h6 flow_content_title">Start Call</h3>
            <p class="pb-0 mb-0 text-subtitle-1  primary--text flow_content_desc">A caller dials this tracking number then...</p>
          </div>
        </div>

        <div class="call_flow_step">
          <span class="button circle_background flow_icon">
            <v-icon class="white--text">
              mdi-microphone
            </v-icon>            
          </span>
          <div class="flow_content d-flex align-center">
            <span class="primary--text mr-5">Record Calls</span>
            <v-switch
              v-model="switch1"
              inset
              color="green"
            ></v-switch>            
          </div>
        </div>  

        <div class="call_flow_step" v-for="(item, index) of steps" :key="index">
          <span class="button circle_background_image flow_icon" v-if="item=='greeting'">
            <img
              v-bind:src="greetings_img"
              alt="Greeting"
            />            
          </span>
          <div class="flow_content">
            <CompanyManageCallFlowsGreeting :step="index" v-on:deleteStep="cancelStep" v-on:addStep="addStep" v-if="item=='greeting'"/>
          </div>


          <span class="button circle_background flow_icon" v-if="item=='dial'">
            <v-icon class="white--text">
              mdi-phone-outgoing
              mdi-rotate-45

            </v-icon>   
          </span>
          <div class="flow_content">
            <CompanyManageCallFlowsDial v-on:cancelPad="cancelStep" v-on:deleteStep="cancelStep"  v-if="item=='dial'"  v-on:addStep="addStep"/>
          </div>

          <span class="button circle_background flow_icon" v-if="item=='menu'">
            <v-icon class="white--text">
              mdi-dialpad
            </v-icon>   
          </span>
          <div class="flow_content">
            <CompanyManageCallFlowsMenu v-on:cancelPad="cancelStep" v-on:deleteStep="cancelStep"  v-if="item=='menu'"  v-on:addStep="addStep"/>
          </div>

          <span class="button circle_background flow_icon" v-if="item=='schedule'">
            <v-icon class="white--text">
              mdi-calendar-month
            </v-icon>   
          </span>
          <div class="flow_content">
            <CompanyManageCallFlowsSchedule v-on:cancelPad="cancelStep"  v-on:deleteStep="cancelStep"  v-if="item=='schedule'"  v-on:addStep="addStep"/>
          </div>

          <span class="button circle_background_image flow_icon" v-if="item=='numbers'">
            <img
              v-bind:src="multiple_numubers_img"
              alt="Multiple Numbers"
            />            
          </span>
          <div class="flow_content">
            <CompanyManageCallFlowsMultipleNumbers v-on:cancelPad="cancelStep" v-on:deleteStep="cancelStep"  v-if="item=='numbers'"  v-on:addStep="addStep"/>
          </div>          

          <span class="button circle_background_image flow_icon" v-if="item=='round_robin'">
            <img
              v-bind:src="round_robin_img"
              alt="Round Robin"
            />            
          </span>

          <div class="flow_content">
            <CompanyManageCallFlowsRoundRobin v-on:cancelPad="cancelStep" v-on:deleteStep="cancelStep"  v-if="item=='round_robin'"  v-on:addStep="addStep"/>
          </div>                    

          <span class="button circle_background_image flow_icon" v-if="item=='agent_ivr'">
            <img
              v-bind:src="agent_ivr_img"
              alt="Round Robin"
            />            
          </span>          
          <div class="flow_content">
            <CompanyManageCallFlowsAgentIvr v-on:cancelPad="cancelStep" v-on:deleteStep="cancelStep"  v-if="item=='agent_ivr'"  v-on:addStep="addStep"/>
          </div>                              

          <span class="button circle_background_image flow_icon" v-if="item=='send_sms'">
            <img
              v-bind:src="send_sms_img"
              alt="Send SMS"
            />            
          </span>
          <div class="flow_content">
            <CompanyManageCallFlowsSms v-on:cancelPad="cancelStep" v-on:deleteStep="cancelStep"  v-if="item=='send_sms'"  v-on:addStep="addStep"/>
          </div>                              


          <span class="button circle_background_image flow_icon" v-if="item=='add_to_list'">
            <img
              v-bind:src="add_to_list_img"
              alt="Add to List"
            />            
          </span>          
          <div class="flow_content">
            <CompanyManageCallFlowsAddToList v-on:cancelPad="cancelStep" v-on:deleteStep="cancelStep"  v-if="item=='add_to_list'"  v-on:addStep="addStep"/>
          </div>                              


          <span class="button circle_background_image flow_icon" v-if="item=='tag_call'">
            <img
              v-bind:src="tag_call_img"
              alt="Tag Call"
            />            
          </span>           
          <div class="flow_content">
            <CompanyManageCallFlowsTagCall v-on:cancelPad="cancelStep" v-on:deleteStep="cancelStep"  v-if="item=='tag_call'"  v-on:addStep="addStep"/>
          </div>                              

          <span class="button circle_background_image flow_icon" v-if="item=='voice_mail'">
            <img
              v-bind:src="voice_mail_img"
              alt="Voice Mail"
              class="mb-0"
            />            
          </span>            
          <div class="flow_content">
            <CompanyManageCallFlowsVoiceMail v-on:cancelPad="cancelStep" v-on:deleteStep="cancelStep"  v-if="item=='voice_mail'"  v-on:addStep="addStep"/>
          </div>                              

          <span class="button circle_background flow_icon" v-if="item=='hang_up'">
            <v-icon class="white--text">
              mdi-phone-outgoing
              mdi-rotate-135
            </v-icon>   
          </span>
          <div class="flow_content">
            <CompanyManageCallFlowsHangup v-on:cancelPad="cancelStep" v-on:deleteStep="cancelStep"  v-if="item=='hang_up'"  v-on:addStep="addStep"/>
          </div>

        </div>               


        <div class="call_flow_step">
          <span class="blue circle_background flow_icon">
            <v-icon class="white--text">
              mdi-plus
            </v-icon>   
          </span>
          <div class="flow_content">
            <CompanyManageCallFlowsPanel v-on:addStep="addStep" />
          </div>
        </div>                
      </div>          
  </div>
</template>

<script>
  export default {
    name: 'CompanyManageCallFlows',
    props: {
    },
    data: () => ({
      switch1: false,
      greeting: false,
      dial: false,
      menu: false,
      schedule: false,
      steps: [],
      greetings_img: require('@/assets/images/icons-callflow-small/greetings-small.png'),
      multiple_numubers_img: require('@/assets/images/icons-callflow-big/multiple-big.png'),
      round_robin_img: require('@/assets/images/icons-callflow-big/round-robin-big.png'),
      agent_ivr_img: require('@/assets/images/icons-callflow-big/agent-ivr-big.png'),
      send_sms_img: require('@/assets/images/icons-callflow-big/sms-big.png'),
      add_to_list_img: require('@/assets/images/icons-callflow-big/opt-in-big.png'),
      tag_call_img: require('@/assets/images/icons-callflow-big/tag-big.png'),
      voice_mail_img: require('@/assets/images/icons-callflow-big/voicemail-big.png'),      
    }),
    mounted () {
    },    
    watch: {
    },       
    methods: {
      addStep(step){
        console.log(step);
        this.steps.push(step);
      },
      cancelStep(step) {
        this.steps.splice(step, 1)
        // switch(step) {
        //   case "greeting":
        //     this.greeting = false;
        //   break;
        //   case "dial":
        //     this.dial = false;
        //   break;
        //   case "menu":
        //     this.menu = false;
        //   break;                    
        //   case "schedule":
        //     this.schedule = false;
        //   break;                              
        // }        

      }

    },    
    computed: {
    },
  }
</script>
