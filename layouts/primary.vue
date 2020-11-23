<template>
  <v-app>
    <Navigation/>
    <v-main full-height>
        <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '@/components/common/Navigation';  
export default {
  name : 'AppHeader',
  components: {
      Navigation
  }
}
</script>