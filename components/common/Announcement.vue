<template>
    <div id="announcement">
        <div v-if="announcement" class="announcement">
            <div class="announcement__text">
                <v-icon color="white">mdi-alert-octagon</v-icon>
                <span>{{text}}</span>
            </div>
            <span @click="announcement=false" class="announcement__close"><v-icon color="white">mdi-18px mdi-close</v-icon></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Announcement',

    props: {

    },
    data: () => ({
        announcement: true,
        text: "You have 5 days to pay for this service. After that you won't be able to access your call analytics. If you have any questions write to our support team: support@calltracking.com"
    }),
    methods: {
        showAnnouncement() {
            let hero = document.getElementsByClassName("v-main")[0];
            hero.style.paddingTop = "172px";
            let header = document.getElementsByTagName("header")[0];
            header.style.top="50px";
        },
        hideAnnouncement(){
            let hero = document.getElementsByClassName("v-main")[0];
            hero.style.paddingTop = "122px";
            let header = document.getElementsByTagName("header")[0];
            header.style.top="0px";
        }
    },    
    components: {
    },
    mounted () {
        if (this.announcement) {
            this.showAnnouncement();
        }
    },        
    watch: {
      announcement: function () {
        if(this.announcement) {
            this.showAnnouncement();
        }
        else {
            this.hideAnnouncement();
        }
      }
    },      
};
</script>

<style lang="scss">

</style>