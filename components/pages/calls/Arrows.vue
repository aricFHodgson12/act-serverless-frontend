<template>
    <div> 
        <v-tooltip top nudge-right="45">
          <template v-slot:activator="{ on, attrs }">
            <v-col
              v-bind="attrs"
              v-on="on"        
            >
              <div>
                <v-icon class="green-icon" medium> {{ getSrc }} </v-icon>
              </div>
            </v-col>
          </template>
          <span>Incoming Call Answered</span>
        </v-tooltip>       
    </div>
    
</template>

<script>
export default {
    name: 'Arrows',

    props: {item: Object},

    data () {
        return {
            src: ""
        };
    },
    computed: {
        getSrc: function () {
            if (this.item === "5f7f5f6d07813fc79ff92af5") {
                return 'mdi-arrow-bottom-left';
            }            
            else {
                return 'mdi-arrow-top-right';   
            }
        }        
    },
    methods: {
    }
};
</script>

<style>
.highcharts-credits {
    display: none;
}
</style>