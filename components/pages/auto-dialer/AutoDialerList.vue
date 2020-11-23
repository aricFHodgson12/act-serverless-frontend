<template>
    <div>
        <v-row>
            <v-col cols="12">
                <div class="d-flex align-center justify-space-between">
                    <h2 class="primary--text">{{ $t('auto_dialer.title') }}</h2>
                    <v-col xs="12" md="2" offset-md="4" class="d-flex justify-end pr-0 pt-4 pb-4" v-if="campaigns.length > 0">
                        <v-btn class="white--text button text-capitalize text-subtitle-2 ml-3 v-btn v-btn--contained theme--light v-size--default" @click="newCampaign=true">+ Add New Campaign</v-btn>
                    </v-col>                    
                </div>            
            </v-col>

            <v-col v-if="campaigns.length > 0">
                <v-card class="custom_border">
                    <v-card-title class="primary--text font-weight-bold">{{ campaigns.length || '0' }} Campaigns</v-card-title>
                    <v-card-text class="pa-6">
                        <v-data-table
                            :loading="isLoading"
                            :headers="headers"
                            :items="campaigns"
                            :search="search"
                            :items-per-page="20"
                            fixed-header
                            item-class="fixed_col"
                            v-columns-resizable
                            :hide-default-footer="pagination"
                        >
                            <v-progress-linear
                                slot="progress"
                                color="primary"
                                height="3"
                                indeterminate>
                            </v-progress-linear>
                        
                            <template v-slot:item.name="{ item }">
                                <nuxt-link class="blue--text font-weight-medium text-decoration-none" to="/auto-dialer/create">{{ item.name }}</nuxt-link>
                            </template> 
                                            
                            <template v-slot:item.contact_list="{ item }">
                                <nuxt-link class="blue--text font-weight-medium text-decoration-none" to="/auto-dialer/create">{{ item.contact_list }}</nuxt-link>
                            </template> 

                                                   
                            <template v-slot:item.actions="{ item }" item-class="fixed_col">
                                <AutoDialerActions v-bind:item="item" v-on:deleteConfirm="deleteConfirm" ></AutoDialerActions>
                            </template>

                        </v-data-table>
                    </v-card-text>
                </v-card>                
            </v-col>


            <div v-else class="no_list">
                <h2>No Auto Dialer Campaigns... Yet</h2>
                <h3 class="mt-3">Make calls automatically to every person in your contact list.</br>Use call scripts, pre-recorded messages, call tagging, notes and</br>live update of contact details</h3>
                <v-btn class="white--text button text-capitalize text-subtitle-2 ml-3 v-btn v-btn--contained theme--light v-size--defaul mt-5" @click="newCampaign=true">+ Add New Campaign</v-btn>
            </div>
            <div v-if="newCampaign">
                <AutoDialerCampaignModal v-on:hideModal="hideModal"/>
            </div>
            
        </v-row>  

        <ConfirmModal v-if="confirm" title="Delete This Campaign?" v-on:hideDeleteModal="hideDeleteModal"/>    
    </div>
</template>

<script>
import Actions      from '@/components/pages/auto-dialer/AutoDialerActions';
import API      from '@/plugins/api';


export default {
    name: 'AutoDialerList',

    components: {
        API,
        Actions
    },

    data: () => ({
        confirm: false,
        newCampaign: false,
        isLoading: false,
        search: '',
        pagination: false,
        headers: [
            {text: 'Name', value:'name'},
            {text: 'Tracking Number', value: 'tracking_number'},
            {text: 'Contact List', value: 'contact_list'},
            {text: 'Status', value: 'status'},
            {text: 'Progress', value: 'progress'},
            {text: 'Last Run', value: 'last_run'},
            {text: 'Actions', value: 'actions', align: 'center', sortable: false, order: 10, class: 'custom-class'}        
        ],

        campaigns: []
    }),

    methods: {
        hideDeleteModal() {
            this.confirm = false;
        },
        deleteConfirm() {
            this.confirm = true;
        },
        getCampaigns () {
            this.isLoading = true;
            var that = this;
            return API.autodialer.all()
                .then( function (r) {
                    that.campaigns = r;
                    if (r.length <= 5) {
                        that.pagination  = true;
                    }
                })
                .finally(() => this.isLoading = false);
        },

        edit (item) {
            console.log('Edit: ', item);
        },
        hideModal() {
            this.newCampaign = false;
        }
    },

    mounted () {
        this.getCampaigns()
    }
};
</script>