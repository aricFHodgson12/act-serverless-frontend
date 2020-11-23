<template>
    <v-card class="custom_border">
        <v-card-title class="primary--text">{{ calls.length || '0' }} Calls</v-card-title>

        <v-card-text>
            <v-data-table
                :loading="isLoading"
                :headers="headers"
                :items="calls"
                :items-per-page="20"
            >
                <v-progress-linear
                    slot="progress"
                    color="primary"
                    height="3"
                    indeterminate>
                </v-progress-linear>

                <template v-slot:item.id="{ item }">
                    <Arrows v-bind:item="item"></Arrows>
                </template>

                <template v-slot:item.date="{ item }">
                    <div class="links--text font-weight-medium text-decoration-none" :to="'/calls/'+item.id">{{ item.date }}</div>
                </template>

                <template v-slot:item.source="{ item }">
                    <table>
                        <tr>
                            <td><span class="pl-2">{{ item.source }}</span></td>
                        </tr>
                    </table>
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
                <template v-slot:item.actions="{ item }">
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

export default {
    name: 'Calls',

    components: {
        AudioFile,
        Flag,
        API
    },

    data: () => ({
        isLoading: false,

        headers: [
            {text: '', value: 'id'},
            {text: 'Date', value: 'date'},
            {text: 'Source', value: 'source'},
            {text: 'Duration', value: 'duration'},
            {text: 'Status', value: 'status'},
            {text: 'Recording', value: 'recording', sortable: false},
            {text: 'Tags', value: 'tags'},
            {text: 'Actions', value: 'actions', align: 'center', sortable: false}
        ],

        calls: []
    }),

    methods: {

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
        }
    },

    mounted () {
        this.getCalls();
    }
};
</script>
