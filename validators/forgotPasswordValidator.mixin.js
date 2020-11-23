import { required, email } from 'vuelidate/lib/validators';
import abstractValidatorMixin from '@/validators/abstractValidator.mixin';

export default {
    mixins: [abstractValidatorMixin],

    validations: {
        email: { required, email }
    },

    computed: {
        emailErrors() {
            const errors = [];

            if (!this.$v.email.$dirty) {
                return errors;
            }

            if (!this.$v.email.email) {
                errors.push(this.$t('login.email_invalid'));
            }

            if (!this.$v.email.required) {
                errors.push(this.$t('login.email_required'));
            }

            return errors;
        }
    }
};
