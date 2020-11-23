<template>
  <v-col lg="10" md="9" sm="12">
    <div>
      <ReportsOverviewTimeline />
    </div>
    <div>
      <ReportsOverviewStats :stats="stats" />
    </div>
    <div class="d-flex align-center justify-center white">
      <div class="pa-8 custom_border flex_50 mr-2">
        <div class="d-flex justify-space-between align-center mb-15">
          <h3 class="button--text font-weight-medium">Calls by Source</h3>

          <v-tooltip
            v-model="show"
            top
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <nuxt-link to="source" class="text-decoration-none"><v-icon color="button">mdi-chart-histogram</v-icon></nuxt-link>
              </v-btn>
            </template>
            <span>Show Details</span>
          </v-tooltip>
        </div>
        <PieChart :series="calls_source"/>
      </div>  

      <div class="pa-8 custom_border flex_50 ml-2">
        <div class="d-flex justify-space-between align-center mb-15">
          <h3 class="button--text font-weight-medium">Avg Duration by Source</h3>
        </div>        
        <PieChart :series="calls_source"/>
      </div>
    </div>
    
    <div class="d-flex align-center justify-center white mt-6">
      <div class="pa-8 custom_border flex_50 mr-2">
        <div class="d-flex justify-space-between align-center mb-15">
          <h3 class="button--text font-weight-medium">Incoming vs Outgoing</h3>
        </div>
        
        <PieChart :series="calls_source_1"/>
      </div>      
      <div class="pa-8 custom_border flex_50 ml-2">
        <div class="d-flex justify-space-between align-center mb-15">
          <h3 class="button--text font-weight-medium">New vs Repeated Calls</h3>
        </div>        
        <PieChart :series="calls_source_1"/>
      </div>
    </div>

    <div class="d-flex align-center justify-center white mt-6">
      <div class="pa-8 custom_border flex_50 mr-2">
        <div class="d-flex justify-space-between align-center mb-15">
          <h3 class="button--text font-weight-medium">Calls by Result</h3>
        </div>
        
        <PieChart :series="calls_source_2"/>
      </div>      
      <div class="pa-8 custom_border flex_50 ml-2">
        <div class="d-flex justify-space-between align-center mb-15">
          <h3 class="button--text font-weight-medium">Calls by Agent</h3>

          <v-tooltip
            v-model="show1"
            top
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <nuxt-link to="agent" class="text-decoration-none"><v-icon color="button">mdi-chart-histogram</v-icon></nuxt-link>
              </v-btn>
            </template>
            <span>Show Details</span>
          </v-tooltip>          
        </div>        
        <PieChart :series="calls_source_2"/>
      </div>
    </div>    

  </v-col>
</template>

<script>

export default {
    name : 'Overview',
    layout: 'reports',
    components: {
    },
    data: () => ({
      show: false,
      show1: false,
      stats: [
        {
          "title": "Total Calls",
          "value": 420,
        },
        {
          "title": "Avg Duration",
          "value": "00:01:53",
        },
        {
          "title": "Top Call Source",
          "value": "Google Adwords",
        },                
        {
          "title": "Top Call Day",
          "value": "Monday",
        },
        {
          "title": "Top Call Hour",
          "value": "2 PM" ,
        },
        {
          "title": "Top Keyword",
          "value": "buy tablet online",
        },                        
      ],
      calls_source: [{
          name: 'Composition',
          colorByPoint: true,
          innerSize: '70%',
          data: [{
                name: 'Google AdWords',
                color: '#d28cbd',
                y: 40,
              }, {
                name: 'Facebook',
                color: '#ffba5a',
                y: 20.9
              }, {
                name: 'Billboards',
                color: '#78d8de',
                y: 30.1
              },
              {   
                name: 'Newspapers',
                color: '#a78375',
                y: 20.9
              },              
              {   
                name: 'Keyword Tracking',
                color: '#b9d581',
                y: 10.9
              },              
              {   
                name: 'Primary',
                color: '#898ddd',
                y: 20.9
              },                                          
          ]
      }],
      calls_source_1: [{
          name: 'Composition',
          colorByPoint: true,
          innerSize: '70%',
          data: [{
                name: 'Incoming',
                color: '#78d8de',
                y: 40,
              }, {
                name: 'Outgoing',
                color: '#637591',
                y: 60
              }                                         
          ]
      }],
      calls_source_2: [{
          name: 'Composition',
          colorByPoint: true,
          innerSize: '70%',
          data: [{
                name: 'Answered',
                color: '#15bf81',
                y: 40,
              }, {
                name: 'Busy',
                color: '#ffba5a',
                y: 20.9
              }, {
                name: 'No answer',
                color: '#ced2db',
                y: 1.1
              },
              {   
                name: 'Canceled',
                color: '#637591',
                y: 20.9
              },              
              {   
                name: 'Voicemail',
                color: '#898ddd',
                y: 30.9
              },              
              {   
                name: 'Failed',
                color: '#ff6666',
                y: 14.9
              },                                          
          ]
      }],            
    }),  
    mounted(){
      // this.purpleColor = this.$vuetify.theme.themes['light'].background;
    }

};
</script>