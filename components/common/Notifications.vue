<template>
    <div>
        <v-snackbar
          v-model="success"
          color="success"
          top          
          class="mt-12"
          elevation="0"
        >
        <div class="d-flex align-center justify-start">
            <v-icon color="white">mdi-check-circle</v-icon>
            <div class="ml-3 font-weight-medium text-subtitle-1">{{ text }}</div>
        </div>

          <template v-slot:action="{ attrs }">
            <v-btn
              text
              v-bind="attrs"
              @click="success = false"
            >
              <v-icon color="white">mdi-18px mdi-close</v-icon>
            </v-btn>
          </template>
        </v-snackbar>

        <v-snackbar
          v-model="error"
          color="error"
          top
          class="mt-12"
          elevation="0"
        >
        <div class="d-flex align-center justify-start">
            <v-icon color="white">mdi-alert-octagon</v-icon>
            <div class="ml-3 font-weight-medium text-subtitle-1">{{ text }}</div>
        </div>
          
          <template v-slot:action="{ attrs }">
            <v-btn
              text
              v-bind="attrs"
              @click="error = false"
              
            >
              <v-icon color="white">mdi-18px mdi-close</v-icon>
            </v-btn>
          </template>
        </v-snackbar>

        <v-snackbar
          v-model="normal"
          color="blue"
          top               
          class="mt-12"
          elevation="0"
        >
            <div class="d-flex align-center justify-start">
                <v-icon color="white">mdi-alert-octagon</v-icon>
                <div class="ml-3 font-weight-medium text-subtitle-1">{{ text }}</div>
            </div>
            <template v-slot:action="{ attrs }">
                <v-btn
                  text
                  v-bind="attrs"
                  @click="normal = false"
                >
                <v-icon color="white">mdi-18px mdi-close</v-icon>
                </v-btn>
            </template>
        </v-snackbar>

        <v-snackbar
          v-model="warn"
          color="warning"
          top          
          class="mt-12"
          elevation="0"     
        >
            <div class="d-flex align-center justify-start">
                <v-icon color="white">mdi-alert-octagon</v-icon>
                <div class="ml-3 font-weight-medium text-subtitle-1">{{ text }}</div>
            </div>
            <template v-slot:action="{ attrs }">
                <v-btn
                color="warning"
                text
                v-bind="attrs"
                @click="warn = false"
                top
                >
                    <v-icon color="white">mdi-18px mdi-close</v-icon>
                </v-btn>
            </template>
        </v-snackbar>                              

    </div>
</template>

<script>
export default {
    name: 'Notifications',

    props: {

        type: {
            type   : String,
            default: 'success'
        },
        text: {
            type: String,
            default: ''
        }
    },

    data: () => ({
        success: false,
        error: false,
        warn: false,
        normal: false
    }),

    mounted () {
        switch(this.type) {
            case "success":
                this.success = true;
            break;
            case "error":
                this.error = true;
            break;
            case "warn":
                this.warn = true;
            break;
            case "normal":
                this.normal = true;
            break;            
        }
    }
};
</script>

<style>
</style>
