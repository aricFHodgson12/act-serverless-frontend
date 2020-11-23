export default (axios) => ({
    async update(formData, companyId) {
        const { data } = await axios.put(`/companies/${companyId}`, formData);

        return data;
    },
 
    async uploadLogo(logo, companyId) {
        const { data } = await axios.post(`/companies/${companyId}/logo`, logo);

        return data;
    },
});
