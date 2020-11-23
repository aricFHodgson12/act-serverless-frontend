<template>
  <v-card
    width="276"
    class="pl-0 ml-0 primary_vtab pr-0"
    style="border-radius: 0px; height: 100%"
  >
    <v-navigation-drawer class="pt-3 bold" width="276">
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title class="text-subtitle-1 text-right grey_shades_5--text">{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    props: {
      items: Array,
    },    
    data () {
      return {
        right: null,
      }
    },
  }
</script>

<style lang="scss">
    .v-main__wrap {
      display: flex !important;
    }
    .primary_sidebar  {
        display: flex;
    }
    .primary_sidebar .v-list-item--active .v-list-item__content .v-list-item__title {
      color: #fff !important;
    }
</style>