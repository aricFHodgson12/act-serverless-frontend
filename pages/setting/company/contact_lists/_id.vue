<template>
  <v-col lg="10" md="9" sm="12">
    <div>
      <ContactListItems />
    </div>
  </v-col>
</template>

<script>

export default {
    name : 'Setting-Contact-List-Items',
    layout: 'setting-companys',
    components: {
    },
    data: () => ({
      newCallFlow: false
    }),    

};
</script>
