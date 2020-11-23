<template>
    <div>
        <v-row>
            <v-col cols="12">
                <div class="d-flex align-center justify-space-between">
                    <h2 class="primary--text">Manage Contact Lists</h2>
                    <v-col xs="12" md="2" offset-md="4" class="d-flex justify-end pr-0 pt-4 pb-4" v-if="contactlists.length > 0">
                        <v-btn class="white--text button text-capitalize text-subtitle-2 ml-3 v-btn v-btn--contained theme--light v-size--default" @click="newContactList=true;modalType='create'">+ Create New Contact List</v-btn>
                    </v-col>                    
                </div>            
            </v-col>

            <v-col v-if="!noResult">
                <v-card class="custom_border">
                    <v-card-title class="primary--text font-weight-bold">{{ contactlists.length || '0' }} Constact Lists</v-card-title>
                    <v-card-text class="pa-6">
                        <v-data-table
                            :loading="isLoading"
                            :headers="headers"
                            :items="contactlists"
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
                                <nuxt-link class="blue--text font-weight-regular text-decoration-none" :to="'/setting/company/contact_lists/'+item.id">{{ item.name }}</nuxt-link>
                            </template>
                        
                            <template v-slot:item.broadcast_campaign="{ item }">
                                <a class="blue--text">{{item.broadcast_campaign}}</a>
                            </template>

                            <template v-slot:item.actions="{ item }" item-class="fixed_col">
                                <ContactListsActions v-bind:item="item" v-on:editContactList="editContactList"></ContactListsActions>
                            </template>

                        </v-data-table>
                    </v-card-text>
                </v-card>                
            </v-col>


            <div class="no_list" v-if="noResult">
                <div class="d-flex align-center justify-center mt-16" style="margin: 0 auto;">
                    <div class="text-center">
                      <h2 class="grey_shades_6--text font-weight-medium text-h6 mb-1">No Contact Lists... Yet</h2>
                      <h3 class="grey_shades_6--text font-weight-regular text-17 mb-6">Create lists of your customers for auto dialer and broadcast campaigns.</h3>
                      <v-btn class="button white--text text-capitalize font-weight-regular">+ Create New Contact List</v-btn>
                    </div>
                </div> 
            </div>
            <div v-if="newContactList">
                <ContactListsCreateModal :type="modalType" v-on:hideModal="hideModal"/>
            </div>
            
        </v-row>      
    </div>
</template>

<script>
import Actions      from '@/components/pages/auto-dialer/AutoDialerActions';
import API      from '@/plugins/api';


export default {
    name: 'ContactLists',

    components: {
        API,
        Actions
    },

    data: () => ({
        newContactList: false,
        modalType:"",
        isLoading: false,
        noResult: false,
        search: '',
        pagination: false,
        headers: [
            {text: 'Name', value:'name'},
            {text: 'Contacts', value: 'contacts'},
            {text: 'broadcast Campaign', value: 'broadcast_campaign'},
            {text: 'Last Updated', value: 'updated_at'},
            {text: 'Created by', value: 'created_by'},
            {text: 'Actions', value: 'actions', align: 'center', sortable: false, order: 10, class: 'custom-class'}        
        ],

        contactlists: []
    }),

    methods: {
        getContactList () {
            this.isLoading = true;
            var that = this;
            return API.contactlists.all()
                .then( function (r) {
                    that.contactlists = r;
                    if (r.length <= 5) {
                        that.pagination  = true;
                    }
                })
                .finally(function() {
                    that.isLoading = false; 
                    if (that.contactlists.length == 0) {
                        that.noResult=true;    
                    }
                    else {
                        that.noResult=false;   
                    }
                    
                });
        },

        edit (item) {
            console.log('Edit: ', item);
        },
        hideModal() {
            this.newContactList = false;
        },
        editContactList(){
            this.modalType = "edit";
            this.newContactList = true;
        }
    },

    mounted () {
        this.getContactList()
    }
};
</script>