<template>
  <div class="pa-6">
    <div class="flex">
      <h2 class="primary--text">New Auto Dialer Campaign</h2>
      <div>
        <v-btn 
        class="custom_border custom_button grey_shades_6--text"
        depressed>
          <v-icon class="mr-2">mdi-pencil</v-icon> Edit Campaign
        </v-btn>
        <v-btn class="white--text button text-capitalize text-subtitle-2"><v-icon>mdi-chevron-left</v-icon> Back to All Campaigns</v-btn>
      </div>
    </div>

    <div class="flex mt-5">

      <div class="autodialer_contact_campaign_left">
        <div class="custom_border autodialer_contact_details">
          <v-row>
            <v-col><h3 class="primary--text">Contact Details</h3></v-col>
            <v-col><span class="grey_shades_5--text">Contact's current time:</span><span class="primary--text">10:35 AM</span></v-col>
          </v-row>
          <template>
            <v-form>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <label class="primary--text"><span>*</span>Phone Number:</label>
                    <v-text-field
                      v-model="phone_number"
                      required
                      outlined
                      class="custom-input primary--text custom-input mt-3"
                      height="40px" 
                      elevation=2
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <label class="primary--text">Email:</label>
                    <v-text-field
                      v-model="email"
                      required
                      outlined
                      class="custom-input primary--text custom-input mt-3"
                      height="40px" 
                      elevation=2
                      placeholder="example@mail.com"
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <label class="primary--text">First Name:</label>
                    <v-text-field
                      v-model="first_name"
                      required
                      outlined
                      class="custom-input primary--text custom-input mt-3"
                      height="40px" 
                      elevation=2
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <label class="primary--text">Last Name:</label>
                    <v-text-field
                      v-model="last_name"
                      required
                      outlined
                      class="custom-input primary--text custom-input mt-3"
                      height="40px" 
                      elevation=2
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-col>

                 <v-col
                    cols="12"
                    sm="6"
                  >
                    <label class="primary--text">City:</label>
                    <v-text-field
                      v-model="city"
                      required
                      outlined
                      class="custom-input primary--text custom-input mt-3"
                      height="40px" 
                      elevation=2
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-col>                


                 <v-col
                    cols="12"
                    sm="6"
                  >
                    <label class="primary--text">State:</label>
                    <v-text-field
                      v-model="state"
                      required
                      outlined
                      class="custom-input primary--text custom-input mt-3"
                      height="40px" 
                      elevation=2
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-col>      


                 <v-col
                    cols="12"
                    sm="6"
                  >
                    <label class="primary--text">Address:</label>
                    <v-text-field
                      v-model="address"
                      required
                      outlined
                      class="custom-input primary--text custom-input mt-3"
                      height="40px" 
                      elevation=2
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-col> 


                 <v-col
                    cols="12"
                    sm="6"
                  >
                    <label class="primary--text">Zip:</label>
                    <v-text-field
                      v-model="zip"
                      required
                      outlined
                      class="custom-input primary--text custom-input mt-3"
                      height="40px" 
                      elevation=2
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-col>                 

                 <v-col
                    cols="12"
                    sm="6"
                  >
                    <label class="primary--text">Business Name:</label>
                    <v-text-field
                      v-model="business_name"
                      required
                      outlined
                      class="custom-input primary--text custom-input mt-3"
                      height="40px" 
                      elevation=2
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-col>                      

                 <v-col
                    cols="12"
                    sm="6"
                  >
                    <label class="primary--text">Web Site:</label>
                    <v-text-field
                      v-model="website"
                      required
                      outlined
                      class="custom-input primary--text custom-input mt-3"
                      height="40px" 
                      elevation=2
                      single-line
                      placeholder='www.example.com'
                      hide-details
                    ></v-text-field>
                  </v-col>                                      

                </v-row>
              </v-container>
            </v-form>
          </template>

        </div>

        <div class="autodialer_contact_tags custom_border">
          <v-row>
            <v-col><h3 class="primary--text">Tags</h3></v-col>
            <v-col class="text-right"><span class="primary--text">Manage Tags</span></v-col>
          </v-row>
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
            <v-col>
              <v-autocomplete
                v-model="option"
                :items="options"
                elevation=2
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

      </div>

      <div class="autodialer_contact_campaign_right">
        <div class="autodialer_contact_call_script custom_border">
          <v-row>
            <v-col><h3 class="primary--text">Call Script</h3></v-col>
            <v-col class="grey_shades_6--text text-right"><v-icon color="grey_shades_5">mdi-pencil</v-icon><span class="grey_shades_5--text ml-2">Edit Script</span></v-col>
          </v-row>

          <v-row>
            <v-col>
              <p class="primary--text">
                Hello, this is lorem ipum dolor sit amet, consectetur adpisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commado consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

              <div class="text-center">
                <v-btn class="custom_border custom_button white--text text-subtitle-2 grey_shades_5" depressed><v-icon>mdi-play</v-icon>Play Voicemail Message to the Customer</v-btn>            
              </div>

              <div class="text-center mt-5">
                <span class="mt-5 grey_shades_5--text">Voicemail: Upload Audio</span><span class="ml-2 mr-2 mt-5 grey_shades_5--text">|</span><span class="mt-5 grey_shades_5--text autodialer_contact_call_script__notes">Edit</span>
              </div>

              
            </v-col>
          </v-row>
        </div>

        <div class="autodialer_contact_notes custom_border">
          <v-row>
            <v-col><h3 class="primary--text">Notes</h3></v-col>
          </v-row>          
          <v-row>
            <v-col>
              <v-textarea solo placeholder="Add Note" class="custom-text-area blue_hover"></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn class="white--text button text-capitalize text-subtitle-2" depressed>Add</v-btn>
              <span class="ml-4 primary--text">Cancel</span>
            </v-col>
          </v-row>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
    name: 'AutoDialerRight',

    data () {
        return {
          options: [
            {value: 1, text: 'new lead'},
            {value: 2, text: 'call later'},
            {value: 3, text: 'compliant'},
            {value: 4, text: 'sale'},
            {value: 5, text: 'product 1'},
            {value: 6, text: 'product 2'}
          ],
          option: 1,
          selecteOptions: [],   
          phone_number: "(843)-695-5295",
          email: "",
          first_name: "David",
          last_name: "Thompson",
          city: "Canton",
          state: "OH",
          address: "",
          zip: "",
          business_name: "",
          website: ""
        };
    },
    computed: {
    },
    methods: {
      selectTag(){
        this.selecteOptions.push({name: this.option});
      }    
    }
};
</script>