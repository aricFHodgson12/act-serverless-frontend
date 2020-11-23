<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="650"
      content-class="custom_modal_body"
      overlay-color="#4A5263"
      overlay-opacity="0.9"
    >
      <v-card class="custom_modal">
        <v-card-title class="custom_modal__title">
          <span>
            Create New Auto Dialer Campaign
          </span>
          <v-icon @click="dialog=false">
            mdi-close
          </v-icon>
          
        </v-card-title>

        <v-card-text>
          <div class="custom_modal__tab">
            <div class="custom_modal__tab__item " v-bind:class="{ custom_modal__tab__active: active_tab == 1  }" @click="setActiveTab(1)">
              1. Basic Settings
            </div>
            <div class="custom_modal__tab__item" v-bind:class="{ custom_modal__tab__active: active_tab == 2  }" @click="setActiveTab(2)">
              2. Voicemail Message
            </div>            
            <div class="custom_modal__tab__item" v-bind:class="{ custom_modal__tab__active: active_tab == 3  }" @click="setActiveTab(3)">
              3. Call Script
            </div>                        
          </div>
          <div class="custom_modal__content">
            <div class="custom_modal__step_first" v-if="active_tab == 1">
              <h3 class="custom_modal__content__step">Step 1</h3>
              <h2 class="custom_modal__content__title">Basic Settings</h2>
              <div class="custom_modal__content__item">
                <div>
                  <template>
                    <v-form
                      ref="form"
                      v-model="valid"
                      lazy-validation
                      class="custom_modal__content__half_form"
                    >
                      <label class="custom_modal__content__label">Campaign Name:</label>
                      <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="E.g. Free Giveaway"
                        required
                        outlined
                        class="custom-input primary--text custom-input mt-3"
                        height="40px" 
                        elevation=2
                        single-line
                      ></v-text-field>

                      <label class="custom_modal__content__label">Use this number for calling:</label>

                      <div
                        v-for="(item, i) in tracking_numbers"
                        :key="i"
                      >
                        <v-select
                            outlined
                            dense
                            hide-details
                            :items="call_numbers"
                            v-model="tracking_numbers[i]"
                            item-text="name"
                            item-value="id"
                            class="mt-3"
                            lac
                        ></v-select>                        
                      </div>

                      <v-btn class="white--text button text-capitalize text-subtitle-2 mt-5" @click="tracking_numbers.push({})">+ Add New Tracking Number</v-btn>

                      <div class="mt-5">
                        <label class="custom_modal__content__label">Choose campaign's contact list:</label> 
                        <v-tooltip
                          top
                          color="white primary--text"
                          content-class="custom_tooltip"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              icon
                              v-bind="attrs"
                              v-on="on"
                            >
                              <v-icon class="button--text ml-1">mdi-18px mdi-help-circle-outline</v-icon>
                            </v-btn>
                          </template>
                          <span>The contact list contains all participants </br>of this campaign. Please, select contact</br> list that is not empty.</span>
                        </v-tooltip>

                        
                        <v-select
                            outlined
                            dense
                            hide-details
                            :items="contact_list"
                            v-model="contact"
                            placeholder="Select Contact List"
                            item-text="name"
                            item-value="id"
                            class="mt-3"
                        ></v-select>
                      </div>

                      <div>
                        <div class="d-flex align-center justify-start button--text">
                          <v-checkbox
                            v-model="ongoing"
                            color="primary"
                          ></v-checkbox>
                          <label class="font-weight-medium text-subtitle-1">Ongoing campaign</label>
                          <v-tooltip
                            top
                            color="white primary--text"
                            content-class="custom_tooltip"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                icon
                                v-bind="attrs"
                                v-on="on"
                              >
                                <v-icon class="button--text ml-1">mdi-18px mdi-help-circle-outline</v-icon>
                              </v-btn>
                            </template>
                            <span>In ongoing campaign new contacts</br> that will have been added to a contact </br> list will appear in the call queue.</span>
                          </v-tooltip>
                        </div>

                      </div>

                    </v-form>

                    <div class="text-right">
                      <v-btn class="white--text button text-capitalize text-subtitle-2 mt-5" @click="setActiveTab(2)">Next:Voicemail Message ></v-btn>
                    </div>                    
                  </template>

                </div>
              </div>
            </div>
            <div class="custom_modal__step_second" v-if="active_tab == 2">
              <h3 class="custom_modal__content__step">Step 2</h3>
              <h2 class="custom_modal__content__title">Voicemail Message</h2>
              <p class="button--text mt-3 font-weight-medium">Play this message to the customer when you're proposed to leave a voicemail.</p>
              <AudioTab />        
              <p>You can skip this step</p>
              <div class="d-flex justify-space-between align-center">
                <v-btn class="custom_button custom_border text-capitalize button--text text-subtitle-2 mt-5" @click="setActiveTab(1)">Back</v-btn>
                <v-btn class="white--text button text-capitalize text-subtitle-2 mt-5" @click="setActiveTab(3)">Next: Call Script ></v-btn>
              </div>
            </div>
            <div class="custom_modal__step_third" v-if="active_tab == 3">
              <h3 class="custom_modal__content__step">Step 3</h3>
              <h2 class="custom_modal__content__title">Call Script</h2>
              <p class="button--text mt-3 font-weight-medium">Write down what to tell to the customer in this campaign:</p>
              <div class="custom_modal__content__item">
                <div>
                  <v-textarea solo placeholder="Type your message here..." class="custom-text-area"></v-textarea>
                </div>
                <div>
                  <div class="d-flex align-center" style="width: 60%">
                    <h3 class="primary--text mr-2 font-weight-medium">Insert:</h3>
                    <v-select
                      :items="tokens"
                      :dense="true"
                      outlined
                      v-model="token"
                      class="custom_select_option button--text"
                      hegiht="10"
                      color="success"
                      placeholder="Choose Token"
                      hide-details
                    ></v-select>  
                    <v-tooltip
                      top
                      color="white primary--text"
                      content-class="custom_tooltip"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          icon
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon class="button--text ml-1">mdi-18px mdi-help-circle-outline</v-icon>
                        </v-btn>
                      </template>
                      <span>Tokens will be replaced with a </br> data from a contact list</span>
                    </v-tooltip>

                  </div>
                </div>
                <div class="d-flex justify-space-between align-center">
                  <v-btn class="custom_button custom_border text-capitalize button--text text-subtitle-2 mt-5" @click="setActiveTab(2)">Back</v-btn>
                  <v-btn class="white--text button text-capitalize text-subtitle-2 mt-5" @click="createNewCampaign">Create Campaign</v-btn>
                </div>

              </div>              
            </div>                        
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <!--v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions-->
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        token: 0,
        tracking_numbers:[{}],
        tokens: [
          {value: 1, text: 'First Name'},
          {value: 2, text: 'Last Name'},
          {value: 3, text: 'Email'},
          {value: 4, text: 'Phone Number'},
          {value: 5, text: 'Address'},
          {value: 6, text: 'City'},
          {value: 7, text: 'State'},
          {value: 8, text: 'Zip'},
          {value: 9, text: 'Website'},
        ],        
        active_tab: 1,
        ongoing: false,
        call_numbers: [
          {id: 1, name : '206-123-4567(Primary)'}
        ],
        contact_list: [
          {id: 1, name : 'Contact 1'}
        ],        
        contact: 1,
        number: 1,
        dialog: true,
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
        ],
        checkbox: false,

      }
    },
    watch: {
      dialog: function () {
        this.$emit('hideModal');  
      }
    },    
    methods: {
      createNewCampaign() {
        this.$router.push('/auto-dialer/create');
      },
      addtrackingNumber() {
        this.tracking_numbers.push({})
      },
      setActiveTab(tab) {
        this.active_tab = tab;
      },
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },

  }
</script>

<style lang="scss">
</style>