<template>
    <v-card class="custom_border">
        <v-card-title class="primary--text d-flex justify-space-between">
            <span>{{ calls.length || '0' }} Calls</span>
            <v-btn class="white--text button text-capitalize text-subtitle-2"><v-icon>mdi-download</v-icon>Download CSV</v-btn>
        </v-card-title>

        <v-card-text>
            <v-data-table
                :loading="isLoading"
                :headers="headers"
                :items="calls"
                :items-per-page="5"
            >
                <v-progress-linear
                    slot="progress"
                    color="primary"
                    height="3"
                    indeterminate>
                </v-progress-linear>

                <template v-slot:item.source="{ item }">
                    {{ item.source }}
                </template>

                <template v-slot:item.total_calls="{ item }">
                    {{ item.total_calls }}
                </template>

                <template v-slot:item.percent_value="{ item }">
                    {{ item.percent_value }}
                </template>

                <template v-slot:item.new_calls="{ item }">
                    {{ item.new_calls }}
                </template>                

                <template v-slot:item.repeated_calls="{ item }">
                    {{ item.repeated_calls }}
                </template>                

                <template v-slot:item.avg_duration="{ item }">
                    {{ item.avg_duration }}
                </template>                                                

            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
import API      from '@/plugins/api';

export default {
    name: 'Calls',

    components: {
        API
    },

    data: () => ({
        isLoading: false,

        headers: [
            {text: 'Source', value: 'source'},
            {text: 'Total Calls', value: 'total_calls'},
            {text: 'Percent Value, %', value: 'percent_value'},
            {text: 'New Calls', value: 'new_calls'},
            {text: 'Repeated Calls', value: 'repeated_calls'},
            {text: 'Avg Duration, s', value: 'avg_duration'}
        ],

        calls: []
    }),

    methods: {

        getCalls () {
            this.isLoading = true;

            return API.list.all()
                .then(r => this.calls = r)
                .finally(() => this.isLoading = false);
        },

    },
    watch: {
        calls: function () {
            console.log(this.calls);
        }
    },
    mounted () {
        this.getCalls();
    }
};
</script>
