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
                            {{ $t('register.success') }}
                        </v-alert>
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
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                    v-model="credentials.firstName"
                                    v-bind:label="$t('register.first_name')"
                                    :error-messages="firstNameErrors"
                                    outlined
                                    required
                                    @blur="$v.credentials.firstName.$touch"
                                    @input="onInput('firstName')"
                                />
                            </v-col>

                            <v-col cols="12" sm="6">
                                <v-text-field
                                    v-model="credentials.lastName"
                                    v-bind:label="$t('register.last_name')"
                                    :error-messages="lastNameErrors"
                                    outlined
                                    required
                                    @blur="$v.credentials.lastName.$touch"
                                    @input="onInput('lastName')"
                                />
                            </v-col>

                            <v-col cols="12" sm="6">
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
                            </v-col>

                            <v-col cols="12" sm="6">
                                <v-text-field
                                    v-model="credentials.phoneNumber"
                                    v-bind:label="$t('register.phone_number')"
                                    outlined
                                    required
                                    @input="onInput('phoneNumber')"
                                />
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                    outlined
                                    :append-icon="
                                        show4 ? 'mdi-eye' : 'mdi-eye-off'
                                    "
                                    :type="show4 ? 'text' : 'password'"
                                    v-model="credentials.password"
                                    :error-messages="passwordErrors"
                                    v-bind:label="$t('password')"
                                    required
                                    prepend-inner-icon="mdi-key"
                                    @click:append="show4 = !show4"
                                    @input="onInput('password')"
                                    @blur="$v.credentials.password.$touch"
                                />
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                    outlined
                                    :append-icon="
                                        show2 ? 'mdi-eye' : 'mdi-eye-off'
                                    "
                                    :type="show2 ? 'text' : 'password'"
                                    v-model="credentials.confirmPassword"
                                    :error-messages="confirmPasswordErrors"
                                    v-bind:label="
                                        $t('register.confirm_password')
                                    "
                                    required
                                    prepend-inner-icon="mdi-key"
                                    @click:append="show2 = !show2"
                                    @input="onInput('confirmPassword')"
                                    @blur="
                                        $v.credentials.confirmPassword.$touch
                                    "
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    outlined
                                    v-model="credentials.companyName"
                                    :error-messages="companyNameErrors"
                                    v-bind:label="$t('register.company_name')"
                                    required
                                    prepend-inner-icon="mdi-email"
                                    @input="onInput('companyName')"
                                    @blur="$v.credentials.companyName.$touch"
                            /></v-col>
                        </v-row>

                        <v-row>
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
                                    <v-icon left> mdi-account </v-icon>
                                    {{ $t('register.submit') }}
                                </v-btn>
                            </v-col>
                        </v-row>
                    </form>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapActions } from 'vuex';
import { required, minLength, email } from 'vuelidate/lib/validators';
import PhoneInput from '@/components/common/PhoneInput';
import registerValidatorMixin from '@/validators/registerValidator.mixin';

export default {
    mixins: [registerValidatorMixin],

    layout: 'no-header',

    components: {
        PhoneInput
    },

    data: () => ({
        defaultCredentials: {
            password: '',
            confirmPassword: '',
            phoneNumber: '',
            email: '',
            firstName: '',
            lastName: '',
            companyName: ''
        },
        credentials: {},
        show4: false,
        show2: false,
        loading: false,
        success: false
    }),

    mounted() {
        this.credentials = { ...this.defaultCredentials };
    },

    methods: {
        ...mapActions({ register: 'auth/register' }),

        gotoLogin() {
            this.$router.push('/login');
        },

        resetForm() {
            this.credentials = {};
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

                await this.register(this.credentials);

                this.credentials = { ...this.defaultCredentials };
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
