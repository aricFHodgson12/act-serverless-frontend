<template>
    <v-row>
        <v-col>
            <div class="custom_dot_border file_upload_area d-flex align-center justify-center">
                <div>
                    <v-btn class="primary text-body-2 text-capitalize" @click="runUploader()">{{btnName}}</v-btn>
                    <p class="text-caption uploader-note">{{ $t('uploader.desc') }}<p/>
                    <input id="file_uploader" type="file" ref="file" @change="onFileChange" hidden/> 
                </div>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'FileUpload',

    props: {
        btnName: String,
    },

    computed: {
        
    },
    methods: {
        runUploader() {
            this.$refs.file.click();
        },

        async onFileChange() {
            const that = this;
            const files = this.$refs.file.files;

            if (!files || files.length === 0 || !['image/jpeg', 'image/png'].includes(files[0].type)) {
                return;
            }

            const reader = new FileReader();

            reader.onload = (event) => {
                that.$emit('fileChanged', event.target.result, files[0]);
            }

            reader.readAsDataURL(files[0]);
        }
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
