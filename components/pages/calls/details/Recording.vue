<template>
    <v-card class="custom_border mt-5">
        <v-card-title class="primary--text"><v-icon class="primary--text mr-3" medium>mdi-microphone</v-icon>{{ $t('calls.details.recording.title') }}</v-card-title>
        <v-card-text>
            <v-row>
                <v-col lg=12>
                    <div class="text-center primary--text">
                        Call Recording is not a enabled for this tracking number
                    </div>
                </v-col>
            </v-row>

            <v-row>
                <v-col lg=12 class="text-center">
                    <v-btn class="primary white--text text-capitalize">Enable Call Recording</v-btn>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>

export default {

    methods: {

    },

    mounted () {
    }
};
</script>
