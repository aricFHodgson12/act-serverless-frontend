<template>
    <div>
        <BarChartCard :intervals="intervals" :title="title" :filter="filter" :campaign="campaign" :campaigns="campaigns" :categories="categories" :interval="interval" :rejectedCalls="rejectedCalls" :legend="legend"/>
    </div>

</template>

<script>

import API      from '@/plugins/api';

export default {
    name : 'ReportsTagCalls',

    components: {
        API
    },

    data: () => ({
        isLoading: false,
        legend: false,
        title: "Calls by Tag",
        campaign     : 1,
        interval     : 4,
        rejectedCalls: true,
        filter: true,

        campaigns:[{
            name: 'Calls by Tag',
            color: '#637591',
            data: [49.9, 21.5, 20.4, 32.2, 25.0, 40.0]

        }],

        intervals: [
            {id: 1, name: 'Today'},
            {id: 2, name: 'Yesterday'},
            {id: 3, name: 'Last 7 Days'},
            {id: 4, name: 'Last 7 Days + Today'},
            {id: 5, name: 'Last 30 Days'},
            {id: 6, name: 'Last Month'}
        ],
        categories: ['No Tag', 'billable', 'new lead', 'complaint', 'sale', 'support']
    }),

    methods: {
        // getCampaigns () {
        //     this.isLoading = true;

        //     return API.campaigns.all()
        //         .then(r => this.campaigns = r)
        //         .finally(() => this.isLoading = false);
        // },

    },

    mounted () {
        // this.getCampaigns();
    }
};
</script>