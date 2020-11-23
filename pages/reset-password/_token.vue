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
                            {{ $t('resetpassword.success') }}
                        </v-alert>
                        <v-text-field
                            v-model="formData.password"
                            v-bind:label="$t('password')"
                            :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                            :error-messages="passwordErrors"
                            :type="show4 ? 'text' : 'password'"
                            outlined
                            prepend-inner-icon="mdi-key"
                            required
                            @blur="$v.formData.password.$touch"
                            @click:append="show4 = !show4"
                            @input="onInput('password')"
                        />
                        <v-text-field
                            v-model="formData.confirmPassword"
                            v-bind:label="$t('register.confirm_password')"
                            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                            :error-messages="confirmPasswordErrors"
                            :type="show2 ? 'text' : 'password'"
                            outlined
                            prepend-inner-icon="mdi-key"
                            required
                            @blur="$v.formData.confirmPassword.$touch"
                            @click:append="show2 = !show2"
                            @input="onInput('confirmPassword')"
                        />
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
import resetPasswordValidator from '@/validators/resetPasswordValidator.mixin';

export default {
    mixins: [resetPasswordValidator],

    layout: 'no-header',

    data: () => ({
        formData: {
            password: '',
            confirmPassword: ''
        },
        token: '',
        loading: false,
        success: false,
        show4: false,
        show2: false
    }),

    async mounted() {
        try {
            const { token } = this.$route.params;

            await this.checkPasswordReset(token);

            this.token = token;
        } catch (error) {
            this.$router.push({
                path: '/login'
            });
        }
    },

    methods: {
        ...mapActions({
            checkPasswordReset: 'auth/checkPasswordReset',
            resetPassword: 'auth/resetPassword'
        }),

        gotoLogin() {
            this.$router.push('/login');
        },

        onInput(inputName) {
            this.$v.formData[inputName].$touch();
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

                await this.resetPassword({
                    token: this.token,
                    formData: this.formData
                });

                this.success = true;

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
