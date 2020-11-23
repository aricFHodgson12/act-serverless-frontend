<template>
    <v-card class="custom_border">
        <v-card-title class="primary--text">{{ $t('calls.sms.title') }}</v-card-title>

        <v-card-text>
            <v-data-table
                :loading="isLoading"
                :headers="headers"
                :items="sms"
                :items-per-page="5"
            >
                <v-progress-linear
                    slot="progress"
                    color="primary"
                    height="3"
                    indeterminate>
                </v-progress-linear>

                <template v-slot:item.date="{ item }">
                    {{ item.date }}
                </template>

                <template v-slot:item.source="{ item }">
                    {{ item.source }}
                </template>

                <template v-slot:item.campaign="{ item }">
                    {{ item.campaign || '-' }}
                </template>

                <template v-slot:item.clients="{ item }">
                    {{ item.clients || '-' }}
                </template>

                <template v-slot:item.from="{ item }">
                    {{ item.from }}
                </template>

                <template v-slot:item.from="{ item }">
                    {{ item.to }}
                </template>

                <template v-slot:item.contents="{ item }">
                    <span class="primary--text">{{ item.contents }}</span>
                </template>

                <template v-slot:item.call_caching="{ item }">
                    {{ item.call_caching ? 'Yes' : 'No' }}
                </template>

                <template v-slot:item.actions="{ item }">
                    <v-tooltip bottom>
                        <template v-slot:activator="{on,attrs}">
                            <v-btn color="red" v-bind="attrs" v-on="on" icon @click="edit(item)">
                                <v-icon size="medium">far fa-times</v-icon>
                            </v-btn>
                        </template>
                        <span>Delete</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{on,attrs}">
                            <v-btn color="blue" v-bind="attrs" v-on="on" icon @click="comments(item)">
                                <v-icon size="medium">far fa-comments</v-icon>
                            </v-btn>
                        </template>
                        <span>Comments</span>
                    </v-tooltip>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
import API      from '@/plugins/api';    
export default {
    name: 'SMSInbox',
    components: {
        API
    },
    data: () => ({
        isLoading: false,

        headers: [
            {text: 'Date', value: 'date'},
            {text: 'Label/Source', value: 'source'},
            {text: 'Campaign', value: 'campaign'},
            {text: 'Client(s)', value: 'clients'},
            {text: 'From', value: 'from'},
            {text: 'To', value: 'to'},
            {text: 'Contents', value: 'contents'},
            {text: 'Call Caching', value: 'call_caching', align: 'center'},
            {text: 'Actions', value: 'actions', align: 'center', sortable: false}
        ],

        sms: []
    }),

    methods: {
        getCalls () {
            this.isLoading = true;

            return API.sms.all()
                .then(r => this.sms = r)
                .finally(() => this.isLoading = false);
        },

        edit (item) {
            console.log('Edit: ', item);
        },

        comments (item) {
            console.log('Comments: ', item);
        }
    },

    mounted () {
        this.getCalls();
    }
};
</script>
