<template>
    <v-row>
        <v-col class="pt-0 pb-0">
            <div>
                <h5 class="mt-0 primary--text text-14 font-weight-medium">Let systel call you and record your voice:</h5>
                <v-row no-gutters class="mt-3">
                  <v-col class="pr-3">
                    <p class="primary--text font-weight-medium text-14 mb-3">Call from:</p>
                    <v-select
                    :items="calls"
                    :dense="true"
                    outlined
                    v-model="call"
                    class="custom_select_option"
                    hegiht="10"
                    ></v-select>
                  </v-col>
                  <v-col class="pr-3">
                    <p class="primary--text font-weight-medium text-14 mb-3">Your Phone Number:</p>
                    <v-text-field outlined hide-details class="primary--text blue_hover custom-input" v-model="number" height="40px" elevation=2></v-text-field>
                  </v-col>
                  <v-col class="d-flex align-center justify-start">
                    <v-btn
                      color="grey_shades_5"
                      v-if="callStep==1"
                      @click="callStep=2"
                      class="white--text text-capitalize text-14 mt-1 pl-8 pr-8"
                    >
                    Call Me
                    </v-btn>  

                    <v-btn
                      v-else-if="callStep==2"
                      @click="callStep=3"
                      color="success"
                      class="white--text text-capitalize text-14 mt-1 pl-8 pr-8"
                    >
                    Calling...
                    </v-btn>  
                    <v-btn
                      v-else
                      color="error"
                      class="white--text text-capitalize text-14 mt-1 pl-8 pr-8"
                    >
                    Stop
                    </v-btn>                                                              
                  </v-col>
                </v-row>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'RecordAudio',

    props: {
    },

    data: () => ({
      calls: [
        {value: 0, text: 'Select Number'}
      ],
      callStep: 1,
      number: '',
      call: 0
    }),
    computed: {
        
    },
    methods: {
    }
};
</script>

<style>  
    .file_upload_area {
        position: relative;
    }
    .uploader-note {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        text-align: center;
    }
</style>