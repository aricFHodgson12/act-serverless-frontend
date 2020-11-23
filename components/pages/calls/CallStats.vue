<template>
    <div>
        <div class="d-flex align-center justify-space-between">
            <h2 class="primary--text">{{ $t('calls.title') }}</h2>
            <v-col xs="12" md="2" offset-md="4" class="d-flex justify-end pr-0 pt-4 pb-4">
                <SelectDates />
                <AdvFilter />
            </v-col>                    
        </div>

        <v-card :loading="isLoading" class="custom_border">
            <v-card-title class="primary--text">{{ $t('calls.timeline.title') }}</v-card-title>

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

                        <v-col class="d-none" cols="12" sm="6" md="3">
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

                <LineChart :series="campaigns" :id="campaign"/>
            </v-card-text>
        </v-card>        
    </div>

</template>

<script>
import LineChart from '@/components/common/LineChart';
import API      from '@/plugins/api';

export default {
    name: 'CallStats',

    components: {
        LineChart,
        API
    },

    data: () => ({
        isLoading: false,

        campaign     : 1,
        interval     : 4,
        rejectedCalls: true,
        anIncreasingNumber:0,
        campaigns: [],

        intervals: [
            {id: 1, name: 'Today'},
            {id: 2, name: 'Yesterday'},
            {id: 3, name: 'Last 7 Days'},
            {id: 4, name: 'Last 7 Days + Today'},
            {id: 5, name: 'Last 30 Days'},
            {id: 6, name: 'Last Month'}
        ]
    }),
      directives: {
        'sortable-table': {
          inserted: (el, binding) => {
            el.querySelectorAll('th').forEach((draggableEl) => {
              // Need a class watcher because sorting v-data-table rows asc/desc removes the sortHandle class
              watchClass(draggableEl, 'sortHandle');
              draggableEl.classList.add('sortHandle');
            });
            Sortable.create(el.querySelector('tr'), binding.value ? { ...binding.value, handle: '.sortHandle' } : {});
          },
        },
      },
    methods: {
        getCampaigns () {
            this.isLoading = true;

            return API.campaigns.all()
                .then(r => this.campaigns = r)
                .finally(() => this.isLoading = false);
        },

        getCampaign () {
            if (this.campaign === 1) {
                this.getCampaigns();
            } else {
                this.isLoading = true;
                setTimeout(() => this.isLoading = false, 800);
            }
        }
    },

    mounted () {
        this.getCampaigns();
    }
};
</script>