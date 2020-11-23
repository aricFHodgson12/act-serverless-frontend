<template>
      <v-navigation-drawer class="vertical-tab">
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.name" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>


<script>
  export default {
    name: 'vertical-tabs',
    props: {
      items: Array,
    },
    computed: {
    },
  }
</script>

<style scoped>
    .vertical-tab {
        background: #fafbfc !important;
    }

</style>
