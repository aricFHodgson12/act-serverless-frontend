<template>
    <v-row>
        <v-col>
            <div class="custom_border stats_list">
                <ul>
                    <li v-for="(item, index) in stats" :key="index">
                        <div>
                            <label>{{item.title}}</label>
                            <p>{{item.value}}</p>                            
                        </div>
                    </li>
                </ul>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name : 'ReportsOverviewStats',
    props: {
        stats: Array
    },
    data: () => ({
    }),
};
</script>