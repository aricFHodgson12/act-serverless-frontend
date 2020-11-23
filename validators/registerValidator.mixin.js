import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';
import abstractValidatorMixin from '@/validators/abstractValidator.mixin';

export default {
    mixins: [abstractValidatorMixin],

    validations: {
        credentials: {
            password: { required, minLength: minLength(8) },
            confirmPassword: {
                required,
                minLength: minLength(8),
                sameAs: sameAs('password')
            },
            email: { required, email },
            firstName: { required },
            lastName: { required },
            phoneNumber: { required },
            companyName: { required }
        }
    },

    computed: {
        confirmPasswordErrors() {
            const errors = [];

            if (!this.$v.credentials.confirmPassword.$dirty) {
                return [
                    ...errors,
                    ...this.checkValidationErrors('confirmPassword')
                ];
            }

            if (!this.$v.credentials.confirmPassword.minLength) {
                errors.push(this.$t('login.password_invalid'));
            }

            if (!this.$v.credentials.confirmPassword.required) {
                errors.push(this.$t('login.password_required'));
            }

            if (!this.$v.credentials.confirmPassword.sameAs) {
                errors.push(this.$t('register.password_no_match'));
            }

            return errors;
        },

        firstNameErrors() {
            const errors = [];

            if (!this.$v.credentials.firstName.$dirty) {
                return [...errors, ...this.checkValidationErrors('firstName')];
            }

            if (!this.$v.credentials.firstName.required) {
                errors.push(this.$t('register.first_name_required'));
            }

            return errors;
        },

        lastNameErrors() {
            const errors = [];

            if (!this.$v.credentials.lastName.$dirty) {
                return [...errors, ...this.checkValidationErrors('lastName')];
            }

            if (!this.$v.credentials.lastName.required) {
                errors.push(this.$t('register.last_name_required'));
            }

            return errors;
        },

        passwordErrors() {
            const errors = [];

            if (!this.$v.credentials.password.$dirty) {
                return [...errors, ...this.checkValidationErrors('password')];
            }

            if (!this.$v.credentials.password.minLength) {
                errors.push(this.$t('login.password_invalid'));
            }

            if (!this.$v.credentials.password.required) {
                errors.push(this.$t('login.password_required'));
            }

            return errors;
        },

        emailErrors() {
            const errors = [];

            if (!this.$v.credentials.email.$dirty) {
                return [...errors, ...this.checkValidationErrors('email')];
            }

            if (!this.$v.credentials.email.email) {
                errors.push(this.$t('login.email_invalid'));
            }

            if (!this.$v.credentials.email.required) {
                errors.push(this.$t('login.email_required'));
            }

            return errors;
        },

        companyNameErrors() {
            const errors = [];

            if (!this.$v.credentials.companyName.$dirty) {
                return [
                    ...errors,
                    ...this.checkValidationErrors('companyName')
                ];
            }

            if (!this.$v.credentials.companyName.required) {
                errors.push(this.$t('register.company_name_required'));
            }

            return errors;
        }
    }
};
