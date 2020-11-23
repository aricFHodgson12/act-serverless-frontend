<template>
    <div>
        <BarChartCard :intervals="intervals" :title="title" :filter="filter" :campaign="campaign" :campaigns="campaigns" :categories="categories" :interval="interval" :rejectedCalls="rejectedCalls" />
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
        title: "Calls by Agent",
        campaign     : 1,
        interval     : 4,
        rejectedCalls: true,
        filter: true,

        campaigns: [{
                    name: 'New Calls',
                    data: [15, 3, 4, 7, 2],
                    color: '#78d8de'
                }, {
                    name: 'Repeated Calls',
                    data: [10, 3, 8, 2, 1],
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
        categories: ['No Agent', 'Mike Terry', 'Landon Harvey', 'Marion White', 'Melvin Riley']
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