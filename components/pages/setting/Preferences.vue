<template>
  <v-card class="custom_border pl-3 pr-3 pt-3">
      <v-card-title class="primary--text">{{ $t('setting.preferences.title') }}</v-card-title>
      <v-card-text>

        <template>
          <v-container
            class="px-0 mb-3"
            fluid
          >
            <v-checkbox
              v-model="formData.maskRecordUrl"
              :label="$t('setting.preferences.mask_label')"
              class="blue_checkbox text-caption"
              color="blue" 
            />
            <v-checkbox
              v-model="formData.disableCallRecording"
              :label="$t('setting.preferences.recording_label')"
              class="blue_checkbox text-caption"
              color="blue" 
            />
          </v-container>
        </template>

        <template>
          <v-row>
            <v-col><span class="primary--text text-subtitle-2 font-weight-medium">{{ $t('setting.preferences.ringtone_label') }}:</span></v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0">
              <v-select
                v-model="formData.ringtone"
                :items="ringtones"
                item-text="display"
                item-value="value"
                class="primary--text custom-input ringtone-select"
                default="default"
                flat
                height="40px"
                hide-details
                label=""
                outlined
              />
            </v-col>
          </v-row>
          <v-row>
             <v-col class="pt-0">
              <v-select
                v-model="formData.timezone"
                :items="timezones"
                item-text="display"
                item-value="value"
                class="primary--text custom-input ringtone-select"
                default="America/New_York"
                flat
                height="40px"
                hide-details
                label=""
                outlined
              />
            </v-col>
          </v-row>
        </template>
        <template>
          <v-divider class="mt-5" />
        </template>
      </v-card-text>

      <v-card-text>
        <template>
          <v-row>
            <v-col class="pb-0 mt-2">
              <v-btn class="primary text-capitalize text-subtitle-2" @click="submit($t('setting.basic.confirm_clicked'))">{{ $t('setting.basic.submit_label') }}</v-btn>
              <span class="ml-5 cancel">{{ $t('setting.basic.cancel_label') }}</span>
            </v-col>
          </v-row>
        </template>   

      </v-card-text>
  </v-card>            

</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import availableRingtones from "./helpers/availableRingtones";
  import availableTimezones from "./helpers/availableTimezones";

  export default {
    name: 'act-setting-preferences',

    data: () => ({
        ringtones: availableRingtones,
        timezones: availableTimezones,
        formData: {}
    }),

    mounted() {
      this.formData = {...this.company};
    },

    computed: {
      ...mapGetters({ company: 'companies/getCompany' })
    },

    methods: {
      ...mapActions({ updateCompany: 'companies/update' }),
      
      async submit() {
        await this.updateCompany(this.formData);
      }
    },
  }
</script>
