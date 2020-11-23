<template>
    <v-card class="custom_border mt-5">
        <v-card-title class="primary--text"><v-icon class="primary--text mr-3" medium>mdi-microphone</v-icon>{{ $t('calls.details.recording.title') }}</v-card-title>
        <v-card-text>
            <v-row>
                <v-col lg=12>
                    <div class="primary--text">
                        Place a call from 123-456-7890 (Google AdWords) to 206-123-4567
                    </div>
                </v-col>
            </v-row>

            <v-row>
                <v-col lg=12>
                    <v-btn class="primary white--text text-capitalize">Call 206-123-4567</v-btn>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>

export default {

    data: () => ({
        date: 'Fri 11/21 2014 at 5:15 PM',
        tracking: '123-456-7890 (Google AdWords)',
        agent: 'David Howell',
        duration: '00:01:45'
    }),

    methods: {

    },

    mounted () {
    }
};
</script>
