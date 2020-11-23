import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';
import abstractValidatorMixin from '@/validators/abstractValidator.mixin';

export default {
    mixins: [abstractValidatorMixin],

    validations: {
        formData: {
            password: { required, minLength: minLength(8) },
            confirmPassword: {
                required,
                minLength: minLength(8),
                sameAs: sameAs('password')
            }
        }
    },

    computed: {
        confirmPasswordErrors() {
            const errors = [];

            if (!this.$v.formData.confirmPassword.$dirty) {
                return [
                    ...errors,
                    ...this.checkValidationErrors('confirmPassword')
                ];
            }

            if (!this.$v.formData.confirmPassword.minLength) {
                errors.push(this.$t('login.password_invalid'));
            }

            if (!this.$v.formData.confirmPassword.required) {
                errors.push(this.$t('login.password_required'));
            }

            if (!this.$v.formData.confirmPassword.sameAs) {
                errors.push(this.$t('register.password_no_match'));
            }

            return errors;
        },

        passwordErrors() {
            const errors = [];

            if (!this.$v.formData.password.$dirty) {
                return [...errors, ...this.checkValidationErrors('password')];
            }

            if (!this.$v.formData.password.minLength) {
                errors.push(this.$t('login.password_invalid'));
            }

            if (!this.$v.formData.password.required) {
                errors.push(this.$t('login.password_required'));
            }

            return errors;
        }
    }
};
