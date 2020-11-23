<template>
    <v-row>
        <v-col class="text-center call-table">
            <v-icon>mdi-play</v-icon>

            <vuetify-audio
                :file="file"
                color="blue"
                class="player"
                :class="{'disabled': !file}"
                flat
            ></vuetify-audio>                    
        </v-col>
    </v-row>

</template>

<script>
export default {
    name: 'AudioFile',

    props: {file: String},

    components: {
        VuetifyAudio: () => require('vuetify-audio')
    }
};
</script>

<style lang="scss">
.player {
    background-color: transparent !important;
    padding:          0 !important;

    .v-btn--icon.v-size--default {
        height: 22px !important;
        width:  22px !important;
    }

    .v-btn {
        .v-icon {
            font-size: 16px !important;
        }

        &:nth-child(4) {
            display: none !important;
        }
    }

    .v-progress-linear {
        margin-top:    0 !important;
        margin-bottom: 0 !important;
    }

    p {
        display: none;
    }

    &.disabled {
        .v-progress-linear__background {
            background-color: rgba(0, 0, 0, 0.4)!important;
        }
    }
}
</style>