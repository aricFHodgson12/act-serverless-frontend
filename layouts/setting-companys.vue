<template>
  <v-app>
    <Navigation/>
    <v-main full-height>
      <v-container class="pt-0 primary_sidebar">
        <v-row>
          <v-col lg="2" md="3" sm="12" class="pl-0 pt-0 pr-0 pb-0">
            <VPrimarySettingTab :items="tabs"/>
            <!--Notifications :type="notificationType" :text="notificationText" /-->
          </v-col>
          <nuxt />
        </v-row>
      </v-container>
    </v-main>
  </v-app>

</template>

<script>
export default {
    middleware: ['authenticated'],

    components: {},

    data: () => ({
        tabs: [
            { name: 'Edit Company', to: '/setting/company/edit_company' },
            { name: 'Company Users', to: '/setting/company/company_users' },
            { name: 'Manage Call Flows', to: '/setting/company/call_flows' },
            {
                name: 'Manage Contact Lists',
                to: '/setting/company/contact_lists'
            },
            { name: 'Manage Tags', to: '/setting/company/manage_tags' },
            { name: 'Manage Blacklist', to: '/setting/company/blacklist' }
        ],
        notificationText: "Warning notification",
        notificationType: "warn",
        calls: []
    })
};
</script>