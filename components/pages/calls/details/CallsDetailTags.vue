<template>
    <v-card class="custom_border mt-5">
        <v-card-title class="primary--text justify-space-between">
            <div>
                <v-icon class="primary--text mr-3" medium>mdi-tag-outline</v-icon>{{ $t('calls.details.tags.title') }}
            </div>
            <div>
                <h5 class="text-body-2">{{ $t('calls.details.tags.subTitle') }}</h5>
            </div>
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col>
                    <v-chip
                      class="ma-2 primary"
                      close
                      color="cyan"
                      label
                      text-color="white"
                      v-for="item in tags" :key="item.id"
                      @click:close="removeTag(item.id)"
                    >
                      {{item.text}}
                    </v-chip>                    
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <form v-on:submit.prevent="noop">
                      <v-text-field
                        outlined
                        label="Add Tag..."
                        v-model="tag"
                        @keydown.enter="addTag"
                      ></v-text-field>              
                    </form>                    
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>

export default {
    name: 'CallsDetailTags',
    data: () => ({
        tag:"",
        tags: [
            {
                id: 1,
                text: 'new lead'
            },
            {
                id: 2,
                text: 'sale'
            }
        ]
    }),

    methods: {
        removeTag(id){
            var removeIndex = this.tags.map(function(item) { return item.id; }).indexOf(id);
            this.tags.splice(removeIndex, 1);
        },
        addTag(e){
            let length = this.tags.length;
            let id = length + 1;
            var obj = {
                id: id,
                text: this.tag
            }
            this.tags.push(obj);
            this.tag = "";
        },
        noop() {

        }
    },

    mounted () {
    }
};
</script>
