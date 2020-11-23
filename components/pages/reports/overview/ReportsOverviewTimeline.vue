<template>
    <div>
        <LineChartCard :intervals="intervals" :title="title" :campaign="campaign" :campaigns="campaigns" :interval="interval" :rejectedCalls="rejectedCalls" />
    </div>
</template>

<script>

import API      from '@/plugins/api';

export default {
    name : 'ReportsOverviewTimeline',

    components: {
        API
    },

    data: () => ({
        isLoading: false,
        title: "Reports Overview",
        campaign     : 1,
        interval     : 4,
        rejectedCalls: true,

        campaigns: [],

        intervals: [
            {id: 1, name: 'Today'},
            {id: 2, name: 'Yesterday'},
            {id: 3, name: 'Last 7 Days'},
            {id: 4, name: 'Last 7 Days + Today'},
            {id: 5, name: 'Last 30 Days'},
            {id: 6, name: 'Last Month'}
        ]
    }),

    methods: {
        getCampaigns () {
            this.isLoading = true;

            return API.campaigns.all()
                .then(r => this.campaigns = r)
                .finally(() => this.isLoading = false);
        },

    },

    mounted () {
        this.getCampaigns();
    }
};
</script>