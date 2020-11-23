<template>
    <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
</template>

<script>
export default {
    name: 'LineChart',

    props: {series: Array, id: Number},

    data () {
        return {
            chartOptions: {
                chart: {
                    type: 'line'
                },                
                title: '',

                legend: {
                    align        : 'center',
                    verticalAlign: 'bottom',
                    symbolHeight: 12,
                    symbolWidth: 12,
                    symbolRadius: 12,

                    itemStyle: {
                        color: this.$vuetify.theme.themes.light.primary,
                        fontWeight: '400',
                        fontSize: '16px'
                    },                    
                },

                yAxis: {
                    title: {
                        text: null
                    },
                    labels: {
                        style: {
                            color: this.$vuetify.theme.themes.light.primary
                        }
                    },                    
                },

                xAxis: {
                    labels: {
                        style: {
                            color: this.$vuetify.theme.themes.light.primary
                        }
                    },
                    categories: [
                        'Nov 15',
                        'Nov 16',
                        'Nov 17',
                        'Nov 18',
                        'Nov 19',
                        'Nov 20',
                        'Nov 21'
                    ]
                },
                series: []
            }
        };
    },

    methods: {
        randomData () {
            return Array.from({length: 7}, () => Math.floor(Math.random() * 10));
        }
    },

    watch: {
        series: {
            handler (value) {
                if (value) {
                    let color = "";
                    this.chartOptions.series = [];

                    value.forEach(item => {

                        let color = "";
                        switch(item.id) {
                            case 1:
                                color = "#d28cbd";
                            break;
                            case 2:
                                color = "#ffba5a";
                            break;
                            case 3:
                                color = "#78d8de";
                            break;
                            case 4:
                                color = "#a78375";
                            break;
                            case 5:
                                color = "#b9d581";
                            break;                                                                                                                
                        }
                        this.chartOptions.series.push({
                            data: this.randomData(),
                            name: item.name,
                            color: color,
                            marker: {
                                // symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                            }                            
                        })
                    });
                    
                }
            }
        },

        id: {
            handler (value) {
                if (value) {
                    setTimeout(() => {
                        this.series.forEach(item => {
                            if (item.id === value && value !== 1) {
                                let color = "";
                                switch(item.id) {
                                    case 1:
                                        color = "#d28cbd";
                                    break;
                                    case 2:
                                        color = "#ffba5a";
                                    break;
                                    case 3:
                                        color = "#78d8de";
                                    break;
                                    case 4:
                                        color = "#a78375";
                                    break;
                                    case 5:
                                        color = "#b9d581";
                                    break;                                                                                                                
                                }

                                this.chartOptions.series = [
                                    {
                                        data: this.randomData(),
                                        name: item.name,
                                        color: color,
                                        marker: {
                                            // symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                                        }

                                    }
                                ];
                            }
                        });
                    }, 800);
                }
            }
        }
    }
};
</script>

<style>
.highcharts-credits {
    display: none;
}
</style>