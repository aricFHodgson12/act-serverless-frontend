export default {
    data() {
        return { serverError: '', validationErrors: [] };
    },

    methods: {
        checkErrorsFromServer(response) {
            if (response) {
                if (response.status === 400) {
                    this.validationErrors = response.data.errors;
                    this.serverError = '';
                } else if (response.status === 401) {
                    this.serverError = 'Wrong credentials...';
                } else if (response.status === 500) {
                    this.serverError = 'Something went wrong...';
                }
            }
        },

        clearServerErrors(inputName) {
            this.serverError = '';
            this.validationErrors = this.validationErrors.filter(
                error => error.param !== inputName
            );
        },

        checkValidationErrors(inputName) {
            const errors = [];

            for (const error of this.validationErrors) {
                if (error.param === inputName) {
                    errors.push(error.message);
                }
            }

            return errors;
        }
    }
};
