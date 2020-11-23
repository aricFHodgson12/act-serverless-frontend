<template>
    <div class="dashboard">
      <v-container fluid>
        <v-row>
          <v-col>
            <h2 class="primary--text">{{ $t('setting.title') }}</h2>
          </v-col>
          <v-col class="text-right">
              <v-btn class="button white--text text-capitalize">{{ $t('setting.header_btn') }}</v-btn>            
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="2" md="3" sm="12">
            <Vtab :items="tabs"/>
          </v-col>
          <v-col lg="10" md="9" sm="12">
            <Basic :defaultImage="logo_image" />
          </v-col>
        </v-row>
      </v-container>
    </div>  
</template>

<script>
import Vtab     from '@/components/common/Vtab';
import Basic     from '@/components/pages/setting/Basic';

export default {
    name : 'Setting',
    components: {
      Vtab
    },
    data: () => ({
        logos: "logo_1",
        logo_image: require('@/assets/images/logo.png'),
        tabs: [
            {name: 'Name & Logo', to: 'basic'},
            {name: 'Preferences', to: 'preferences'},
            {name: 'Integrate Paypal', to: 'paypal'},
            {name: 'Email Settings', to: 'email_setting'},
            {name: 'Email Templates', to: 'email_template'},
            {name: 'Invoice Settings', to: 'invoice'},
        ],

        calls: []
    }),    

};
</script>
