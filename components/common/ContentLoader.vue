<template>
    <div v-if="loading">
        <div class="content-box-icon-loader" :style="{background: iconContainer.background}">
            <v-icon :style="{color: iconColor}">fal fa-spinner fa-spin</v-icon>
        </div>
        <div class="content-box-loader"></div>
    </div>
</template>

<script>
export default {
    name: 'ContentLoader',

    props: {
        loading: {
            type    : Boolean,
            required: true
        },

        color: {
            type   : String,
            default: 'white'
        }
    },

    data: () => ({
        iconContainer: {
            background: 'rgba(255, 255, 255, .6)'
        },

        iconColor: '#FFF'
    }),

    mounted () {
        this.iconContainer.background = this.color === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, .8)';
        this.iconColor                = this.color === 'dark' ? '#FFF' : '#333';
    }
};
</script>

<style>
.content-box-loader {
    position: absolute;
    top:      0;
    left:     0;
    width:    100%;
    height:   100%;
}

.content-box-icon-loader {
    position:        absolute;
    top:             0;
    left:            0;
    height:          100%;
    display:         flex;
    align-items:     center;
    justify-content: center;
    width:           100%;
    z-index:         9999999;
}

.content-box-icon-loader .fal {
    font-size: 30px;
}
</style>
