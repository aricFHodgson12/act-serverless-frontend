<template>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="4">
            <div class="text-center"></div>
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
                            v-if="serverError"
                            border="left"
                            color="red"
                            light
                            text
                            type="error"
                        >
                            {{ serverError }}
                        </v-alert>
                        <v-text-field
                            outlined
                            v-model="credentials.email"
                            :error-messages="emailErrors"
                            v-bind:label="$t('email')"
                            required
                            prepend-inner-icon="mdi-email"
                            @input="onInput('email')"
                            @blur="$v.credentials.email.$touch"
                        />
                        <v-text-field
                            outlined
                            :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show4 ? 'text' : 'password'"
                            v-model="credentials.password"
                            :error-messages="passwordErrors"
                            :counter="10"
                            v-bind:label="$t('password')"
                            required
                            prepend-inner-icon="mdi-key"
                            @click:append="show4 = !show4"
                            @input="onInput('password')"
                            @blur="$v.credentials.password.$touch"
                        />
                        <!-- <v-select
                            v-model="select"
                            :items="items"
                            :error-messages="selectErrors"
                            v-bind:label="$t('sub_domains')"
                            required
                            @change="$v.select.$touch"
                            @blur="$v.select.$touch"
                        /> -->
                        <v-checkbox
                            class="mt-0 pt-0"
                            v-model="credentials.rememberMe"
                            :label="$t('login.remember_me')"
                        />
                        <v-col class="text-right">
                            <v-btn
                                color="info"
                                text
                                @click="gotoForgotPassword"
                            >
                                {{ $t('login.forgotpassword') }}
                            </v-btn>

                            <v-btn
                                :disabled="loading"
                                :large="$vuetify.breakpoint.smAndUp"
                                :loading="loading"
                                color="success"
                                type="submit"
                            >
                                <v-icon left> mdi-account </v-icon>
                                {{ $t('login.submit') }}
                            </v-btn>
                        </v-col>
                        <v-col>
                            Don't have account?
                            <n-link to="/register" no-prefetch>{{
                                $t('register.submit')
                            }}</n-link>
                        </v-col>
                    </form>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapActions } from 'vuex';
import loginValidatorMixin from '@/validators/loginValidator.mixin';

export default {
    mixins: [loginValidatorMixin],

    layout: 'no-header',

    data: () => ({
        credentials: {
            password: '',
            email: '',
            rememberMe: false
        },
        select: null,
        show4: false,
        // items: ['http://app.analyticcalltracking.com/'],
        loading: false
    }),

    methods: {
        ...mapActions({ login: 'auth/login' }),

        gotoForgotPassword() {
            this.$router.push('/forgot-password');
        },

        onInput(inputName) {
            this.$v.credentials[inputName].$touch();
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

                await this.login(this.credentials);

                this.$router.push({
                    path: '/calls'
                });
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
