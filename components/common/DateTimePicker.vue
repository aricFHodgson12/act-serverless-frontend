<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="custom_select_light primary--text font-weight-regular text-capitalize"
        >
          {{ selected }}
        </v-btn>
      </template>

      <v-card>
        <v-date-picker v-model="picker" color="blue" @change="change"></v-date-picker>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
  export default {
    props: {
      date: String,
      type: String
    },
    data () {
      return {
        menu: false,
        selected: '',
        selectedType: 'date',
        picker: new Date().toISOString().substr(0, 10),
      }
    },
    methods: {
      change(e) {
        this.selected = e;
        if (this.selectedType === 'first') {
          this.$emit('getUpdate', this.selected);  
        }
        else if (this.selectedType === 'last'){
          this.$emit('getUpdate', this.selected);   
        }
        else {
          this.$emit('getUpdate', this.selected);    
        }
        
      },
    },
    mounted () {
      this.selected = this.date;
    }    

  }
</script>