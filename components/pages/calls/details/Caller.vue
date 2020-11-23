<template>
    <v-card class="custom_border">
        <v-card-title class="primary--text"><v-icon class="mr-3" medium>mdi-account</v-icon>{{ $t('calls.details.caller.title') }}</v-card-title>
        <v-card-text>
          <v-simple-table>
              <template v-slot:default>
                  <tbody>
                      <tr>
                          <td>Caller Number:</td>
                          <td class="d-flex align-center">
                            <span>206-123-4567</span>
                            <v-tooltip top>
                              <template v-slot:activator="{ on, attrs }">
                                <span
                                  v-bind="attrs"
                                  v-on="on"
                                ><v-icon class="button--text small-icon ml-2">mdi-cancel</v-icon></span>
                              </template>
                              <span>Block this number from incoming calls <br>and add it to a blacklist. This will exclude <br>this number from call dashboard and <br>call reports. You will be able to remove <br>this number from blacklist at any time.</span>
                            </v-tooltip>
                          </td>
                      </tr>
                      <tr>
                          <td>Total Calls:</td>
                          <td>7</td>
                      </tr>
                      <tr>
                          <td>Total Duration:</td>
                          <td>00:02:46</td>
                      </tr>
                      <tr>
                          <td>First Call:</td>
                          <td>Aug 23, 2014 at 09:02 AM</td>
                      </tr>
                      <tr>
                          <td>City, State</td>
                          <td>New York, NY</td>
                      </tr>
                  </tbody>
              </template>
          </v-simple-table>
          <v-row>
            <v-col>
              <GmapMap
                :center="{lat:40.7128, lng:-74.0060}"
                :zoom="10"
                map-type-id="roadmap"
                style="width: 100%; height: 300px"
              >
              </GmapMap>
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
  .small-icon {
    font-size: 18px !important;
  }
</style>