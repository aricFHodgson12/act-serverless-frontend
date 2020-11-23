<template>
  <div> 
    <nuxt-link class="primary--text font-weight-regular" :to="to">{{ title }}</nuxt-link>
  </div>
</template>

<script>

export default {
    name      : 'DropdownList',
    props: {
      to: String,
      title: String
    },
    data: () => ({
    })

};
</script>

<style lang="scss">
</style>