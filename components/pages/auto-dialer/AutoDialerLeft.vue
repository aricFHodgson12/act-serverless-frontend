<template>
  <div>
    <div class="autodialer_filter pa-3 pt-8">
      <p class="grey_shades_5--text mb-1 mt-0">Filter contacts by their local time:</p>
      

      <template>
        <div class="text-center">
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            offset-x
            max-width="700"
          >
            <template v-slot:activator="{ on, attrs }">
              <p          
                v-bind="attrs"
                v-on="on"
                class="white--text pt-0 autodialer_filter__time">09:00 AM - 08:00 PM</p>
            </template>

            <v-card>
              <v-list class="pt-6 pb-6 pl-3 pr-3">
                <v-list-item>
                  <div>
                    <p>Only call to the contacts with the following local time:</p>
                    <div class="mt-3 timerange_area">
                      <span>From</span><TimeRange /><span>To</span><TimeRange />
                    </div>
                  </div>
                </v-list-item>

                <v-list-item>
                  <div>
                    <template>
                      <v-container
                        class="px-0"
                        fluid
                      >
                        <v-checkbox
                          color="blue"
                          v-model="localtime_checkbox"
                          class="custom_checkbox"
                          label="Call to the clients with the unknown local time"
                        ></v-checkbox>
                      </v-container>
                    </template>                    
                  </div>
                </v-list-item>

                <v-list-item>
                  <div>
                    <div class="d-flex align-center justify-start">
                      <v-btn max-width="120" class="white--text button text-capitalize text-subtitle-2 mr-3">Save Changes</v-btn>
                      <a class="button--text text-capitalize text-subtitle-2 ml-2" @click="menu = false">Cancel</a>                      
                    </div>
                  </div>
                </v-list-item>                

              </v-list>

            </v-card>
          </v-menu>
        </div>
      </template>

      <div class="mt-3 autodialer_filter__contacts"><span class="white--text">25 of 30</span><span class="grey_shades_5--text ml-2">contacts availalbe:</span></div>
    </div>    
    <div class="autodialer_contact pa-8">
      <h3>David Thompson</h3>
      <p>(843)-695-5295</p>
      <div class="text-center">
        <v-btn rounded class='button custom_border white--text pt-7 pb-7 text-capitalize' v-if="!call_status" @click="call_status=true"><v-icon>mdi-play</v-icon> Start Calling</v-btn>
        <v-btn rounded class='success custom_border autodialer_filter__calling white--text pt-7 pb-7 text-capitalize' v-if="call_status" @click="call_status=false"><v-icon class="mr-2">mdi-rotate-45 mdi-phone-in-talk</v-icon> 00:00:02</v-btn>
      </div>
      <div class="d-flex justify-center align-center mt-5">
        

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-icon class="grey_shades_5--text mr-5" v-bind="attrs" v-on="on" >mdi-microphone</v-icon>
          </template>
          <span>Turn off microphone</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-icon class="grey_shades_5--text ml-5" v-bind="attrs" v-on="on" >mdi-skip-next</v-icon>
          </template>
          <span>Go to the next contact</span>
        </v-tooltip>

        
      </div>
      <div class="text-center mt-8">
        <span class="grey_shades_5--text mr-3">Last Call:</span>
        <span class="success--text"><v-icon color="success" class="mr-3">mdi-18px mdi-circle</v-icon>Answered</span>
      </div>
    </div>

    <div class="autodialer_stats">
      <p class="grey_shades_5--text mb-1 mt-2">Campaign's Progress:</p>

      <div class="autodialer_stats__bar">
        <p>Completed Calls: 68 of 98</p>
        <div>
          <v-progress-linear value="75" color="graphs_3"></v-progress-linear>        
        </div>
        
      </div>

      <div class="autodialer_stats__bar">
        <p>Answered: 25</p>
        <div>
          <v-progress-linear value="25" color="graphs_11"></v-progress-linear>        
        </div>
      </div>      


      <div class="autodialer_stats__bar">
        <div class="d-flex align-center mb-2 justify-space-between">
          <p class="mb-0">No-answer: 18</p>
          
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on">mdi-rotate-270 mdi-18px mdi-replay</v-icon>
            </template>
            <span>Add contacts back to the call queue</span>
          </v-tooltip>          
        </div>
        <div>
          <v-progress-linear value="18" color="graphs_10"></v-progress-linear>        
        </div>
      </div>      


      <div class="autodialer_stats__bar">
        <div class="d-flex align-center mb-2 justify-space-between">
          <p class="mb-0">Busy: 13</p>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on">mdi-rotate-270 mdi-18px mdi-replay</v-icon>
            </template>
            <span>Add contacts back to the call queue</span>
          </v-tooltip>          

        </div>        
        <div>
          <v-progress-linear value="13" color="graphs_2"></v-progress-linear>        
        </div>
      </div>      


      <div class="autodialer_stats__bar">
        <p>Voicemail: 5</p>
        <div>
          <v-progress-linear value="5" color="graphs_1"></v-progress-linear>        
        </div>
      </div>    

      <div class="autodialer_stats__bar">
        <div class="d-flex align-center mb-2 justify-space-between">
          <p class="mb-0">Failed: 7</p>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on">mdi-rotate-270 mdi-18px mdi-replay</v-icon>
            </template>
            <span>Add contacts back to the call queue</span>
          </v-tooltip>          

        </div>        
        <div>
          <v-progress-linear value="7" color="grey_shades_5"></v-progress-linear>        
        </div>
      </div>          

    </div>

    <div class="autodialer_stats pb-10">
      <v-icon class="grey_shades_5--text">mdi-resistor</v-icon>
      <span class="grey_shades_5--text">Show Logs</span>
    </div>
  </div>

</template>

<script>
export default {
    name: 'AutoDialerLeft',

    data () {
        return {
          menu: false,
          localtime_checkbox: true,
          call_status: true
        };
    },
    computed: {
    },
    methods: {
    }
};
</script>
