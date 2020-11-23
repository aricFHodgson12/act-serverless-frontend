<template>
    <div class="dashboard">
      <v-row>
        <v-col class="d-flex justify-space-between">
          <h2 class="primary--text">{{ $t('calls.details.title') }}</h2>
          <v-btn class="button white--text text-capitalize"><v-icon left>mdi-chevron-left</v-icon>
            <nuxt-link class="white--text font-weight-medium text-decoration-none" :to="'/calls'">{{ $t('calls.details.back') }}</nuxt-link>                  
          </v-btn>            
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <Incoming/>
          <Recording/>
          <CallsDetailTags/>
          <Notes/>
        </v-col>

        <v-col cols="6">
          <Caller/> 
          <Call/>             
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <History/>
        </v-col>
      </v-row>          

    </div>  
</template>

<script>
import CallsDetailTags from '@/components/pages/calls/details/CallsDetailTags';
import Call from '@/components/pages/calls/details/Call';
export default {
    name : 'CallDetails',
    components: {
      CallsDetailTags,
      Call
    }
};
</script>