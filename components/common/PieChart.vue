<template>
    <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
</template>

<script>
export default {
    name: 'PieChart',

    props: {
        series: Array, 
        id: Number
    },

    data () {
        return {
            chartOptions: {
                chart: {
                  plotBackgroundColor: null,
                  plotBorderWidth: null,
                  plotShadow: false,
                  type: 'pie'
                },
                title: {
                  text: '',
                  y:225
                },
                legend: {
                    align        : 'center',
                    itemMarginTop: 15,
                    verticalAlign: 'bottom',
                    symbolHeight: 12,
                    symbolWidth: 12,
                    symbolRadius: 12,
                    itemStyle: {
                        color: this.$vuetify.theme.themes.light.primary,
                        fontWeight: '400',
                        fontSize: '16px',
                    },                    
                },
                tooltip: { 
                    // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                        enabled: false,
                            formatter:function(){
                                return this.key+ ': ' + this.y + '%';
                            }
                        },
                        showInLegend: true
                    }
                },
                series: this.series

            }
        };
    },

};
</script>

<style>
.highcharts-credits {
    display: none;
}
</style>