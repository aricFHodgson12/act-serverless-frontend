<template>
    <v-card class="custom_border">
        <v-card-title class="primary--text"><v-icon class="green-icon mr-3" medium>mdi-arrow-bottom-left</v-icon>{{ $t('calls.details.incoming.title') }}</v-card-title>
        <v-card-text>
            <v-simple-table>
                <template v-slot:default>
                    <tbody>
                        <tr>
                            <td class="primary--text">{{ $t('calls.details.incoming.date') }}</td><td>{{date}}</td>
                        </tr>
                        <tr>
                            <td>{{ $t('calls.details.incoming.tracking') }}</td><td class="links--text">{{tracking}}</td>
                        </tr>
                        <tr>
                            <td>{{ $t('calls.details.incoming.agent') }}</td><td>{{agent}}</td>
                        </tr>
                        <tr>
                            <td>{{ $t('calls.details.incoming.duration') }}</td><td>{{duration}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card-text>
    </v-card>
</template>

<script>

export default {
    name: 'CallsDetailIncoming',

    data: () => ({
        date: 'Fri 11/21 2014 at 5:15 PM',
        tracking: '123-456-7890 (Google AdWords)',
        agent: 'David Howell',
        duration: '00:01:45'
    }),

    methods: {

    },

    mounted () {
    }
};
</script>
