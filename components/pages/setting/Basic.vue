<template>
  <v-card class="custom_border pl-3 pt-3 basic_setting">
      <v-card-title class="primary--text">{{ $t('setting.basic.title') }}</v-card-title>
      <v-card-subtitle class="primary--text mt-2">{{ $t('setting.basic.subtitle') }}</v-card-subtitle>
      <v-card-text>


      <template>
        <v-row>
          <v-col class="pb-0"><span class="primary--text text-subtitle-2 font-weight-medium">{{ $t('setting.basic.name_label') }}:</span></v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex align-center pb-0">
            <v-text-field outlined class="primary--text custom-input" v-model="formData.name" height="40px" elevation=2></v-text-field>
            <v-checkbox v-model="formData.showName" :label="$t('setting.basic.show_name_label')" color="blue" class="blue_checkbox ml-5 text-caption"></v-checkbox>
          </v-col>
        </v-row>
      </template>

      <template>
        <v-row>
          <v-col class="pb-0 pt-0"><span class="primary--text text-subtitle-2 font-weight-medium">{{ $t('setting.basic.logo_label') }}:</span></v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0">
            <v-radio-group
              v-model="radio"
              row
              class="pt-0 mt-2"
              @change="onRadioCheck"
            >
              <v-radio
                :label="$t('setting.basic.default_label')"
                class="mr-15 text-caption"
                color="blue"
                value="default"
              />
              <v-radio
                :label="$t('setting.basic.custom_label')"
                class="mr-15 text-caption"
                color="blue"
                value="custom"
              />
              <v-radio
                :label="$t('setting.basic.no_logo_label')"
                class="text-caption"
                color="blue"
                value="none"
              />   
            </v-radio-group>                      
          </v-col>
        </v-row>                  
      </template>

      <template>
        <v-row>
          <v-col class="pb-0 pt-0"><span class="primary--text text-subtitle-2 font-weight-medium">{{ $t('setting.basic.preview_label') }}:</span></v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex align-center pb-0">
            <div id="preview" class="primary d-flex align-center justify-center">
              <img
                v-if="formData.logo"
                :src="formData.logo === 'default' ? defaultImage : customLogoPreview"
                alt="Logo"
                class="mr-2 header_logo"
              >                                 
              <h5 v-if="formData.showName" class="mt-1 text-17 white--text logo_label">
                {{ formData.name }}
              </h5>
            </div>
          </v-col>
        </v-row>
      </template>

      <template v-if="showImageUpload">
        <v-row>
          <v-col class="pb-0 mt-2"><span class="primary--text text-subtitle-2 font-weight-medium">{{ $t('setting.basic.upload_logo_label') }}:</span></v-col>
        </v-row>
        <FileUpload :btnName="$t('setting.basic.upload_button_name')" @fileChanged="onFileChanged"/>
      </template>   


      <template>
        <v-row>
          <v-col class="pb-0 mt-2">
            <v-btn :disabled="showImageUpload && !formData.logo" class="primary text-capitalize text-subtitle-2" @click="submit">{{ $t('setting.basic.submit_label') }}</v-btn>
            <span class="ml-5 cancel">{{ $t('setting.basic.cancel_label') }}</span>
          </v-col>
        </v-row>
      </template>   

      </v-card-text>
  </v-card>            

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'act-setting-basic',

    props: {
      defaultImage: String,
    },

    data: () => ({
        formData: {},
        radio: 'default',
        showImageUpload: false,
        customLogoPreview: '',
        logoToUpload: ''
    }),

    mounted() {
      this.formData = {...this.company};
      this.customLogoPreview = this.defaultImage;

      if (this.formData.logo !== "default" && this.formData.logo) {
          this.radio = "custom";
          const logoUrl = `${process.env.MEDIA_URL}/companies/${this.formData.logo}`;
          this.customLogoPreview = logoUrl;
      } else if (!this.formData.logo) {
          this.radio = "none"
      }
    },

    computed: {
      ...mapGetters({ company: 'companies/getCompany' })
    },

    methods: {
      ...mapActions({ uploadLogo: 'companies/uploadLogo', updateCompany: 'companies/update' }),

      async submit() {
        if (this.showImageUpload && (!this.logoToUpload)) {
          return;
        }

        if (this.showImageUpload) {
          const logoName = await this.handleLogoUpload(this.logoToUpload);
        }

        await this.updateCompany(this.formData);
      },

      onFileChanged(logoPreview, logoToUpload) {
        this.customLogoPreview = logoPreview;
        this.logoToUpload = logoToUpload;
      },

      async handleLogoUpload(logo) {
        const { filename } = await this.uploadLogo(logo);

        this.formData.logo = filename;
      },

      onRadioCheck(value) {
        if (value === 'default') {
          this.formData.logo = value;
          this.showImageUpload = false;

          return;
        }

        if (value === 'none') {
          this.formData.logo = null;
          this.showImageUpload = false;

          return;
        }

        if (value === "custom") {
          this.formData.logo = 'custom';
          this.showImageUpload = true;
        }
      }
    }
  }
</script>
