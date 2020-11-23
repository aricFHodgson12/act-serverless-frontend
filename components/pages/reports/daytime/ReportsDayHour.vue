<template>
    <div>
        <BarChartCard :intervals="intervals" :filter="filter" :subTitle="subTitle" :campaign="campaign" :campaigns="campaigns" :categories="categories" :interval="interval" :rejectedCalls="rejectedCalls" />
    </div>
    
</template>

<script>

import API      from '@/plugins/api';

export default {
    name : 'ReportsSourceCalls',

    components: {
        API
    },

    data: () => ({
        isLoading: false,
        campaign     : 1,
        interval     : 4,
        rejectedCalls: true,
        filter: false,
        subTitle: "Calls by Hour of Day",
        campaigns: [{
            name: 'New Calls',
            data: [5, 3, 4, 7, 2],
            stack: 'male',
            color: '#78d8de'
        }, {
            name: 'Repeated Calls',
            data: [3, 4, 4, 2, 5],
            stack: 'male',
            color: '#637591'
        }],

        intervals: [
            {id: 1, name: 'Today'},
            {id: 2, name: 'Yesterday'},
            {id: 3, name: 'Last 7 Days'},
            {id: 4, name: 'Last 7 Days + Today'},
            {id: 5, name: 'Last 30 Days'},
            {id: 6, name: 'Last Month'}
        ],
        categories: ['12 AM', '2 AM', '4 AM', '6 AM', '8 AM','10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM']
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