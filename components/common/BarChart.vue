<template>
    <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
</template>

<script>
export default {
    name: 'BarChart',

    props: {
        series: Array, 
        categories: Array, 
        legend: {
            type: Boolean,
            default: true
        }
    },

    data () {
        return {
            chartOptions: {
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: this.categories,
                    labels: {
                        style: {
                            color: this.$vuetify.theme.themes.light.grey_shades_6,
                            fontSize: '13px'
                        }
                    },                    

                },
                yAxis: {
                    allowDecimals: false,
                    min: 0,
                    title: {
                        text: ''
                    }
                },
                legend: {
                    enabled: this.legend
                },                
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                    shared: true
                },
                plotOptions: {
                    column: {
                        stacking: 'normal'
                    }
                },
                series:this.series
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