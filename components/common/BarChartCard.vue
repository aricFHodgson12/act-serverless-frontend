<template>
    <div>
        <div class="d-flex align-center justify-space-between">
            <h2 class="primary--text">{{title}}</h2>
            <v-col xs="12" md="2" offset-md="4" class="d-flex justify-end pr-0 pt-4 pb-4" v-if="filter==true">
                <SelectDates />
                <AdvFilter />
            </v-col>                    
        </div>

        <v-card :loading="isLoading" class="custom_border">
            <v-card-title class="primary--text">{{ subTitle }}</v-card-title>

            <v-card-text>
                <div class="actions">
                    <v-layout row wrap>
                        <v-col cols="12" sm="6" md="3" class="d-none">
                            <v-select
                                outlined
                                dense
                                hide-details
                                :items="campaigns"
                                v-model="campaign"
                                :disabled="isLoading"
                                item-text="name"
                                item-value="id"
                                @change="getCampaign"
                            ></v-select>
                        </v-col>

                        <v-col class="d-none" cols="12" sm="6" md="3" >
                            <v-checkbox
                                class="mt-2"
                                color="accent"
                                hide-details
                                v-model="rejectedCalls"
                                :disabled="isLoading"
                                label="Exclude Rejected Calls"
                            ></v-checkbox>
                        </v-col>


                    </v-layout>
                </div>

                <BarChart :series="campaigns" :id="campaign" :categories="categories" />
            </v-card-text>
        </v-card>        
    </div>
</template>

<script>

export default {
    name : 'BarChartCard',

    props: {
        title: String,
        subTitle: String,
        campaigns:Array,
        categories: Array,
        intervals: Array,
        interval: Number,
        rejectedCalls: Boolean,
        campaign: Number,
        filter: Boolean,
        legend: Boolean
    },
    methods: {

        getCampaign () {
            if (this.campaign === 1) {
                this.getCampaigns();
            } else {
                this.isLoading = true;
                setTimeout(() => this.isLoading = false, 800);
            }
        }
    },
    data: () => ({
        isLoading: false,
    }),

    mounted () {
    }
};
</script>