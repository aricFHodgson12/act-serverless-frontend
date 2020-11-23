<template>
    <v-row>
        <v-col class="pt-0">
            <div>
                <h5 class="mt-0 primary--text text-14 font-weight-medium">Play the following recording to the caller:</h5>
                <div>
                    <div class="text-center mt-10">
                        <p class="text-subtitle-2 mb-2 button--text"> No file chosen...</p>
                        <v-btn class="button white--text text-body-2 text-capitalize">Select an MP3 File</v-btn>
                        <input id="file_uploader" type="file" hidden/>                         
                    </div>
                </div>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'AudioFileUpload',

    props: {
    },

    data () {
        return {
            src: ""
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