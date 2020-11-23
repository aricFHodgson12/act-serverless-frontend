<template>
    <div class="dashboard">
        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    <CallStats/>
                </v-col>

                <v-col cols="12">
                    <Calls/>
                </v-col>

                <v-col cols="12">
                    <SMSInbox/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Calls     from '@/components/dashboard/Calls';
import CallStats from '@/components/dashboard/CallStats';
import SMSInbox  from '@/components/dashboard/SMSInbox';

export default {
    name : 'Dashboard',

    components: {
        Calls,
        CallStats,
        SMSInbox
    }
};
</script>
