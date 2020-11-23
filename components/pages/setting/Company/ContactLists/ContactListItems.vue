<template>
    <div>
        <v-row>
            <v-col cols="12">
                <div class="d-flex align-center justify-space-between">
                    <h2 class="primary--text">Existing Customers</h2>
                    <v-col xs="12" md="2" offset-md="4" class="d-flex justify-end pr-0 pt-4 pb-4" v-if="contactlists.length > 0">
                        <v-btn class="white--text button text-capitalize text-subtitle-2 ml-3 v-btn v-btn--contained theme--light v-size--default" @click="gotoContactLists">< Back to All Contact Lists</v-btn>
                    </v-col>                    
                </div>            
            </v-col>

            <v-col>
                <v-card class="custom_border mb-5">
                    <v-card-text>
                        <template>
                            <v-form
                              ref="form"
                              v-model="valid"
                              lazy-validation
                            >
                              <label class="custom_modal__content__label">API URL to add contacts remotely:</label>
                              <v-text-field
                                v-model="importUrl"
                                required
                                outlined
                                class="custom-input primary--text custom-input mt-3 blue_hover font-weight-medium"
                                height="40px" 
                                elevation=2
                                single-line
                              ></v-text-field>
                            </v-form>
                        </template>                        
                    </v-card-text>
                </v-card>
                <v-card class="custom_border">
                    <v-card-title class="primary--text font-weight-bold  flex">
                        <span>{{ contactlists.length || '0' }} Constacts</span>
                        <div class="d-flex justify-end">
                            <AddContactFromList />
                        </div>
                    </v-card-title>
                    <v-card-text class="pa-6">
                        <v-data-table
                            :loading="isLoading"
                            :headers="headers"
                            :items="contactlists"
                            :search="search"
                            :items-per-page="20"
                            fixed-header
                            height="500"
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
        search: '',
        pagination: false,
        headers: [
            {text: 'Phone', value:'phone'},
            {text: 'First Name', value: 'first_name'},
            {text: 'Last Name', value: 'last_name'},
            {text: 'Email Address', value: 'email'},
            {text: 'Status', value: 'status'},
            {text: 'Actions', value: 'actions', align: 'center', sortable: false, order: 10, class: 'custom-class'}        
        ],

        contactlists: [],
        valid: true,
        importUrl:'http://chandra.bestatlantadentis.com/ad_ajax.php?action=AddContact&k=MTQ%3D&phone=&firstname=&lastname=&email='
    }),

    methods: {
        gotoContactLists() {
            this.$router.push({
                path: '/setting/company/contact_lists'
            })
        },
        getContactList () {
            this.isLoading = true;
            var that = this;
            return API.contactlistItems.all()
                .then( function (r) {
                    that.contactlists = r;
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