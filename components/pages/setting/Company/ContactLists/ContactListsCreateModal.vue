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
            <div>
              <template>
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                  <label class="custom_modal__content__label">Contact List Name:</label>
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="New Subscribers"
                    required
                    outlined
                    class="custom-input primary--text custom-input mt-3 blue_hover"
                    height="40px" 
                    elevation=2
                    single-line
                  ></v-text-field>
                  <div v-if="type=='create'" class="mt-5">
                    <v-btn class="white--text button text-capitalize text-subtitle-2 ">Create List</v-btn>
                  </div>
                  <div v-else class="d-flex align-center justify-start mt-5">
                    <v-btn class="white--text button text-capitalize text-subtitle-2">Save</v-btn>
                    <a href="#" @click="hideModal" class="ml-5 text-decoration-none">Cancel</a>
                  </div>
                </v-form>
              </template>
            </div>
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
        title: "",
        contact: 1,
        number: 1,
        dialog: true,
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],

      }
    },
    watch: {
      dialog: function () {
        this.$emit('hideModal');  
      }
    },    
    methods: {
      hideModal(){
        this.$emit('hideModal');   
      }
    },
    mounted(){

      if(this.type == "create"){
        this.title = "Create New Contact List"
      }
      else {
        this.title = "Edit Contact List" 
      }
    }

  }
</script>

<style lang="scss">
</style>