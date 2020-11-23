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
        title: "Calls by Keyword",
        campaign     : 1,
        interval     : 4,
        rejectedCalls: true,
        filter: true,

        campaigns: [{
                    name: 'Google',
                    data: [10, 3, 4, 7],
                    color: '#d28cbd'
                    

                }, {
                    name: 'Yahoo',
                    data: [0, 3, 8,  1],
                    color: '#ffba5a'
                    
                }, {
                    name: 'Referral',
                    data: [0, 3, 2, 1],
                    color:'#a78375'
                    
                },{
                    name: 'Direct',
                    data: [0,  8, 2, 1],
                    color:'#b9d581'
                },],

        intervals: [
            {id: 1, name: 'Today'},
            {id: 2, name: 'Yesterday'},
            {id: 3, name: 'Last 7 Days'},
            {id: 4, name: 'Last 7 Days + Today'},
            {id: 5, name: 'Last 30 Days'},
            {id: 6, name: 'Last Month'}
        ],
        categories: ['Paid', 'Organic', 'Referral', 'Direct']
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