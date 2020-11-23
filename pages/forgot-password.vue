<template>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="4">
            <div class="text-center"> </div>
            <v-card outlined>
                <v-card-title class="headline">
                    <img src="/analytic-logo.png" alt="Logo" class="mb-5" />
                </v-card-title>
                <v-card-text> </v-card-text>
                <v-card-actions
                    style="display: block"
                    :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }"
                >
                    <form @submit.prevent="submit">
                        <v-alert
                            v-if="success"
                            border="left"
                            color="green"
                            light
                            text
                            type="success"
                        >
                            {{ $t('forgotpassword.success') }}
                        </v-alert>
                        <v-text-field
                            v-model="email"
                            v-bind:label="$t('email')"
                            :error-messages="emailErrors"
                            outlined
                            prepend-inner-icon="mdi-email"
                            required
                            @blur="$v.email.$touch"
                            @input="onInput('email')"
                        ></v-text-field>
                        <v-col class="text-right">
                            <v-btn color="info" text @click="gotoLogin">
                                {{ $t('forgotpassword.login') }}
                            </v-btn>
                            <v-btn
                                :disabled="loading"
                                :large="$vuetify.breakpoint.smAndUp"
                                :loading="loading"
                                color="success"
                                type="submit"
                            >
                                <v-icon left> mdi-lock </v-icon>
                                {{ $t('forgotpassword.submit') }}
                            </v-btn>
                        </v-col>
                    </form>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapActions } from 'vuex';
import forgotPasswordValidator from '@/validators/forgotPasswordValidator.mixin';

export default {
    mixins: [forgotPasswordValidator],

    layout: 'no-header',

    data: () => ({
        email: '',
        loading: false,
        success: false
    }),

    methods: {
        ...mapActions({ forgotPassword: 'auth/forgotPassword' }),

        gotoLogin() {
            this.$router.push('/login');
        },

        onInput(inputName) {
            this.$v[inputName].$touch();
            this.clearServerErrors(inputName);
        },

        async submit() {
            try {
                this.loading = true;

                this.$v.$touch();

                if (this.$v.$invalid) {
                    return;
                }

                this.$v.$reset();

                await this.forgotPassword({ email: this.email });

                this.success = true;
            } catch (error) {
                if (error.response) {
                    this.checkErrorsFromServer(error.response);
                }
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>