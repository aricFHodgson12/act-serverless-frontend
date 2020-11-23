<template>
    <div class="pa-5">
        <v-row>
            <v-col cols="12 pt-0">
                <CallStats/>
            </v-col>

            <v-col cols="12">
                <Calls/>
            </v-col>

            <v-col cols="12">
                <SMSInbox/>
            </v-col>
        </v-row>

    </div>

</template>


<script>
    import CallStats from '@/components/pages/calls/CallStats';
    import Calls     from '@/components/pages/calls/Calls';
    import SMSInbox  from '@/components/pages/calls/SMSInbox';

    export default {
        name : 'Dashboard',

        components: {
            Calls,
            CallStats,
            SMSInbox
        }
    };
</script>