import { required, minLength, email } from 'vuelidate/lib/validators';
import abstractValidatorMixin from '@/validators/abstractValidator.mixin';

export default {
    mixins: [abstractValidatorMixin],

    validations: {
        credentials: {
            password: { required, minLength: minLength(8) },
            email: { required, email }
        }
    },

    computed: {
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
        }
    }
};
