<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      nudge-right="10"
      nudge-bottom="15"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="custom_dropdown_button primary--text text-capitalize font-weight-regular ml-5 min_width_0"
        >
            <v-icon
              medium
            >
              mdi-dots-horizontal
            </v-icon>

        </v-btn>
      </template>

        <v-card>
          <v-list>
            <v-list-item class="pl-5 pr-5 button_hover">
              <v-list-item-title class="button--text font-weight-medium" @click="copyContactListModal=true">Copy Contacts From List</v-list-item-title>
            </v-list-item>
            <v-list-item class="pl-5 pr-5 button_hover">
              <v-list-item-title class="button--text font-weight-medium" @click="uploadContactListModal=true">Upload Contacts From CSV File</v-list-item-title>
            </v-list-item>
          </v-list>

        </v-card>

    </v-menu>
    <v-btn class="white--text button text-capitalize text-subtitle-2 ml-3 v-btn v-btn--contained theme--light v-size--default" @click="addNewContactModal=true">+ Add New Contact</v-btn>    

    <div v-if="copyContactListModal">
        <CopyContactListModal v-on:hideModal="hideModal"/>
    </div>    

    <div v-if="uploadContactListModal">
        <UploadContactListModal v-on:hideModal="hideModal"/>
    </div>        

    <div v-if="addNewContactModal">
        <AddNewContactModal v-on:hideModal="hideModal"/>
    </div>            
  </div>
</template>
<script>

import moment from 'moment'

export default {
    name: 'AddContactFromList',
    data: () => ({
      menu: false,
      copyContactListModal:false,
      uploadContactListModal: false,
      addNewContactModal: false
    }),
    methods: {
      copyList() {
      },
      hideModal(type){
        switch(type) {
          case "copy":
            this.copyContactListModal = false;
          break;
          case "upload":
            this.uploadContactListModal = false;
          break;
          case "new":
            this.addNewContactModal = false;
          break;
        }
      }
    },         
};

</script>

<style lang="scss">
    #adv_filter {
      max-width: 500px;
    }
</style>