<template>
    <v-row>
        <v-col class="pt-0 pb-0">
            <div>
                <h5 class="mt-0 primary--text text-14 font-weight-medium">Enter the URL to an MP3 file:</h5>
                <div class="mt-3">
                    <v-text-field outlined hide-details class="primary--text blue_hover custom-input mb-5" v-model="audio_url" height="40px" elevation=2></v-text-field>
                    <v-btn
                      color="button"
                      class="white--text text-capitalize text-14"
                    >
                      <v-icon left>
                        mdi-volume-high
                      </v-icon>
                      Test
                    </v-btn>                    
                </div>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'EnterAudioUrl',

    props: {
    },

    data () {
        return {
            audio_url: "http://dropbox.com/oiwerjbvsd/audio_greetings.mp3"
        };
    },
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