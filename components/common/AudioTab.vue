<template>
  <div class="audio_tab">
    <v-btn-toggle class="greeting_tab mt-2">
      <v-btn class="text-capitalize" v-bind:class="{ 'v-btn--active': speech }" @click="activeTab('speech')">
        Text to Speech
      </v-btn>

      <v-btn class="text-capitalize"  v-bind:class="{ 'v-btn--active': upload_audio }" @click="activeTab('upload_audio')">
        Upload Audio
      </v-btn>

      <v-btn class="text-capitalize" v-bind:class="{ 'v-btn--active': audio_url }" @click="activeTab('audio_url')">
        Enter Audio URL
      </v-btn>

      <v-btn class="text-capitalize" v-bind:class="{ 'v-btn--active': record_url }" @click="activeTab('record_url')">
        Record Audio
      </v-btn>
    </v-btn-toggle>

    <div class="panel_content" v-if="speech==true">
      <CallFlowGreetingSpeech />
    </div>

    <div class="panel_content" v-if="upload_audio==true">
      <AudioFileUpload />
    </div>    

    <div class="panel_content" v-if="audio_url==true">
      <EnterAudioUrl />
    </div>        

    <div class="panel_content" v-if="record_url==true">
      <RecordAudio />
    </div>                      
  </div>


</template>

<script>
export default {
    name: 'AudioTab',
    data: () => ({
      speech: true,
      upload_audio: false,
      audio_url: false,
      record_url: false,
    }),    
    methods: {
      activeTab(param) {
        switch (param) {
          case "speech":
            this.speech = true;
            this.upload_audio = false;
            this.audio_url = false;
            this.record_url = false;
          break;
          case "upload_audio":
            this.speech = false;
            this.upload_audio = true;
            this.audio_url = false;
            this.record_url = false;
          break;
          case "audio_url":
            this.audio_url = false;
            this.speech = false;
            this.upload_audio = false;
            this.audio_url = true;
            this.record_url = false;
          break;
          case "record_url":
            this.record_url = true;
            this.speech = false;
            this.upload_audio = false;
            this.audio_url = false;
            this.record_url = true;
          break;                              
        }
      },      
    }    
};
</script>
