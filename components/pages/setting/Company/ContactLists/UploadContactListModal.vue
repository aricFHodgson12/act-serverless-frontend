<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="680"
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
          <div class="custom_modal__content pa-6">
            <v-row>
              <v-col lg="12" xs="12">
                <div>
                  <v-btn class="white--text button text-capitalize text-subtitle-2"><v-icon>mdi-download</v-icon>Download CSV Template</v-btn>
                </div>
                <div>
                  <p class="button--text font-weight-medium mt-3 text-subtitle-1">Contacts data Format & Order</p>
                  <p class="button--text font-weight-medium mt-2 text-body-1">Phone Number, Business Name, First Name, Last Name, Email Address, Address, City, State, Zip, Web site.</p>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="custom_border pa-5">
                  <v-row>
                    <v-col lg="8">
                      <v-btn class="white--text button text-capitalize text-subtitle-2" @click="runUploader">Choose File</v-btn>
                      <input id="file_uploader" type="file" ref="file" @change="onFileChange" hidden/> 
                      <span class="ml-3 button--text">{{filename}}</span>
                    </v-col>
                    <v-col lg="4" class="text-right">
                      <v-btn class="button--text custom_white custom_border text-capitalize text-subtitle-2">Preview</v-btn>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col lg="12" class="pt-0">
                      <p class="mb-0">In CSV file, skip the 1st row and start putting data from 2nd row. You can use the first row for labeling the columns. First row of CSV file will be ignored by system.</p>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col lg="12" xs="12">
                <div>
                  <v-btn class="white--text button text-capitalize text-subtitle-2"><v-icon>mdi-upload</v-icon>Upload Contacts</v-btn>
                </div>
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
        filename: "",
        dialog: true,
        title: "Upload Contacts From CSV File",
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
        this.$emit('hideModal', 'upload');  
      }
    },    
    methods: {
      hideModal(){
        this.$emit('hideModal','upload');   
      },
      runUploader() {
          this.$refs.file.click();
      },
      async onFileChange() {
          const that = this;
          const files = this.$refs.file.files;
          this.filename = files[0].name;
      }
    },
    mounted(){

    }

  }
</script>

<style lang="scss">
</style>