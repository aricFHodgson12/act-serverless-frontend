<template>
    <v-menu
        offset-y
        nudge-bottom="20"
        nudge-left="50"
        content-class="custom_proifle_menu"
    >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        class="white--text no_hover_active"
        primary

      >
        Melvin Riley
        <v-icon
          small
          class="ml-2"
        >
          mdi-chevron-down
        </v-icon>
      </v-btn>
      <a @click="showSoftPhoneDialPad">
        <v-icon
          class="mr-5 ml-5 phone-logo white--text"
          medium
        >
          mdi-phone
        </v-icon>                      
      </a>

    </template>
      <v-list>
          <div
              v-for="(item, index) in user_menu"
              :key="index" 
              class="custom_proifle_menu_item"      
          >
              <div class="secondary--text font-weight-regular" v-if="item.to=='role'">{{item.title}}</div>
              <div v-else >
                  <nuxt-link class="primary--text font-weight-regular" :to="item.to">{{ item.title }}</nuxt-link>
              </div>
              
          </div>

      </v-list>
    </v-menu>    
</template>

<script>

export default {
    name      : 'AgentProfileMenu',
    data: () => ({
        user_menu: [
            {
              title: 'Agent',
              // title: 'Client Reporting',
              to: 'role'
            },        
            {
              title: 'My Profile',
              to: '/profile'
            },
            {
              title: 'Log Out',
              to: '/logout'
            }
        ],        
    }),
    methods: {
      showSoftPhoneDialPad: function () {
        this.$emit('showSoftPhone');  
      }
    }

};
</script>

<style lang="scss">
</style>