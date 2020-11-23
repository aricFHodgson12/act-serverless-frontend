<template>
    <v-text-field
        outlined
        dense
        type="tel"
        v-if="fieldID"
        @input="emit('input')"
        @blur="blur"
        :id="fieldID"
        :value="value"
        :color="color"
        :name="name"
        :error-messages="errorMessages"
    ></v-text-field>
</template>

<script>

import intlTelInput from 'intl-tel-input/build/js/intlTelInput.min.js';
import 'intl-tel-input/build/css/intlTelInput.min.css';

export default {
    name: 'PhoneInput',

    props: ['color', 'name', 'value', 'label', 'errorMessages', 'rerender'],

    data: () => ({
        // Phone input instance
        input: null,

        // Random DOM ID to use for phone input element
        fieldID: null,

        // Whether or not to lock from sending input event
        lock: false
    }),

    methods: {
        getFullNumber () {
            return this.input.getNumber();
        },

        isValid () {
            return this.input.isValidNumber();
        },

        blur () {
            if (!_.isEmpty(this.value)) {
                setTimeout(() => {
                    this.lock = true;
                    this.input.setNumber(this.getFullNumber().trim());
                    this.lock = false;
                }, 200);
            }

            this.emit('blur');
        },

        emit (event) {
            return this.$emit(event, this.getFullNumber().trim());
        },

        rerenderInput () {
            const phoneInput = document.querySelector(`#${this.fieldID}`);

            if (phoneInput) {
                setTimeout(() => {
                    phoneInput.focus();
                    phoneInput.blur();
                }, 700);
            }
        }
    },

    watch: {
        value (val) {
            this.lock = true;
            this.input.setNumber(_.isEmpty(val) ? '' : val);
            this.lock = false;
        },

        rerender (val) {
            if (val) this.rerenderInput();
        }
    },

    created () {
        this.fieldID = `phone-input-${_.random(1000, 9999)}`;
    },

    mounted () {
        const inputTel = this.$el.querySelector('input[type=tel]');

        this.input = intlTelInput(inputTel, {
            utilsScript       : 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/15.0.1/js/utils.js',
            nationalMode      : true,
            formatOnDisplay   : true,
            initialCountry    : 'us',
            preferredCountries: ['us']
        });

        inputTel.addEventListener('countrychange', () => {
            if (!this.lock) this.emit('input');
        });
    },

    beforeDestroy () {
        this.input.destroy();
    }
};
</script>
