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
              <v-col lg="7" xs="12">
                <template>
                  <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                    <label class="custom_modal__content__label">Copy contacts from the existing contact list:</label>
                    <v-select
                      :items="contacts"
                      :dense="true"
                      outlined
                      v-model="contact"
                      class="custom_select_option mt-3"
                      hegiht="10"
                      placeholder="Select List"
                      hide-details
                      item-value="id"
                      item-text="name"
                    ></v-select>                    

                    <div class="mt-5">
                      <v-btn class="white--text button text-capitalize text-subtitle-2 ">Copy Contacts</v-btn>
                    </div>
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
        title: "Copy Contacts From List...",
        contact: 1,
        number: 1,
        dialog: true,
        valid: true,
        contacts: [
          {id: 1, name: "Contact 1"}
        ],
        contact: 0,

      }
    },
    watch: {
      dialog: function () {
        this.$emit('hideModal', 'copy');  
      }
    },    
    methods: {
      hideModal(){
        this.$emit('hideModal','copy');   
      }
    },
    mounted(){

    }

  }
</script>

<style lang="scss">
</style>