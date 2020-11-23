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
            {{title}}
          </span>
          <v-icon @click="dialog=false">
            mdi-close
          </v-icon>
          
        </v-card-title>

        <v-card-text>
          <div class="custom_modal__content">
            <v-row>
              <v-col lg="12" xs="12">
                <template>
                  <v-form>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <label class="primary--text font-weight-medium text-subtitle-1">Phone Number: <span class="error--text">*</span></label>
                          <v-text-field
                            v-model="phone_number"
                            required
                            outlined
                            class="custom-input primary--text custom-input mt-3"
                            height="40px" 
                            elevation=2
                            single-line
                            hide-details
                            placeholder="123-456-7890"
                          ></v-text-field>
                        </v-col>

                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <label class="primary--text font-weight-medium text-subtitle-1">Busiess Name:</label>
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
                          <label class="primary--text font-weight-medium text-subtitle-1">First Name:</label>
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
                          <label class="primary--text font-weight-medium text-subtitle-1">Last Name:</label>
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
                          <label class="primary--text font-weight-medium text-subtitle-1">Email Address:</label>
                          <v-text-field
                            v-model="email_address"
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
                            <label class="primary--text font-weight-medium text-subtitle-1">Address:</label>
                            <v-text-field
                              v-model="address"
                              required
                              outlined
                              class="custom-input primary--text custom-input mt-3"
                              height="40px" 
                              elevation=2
                              placeholder="Apt, House, Str"
                              single-line
                              hide-details
                            ></v-text-field>
                          </v-col> 


                       <v-col
                          cols="12"
                          sm="6"
                        >
                          <label class="primary--text font-weight-medium text-subtitle-1">City:</label>
                          <v-text-field
                            v-model="city"
                            required
                            outlined
                            class="custom-input primary--text custom-input mt-3"
                            height="40px" 
                            elevation=2
                            placeholder="E.g. Canton"
                            single-line
                            hide-details
                          ></v-text-field>
                        </v-col>                


                       <v-col
                          cols="12"
                          sm="6"
                        >
                          <label class="primary--text font-weight-medium text-subtitle-1">State:</label>
                          <v-text-field
                            v-model="state"
                            required
                            outlined
                            class="custom-input primary--text custom-input mt-3"
                            height="40px" 
                            placeholder="E.g. OH"
                            elevation=2
                            single-line
                            hide-details
                          ></v-text-field>
                        </v-col>      

                       <v-col
                          cols="12"
                          sm="6"
                        >
                          <label class="primary--text font-weight-medium text-subtitle-1">Zip:</label>
                          <v-text-field
                            v-model="zip"
                            required
                            outlined
                            class="custom-input primary--text custom-input mt-3"
                            height="40px" 
                            elevation=2
                            single-line
                            placeholder="12345-67"
                            hide-details
                          ></v-text-field>
                        </v-col>                                     

                       <v-col
                          cols="12"
                          sm="6"
                        >
                          <label class="primary--text font-weight-medium text-subtitle-1">Web Site:</label>
                          <v-text-field
                            v-model="website"
                            required
                            outlined
                            class="custom-input primary--text custom-input mt-3"
                            height="40px" 
                            elevation=2
                            single-line
                            placeholder='yoursite.com'
                            hide-details
                          ></v-text-field>
                        </v-col>                                      

                      </v-row>
                      <v-row>
                        <v-col lg="12">
                          <v-btn class="custom_border custom_button white--text text-subtitle-2 " v-bind:class="{ 'grey_shades_5': !valid, 'primary' : valid }" depressed>Add Contact</v-btn>            
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </template>

              </v-col>
            </v-row>
            </div>
        </v-card-text>

        <v-divider></v-divider>

        <!--v-card-actions>
          <v-spacer></v-spacer>
          <v-bcolortn
            ="primary"
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
    props: {
      type: String
    },    
    data () {
      return {
        name: "",
        dialog: true,
        title: "Add New Contact",
        contact: 1,
        number: 1,
        dialog: true,
        valid: true,
        contacts: [
          {id: 1, name: "Contact 1"}
        ],
        contact: 0,
        phone_number: "",
        business_name: "",
        first_name: "",
        last_name: "",
        email_address: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        website: "",
        valid: false

      }
    },
    watch: {
      dialog: function () {
        this.$emit('hideModal', 'new');  
      },
      phone_number: function () {
        this.checkValid();
      },
      business_name: function () {
        this.checkValid();
      },
      first_name: function () {
        this.checkValid();
      },
      last_name: function () {
        this.checkValid();
      },
      email_address: function () {
        this.checkValid();
      },
      address: function () {
        this.checkValid();
      },
      city: function () {
        this.checkValid();
      },
      state: function () {
        this.checkValid();
      },
      zip: function () {
        this.checkValid();
      },   
      website: function () {
        this.checkValid();
      },                                                      
    },    
    methods: {
      hideModal(){
        this.$emit('hideModal','copy');   
      },
      checkValid(){
        if(this.phone_number && this.business_name && this.first_name && this.last_name && this.email_address && this.address && this.city && this.state && this.zip && this.website) {
          this.valid = true;

        }
        else {
          this.valid = false;
        }
      }
    },
    mounted(){

    }

  }
</script>

<style lang="scss">
</style>