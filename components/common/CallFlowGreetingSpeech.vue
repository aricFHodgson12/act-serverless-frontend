<template>    
  <div>
    <p class="font-weight-medium primary--text mb-2 text-14">Read the following text with a robot-like voice:</p>
    <v-textarea solo value="This call will be recorded for quality assurance" class="custom-text-area"></v-textarea>    
    <div class="greet_call_actions">
      <div class="d-flex align-center">
        <div class="d-flex">
          <label class="primary--text">Voice:</label>
          <v-select
            :items="voices"
            :dense="true"
            outlined
            v-model="voice"
            class="custom_select_option"
            hegiht="10"
            hide-details
          ></v-select>                    
        </div>

        <div class="d-flex ml-8">
          <label class="primary--text">Dialect:</label>
          <v-select
            :items="dialects"
            :dense="true"
            outlined
            v-model="dialect"
            class="custom_select_option"
            hegiht="10"
            hide-details
          ></v-select>                    
        </div>        
     
      </div>
      <div class="sound_action">
        <v-btn class="custom_button custom_border text-capitalize button--text">
          <v-icon class="grey_shades_6--text" medium>
            mdi-volume-high
          </v-icon>
          Test
        </v-btn>
      </div>      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CallFlowGreetingSpeech',
    props: {
    },
    data: () => ({
      voices: [
        {value: 1, text: 'Main'}
      ],
      dialects: [
        {value: 1, text: 'Enlish'}
      ],      
      voice: 1,
      dialect: 1,
    }),
    mounted () {
    },    
    watch: {
    },       
    methods: {
    },    
    computed: {
    },
  }
</script>
