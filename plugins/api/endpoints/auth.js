import axios from '@/plugins/api/axios';

export default () => ({
    async login(credentials) {
        const { data } = await axios.post('/auth/login', credentials);

        return data;
    },

    async logout() {
        await axios.post('/auth/logout');
    },

    async register(credentials) {
        const { data } = await axios.post('/auth/register', credentials);

        return data;
    },

    async confirmEmail(token) {
        const { data } = await axios.get(`/auth/confirm-email/${token}`);

        return data;
    },

    async forgotPassword(email) {
        await axios.post('/auth/forgot-password', email);
    },

    async checkPasswordReset(token) {
        await axios.get(`/auth/reset-password/${token}`);
    },

    async resetPassword(token, formData) {
        const { data } = await axios.post(
            `/auth/reset-password/${token}`,
            formData
        );

        return data;
    }
});
