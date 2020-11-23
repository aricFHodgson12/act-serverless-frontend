<template>
  <v-col lg="10" md="9" sm="12">
    <div>
      <ContactLists />
    </div>
  </v-col>
</template>

<script>

export default {
    name : 'Setting-Contact-List',
    layout: 'setting-companys',
    components: {
    },
    data: () => ({
      newCallFlow: false
    }),    

};
</script>
