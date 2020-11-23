<template>
    <v-card class="custom_border mt-5">
        <v-card-title class="primary--text"><v-icon class="mr-3" medium>mdi-message-text-outline</v-icon>{{ $t('calls.details.notes.title') }}</v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-simple-table>
                  <template v-slot:default>
                      <tbody>
                          <tr>
                              <td class="primary--text d-flex align-center justify-space-between">
                                <div>
                                  <p class="sub_description grey_shades_6--text">Lucas Anderson @ 11/23/2014</p>
                                  <p class="description primary--text">Call back today at 7 pm</p>          
                                </div>
                                
                                  <v-tooltip top>
                                    <template v-slot:activator="{ on, attrs }" content-class="custom-tootip">
                                      <span
                                        v-bind="attrs"
                                        v-on="on"
                                      ><v-icon class="button--text" medium>mdi-close</v-icon></span>
                                    </template>
                                    <span>Delete Note</span>
                                  </v-tooltip>                                
                              </td>
                          </tr>
                          <tr>
                              <td class="primary--text d-flex align-center justify-space-between">
                                <div>
                                  <p class="sub_description grey_shades_6--text">David Howell @ 11/25/2014</p>
                                  <p class="description primary--text">Sell $180</p>                                              
                                </div>
                                <v-tooltip top>
                                  <template v-slot:activator="{ on, attrs }" content-class="custom-tootip">
                                    <span
                                      v-bind="attrs"
                                      v-on="on"
                                    ><v-icon class="button--text" medium>mdi-close</v-icon></span>
                                  </template>
                                  <span>Delete Note</span>
                                </v-tooltip>                                
                                
                              </td>
                          </tr>
                          <tr>
                              <td class="primary--text d-flex align-center justify-space-between">
                                <div>
                                  <p class="sub_description grey_shades_6--text">David Howell @ 11/25/2014</p>
                                  <p class="description primary--text">Good Customer!</p>                                                            
                                </div>
                                <v-tooltip top>
                                  <template v-slot:activator="{ on, attrs }" content-class="custom-tootip">
                                    <span
                                      v-bind="attrs"
                                      v-on="on"
                                    ><v-icon class="button--text" medium>mdi-close</v-icon></span>
                                  </template>
                                  <span>Delete Note</span>
                                </v-tooltip>                                
                              </td>
                          </tr>
                      </tbody>
                  </template>
              </v-simple-table>

            </v-col>
          </v-row>
            <v-row>
              <v-col>
                <v-textarea solo label="Add Note..." class="custom-text-area">
                </v-textarea>
              </v-col>
            </v-row>

        </v-card-text>
    </v-card>
</template>

<script>

export default {
    name: 'CallsDetailNotes',

    data: () => ({

    }),

    methods: {

    },

    mounted () {
    }
};
</script>


<style lang="scss">
  .sub_description {
    font-size: 12px;
    margin-bottom: 3px !important;
    line-height: 12px !important;
  }
  .description {
    margin-top: 0px;
    font-size: 15px;
    margin-bottom: 0px !important;
  }
  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td, .v-data-table > .v-data-table__wrapper > table > thead > tr > td, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
      height: 60px !important;
  }  

</style>