<template>
    <v-card class="custom_border">
        <v-card-title class="primary--text">{{ calls.length || '0' }} Calls</v-card-title>

        <v-card-text>
            <v-data-table
                :loading="isLoading"
                :headers="headers"
                :items="calls"
                :search="search"
                :items-per-page="20"
                fixed-header
                height="500"
                item-class="fixed_col"
                v-columns-resizable
            >
                <v-progress-linear
                    slot="progress"
                    color="primary"
                    height="3"
                    indeterminate>
                </v-progress-linear>

                <template v-slot:top>
                    <div class="d-flex align-center table_actions">
                        <div lg="4" class="table_actions__filters">
                            <v-text-field 
                                hide-details
                                outlined 
                                solo                                
                                class="primary--text custom-input mr-2" 
                                v-model="search" 
                                height="40px" 
                                flat
                                label="Search Calls"
                                dense         
                                color="light"                       
                                prepend-inner-icon="mdi-magnify"
                                elevation=0>
                            </v-text-field>
                            <v-menu
                              bottom
                              origin="center center"
                              transition="scale-transition"
                              :close-on-content-click="closeStatus"
                              max-height="300px"

                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                      v-bind="attrs"
                                      v-on="on"
                                      close-on-content-click=false
                                      close-on-click=false   
                                      height="40px"
                                      class="custom_white text-capitalize button--text custom_border pl-2 pr-2"
                                    >
                                      Select Columns
                                      <v-icon>mdi-menu-down</v-icon>
                                    </v-btn>
                                </template>

                                <draggable v-model="headerData" class="white draggable_list">
                                    <transition-group>
                                        <div v-for="element in headerData" :key="element.value">
                                            <v-checkbox
                                              :label="`${element.text}`"
                                              :value="element.value"
                                              v-model="header_selected"
                                              color="blue"
                                            ></v-checkbox>
                                        </div>
                                    </transition-group>
                                </draggable>

            
                            </v-menu>


                            <v-btn class="white--text button text-capitalize text-subtitle-2 ml-3"><v-icon>mdi-download</v-icon>Download CSV</v-btn>
                        </div>

                    </div>

                </template>

                <template v-slot:item.id="{ item }">
                    <Arrows v-bind:item="item"></Arrows>
                </template>

                <template v-slot:item.date="{ item }">
                    <nuxt-link class="links--text font-weight-medium text-decoration-none" :to="'/calls/'+item.id">{{ item.date }}</nuxt-link>
                </template>

                <template v-slot:item.source="{ item }">
                    {{ item.source }}
                </template>

                <template v-slot:item.call_details="{ item }">
                    <table>
                        <tr>
                            <td>From:</td>
                            <td>
                                <Flag/>
                            </td>
                            <td>{{ item.call_details.from }}</td>
                        </tr>
                        <tr>
                            <td>To:</td>
                            <td>
                                <Flag/>
                            </td>
                            <td>{{ item.call_details.to }}</td>
                        </tr>
                        <tr>
                            <td>Rang:</td>
                            <td>
                                <Flag/>
                            </td>
                            <td>{{ item.call_details.rang }}</td>
                        </tr>
                        <tr>
                            <td>Caller ID:</td>
                            <td></td>
                            <td>{{ item.call_details.caller_id }}</td>
                        </tr>
                        <tr>
                            <td>Label:</td>
                            <td></td>
                            <td>{{ item.call_details.label }}</td>
                        </tr>
                    </table>                
                </template>

                <template v-slot:item.city="{ item }">
                    {{ item.city }}
                </template>

                <template v-slot:item.duration="{ item }">
                    {{ item.duration }}
                </template>

                <template v-slot:item.status="{ item }">
                    {{ item.status }}
                </template>                

                <template v-slot:item.recording="{ item }">
                    <AudioFile
                        :file="item.recording"
                        color="success"
                    ></AudioFile>
                </template>

                <template v-slot:item.tags="{ item }">
                    <Tags v-bind:item="item"></Tags>
                </template>                
                <template v-slot:item.actions="{ item }" item-class="fixed_col">
                    <Actions v-bind:item="item"></Actions>
                </template>

            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
import AudioFile from '@/components/common/AudioFile';
import Flag      from '@/components/common/Flag';
import Arrows      from '@/components/pages/calls/Arrows';
import Tags      from '@/components/pages/calls/Tags';
import Actions      from '@/components/pages/calls/Actions';
import API      from '@/plugins/api';
import draggable from 'vuedraggable'


export default {
    name: 'Calls',

    components: {
        AudioFile,
        Flag,
        API,
        draggable
    },

    data: () => ({
        headerCheckBox: true,
        closeStatus:false,
        isLoading: false,
        search: '',
        header_selected: ['id','date', 'source', 'call_details', 'city', 'duration', 'status', 'recording', 'tags', 'actions'],
        headers: [
        ],

        headerData: [
            { text: 'Direction', fixed: true, width: '120px', value: 'id', order: 1},
            {text: 'Date', value: 'date', order: 2},
            {text: 'Source', value: 'source', order: 3},
            {text: 'Call Detail', value: 'call_details', sortable: false, order: 4},
            {text: 'Location', value: 'city', order: 5},
            {text: 'Duration', value: 'duration', order: 6},
            {text: 'Status', value: 'status', order: 7},
            {text: 'Recording', value: 'recording', sortable: false, order: 8},
            {text: 'Tags', value: 'tags', order: 9},
            {text: 'Actions', value: 'actions', align: 'center', sortable: false, order: 10, class: 'custom-class'}        
        ],

        calls: []
    }),

    methods: {
        collapseAll() {
            this.$refs.expandableTable.collapseAll()
        },
        expandAll() {
            this.$refs.expandableTable.expandAll()
        },
        getCalls () {
            this.isLoading = true;

            return API.calls.all()
                .then(r => this.calls = r)
                .finally(() => this.isLoading = false);
        },

        edit (item) {
            console.log('Edit: ', item);
        },

        comments (item) {
            console.log('Comments: ', item);
        },
        sortTheHeadersAndUpdateTheKey(evt) {
          const headersTmp = this.headers;
          const oldIndex = evt.oldIndex;
          const newIndex = evt.newIndex;
          if (newIndex >= headersTmp.length) {
            let k = newIndex - headersTmp.length + 1;
            while (k--) {
              headersTmp.push(undefined);
            }
          }
          headersTmp.splice(newIndex, 0, headersTmp.splice(oldIndex, 1)[0]);
          this.table = headersTmp;
          this.anIncreasingNumber += 1;
        },        
    },

    mounted () {
        this.getCalls();
        this.headers = this.headerData;


    },
    watch: {
        headerData: function (){
            var that = this;
            var items = [];

            var result = _(this.headerData).forEach(function(item) { 
                var r = _.find(that.headers, function(o) { return item.value == o.value; });
                if (r) {
                    items.push(item);
                }
                
             });

            this.headers = items;

        },
        header_selected: function () {
            var that = this;

            var items = [];

            var result = _(this.headerData).forEach(function(item) { 
                var r = _.indexOf(that.header_selected, item.value);
                if (r > -1) {
                    items.push(item);
                }
             });            
            this.headers = items;

        }
    }
};
</script>