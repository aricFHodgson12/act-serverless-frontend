import * as types from './mutation-types';
import API from '@/plugins/api';

/**
 * Initial state
 */
export const state = () => ({
    company: {
        id: 'ada1ebab-c96e-460d-b846-9dd518b3298f',
        name: 'Company',
        email: 'user@act.test',
        logo: 'default',
        showName: true,
        ringtone: 'default',
        timezone: 'America/New_York',
        maskRecordUrl: false,
        disableCallRecording: false
    }
});

/**
 * Mutations
 */
export const mutations = {
    [types.SET_COMPANY](state, company) {
        state.company = company;
    }
};

/**
 * Actions
 */
export const actions = {
    async update({ commit, getters }, formData) {
        const company = getters.getCompany;

        const updatedCompany = await API.companies.update(formData, company.id);

        commit(types.SET_COMPANY, updatedCompany);
    },

    async uploadLogo({ commit, getters }, logo) {
        const logoData = new FormData();

        logoData.append('logo', logo, logo.name);

        const uploadedLogoName = await API.companies.uploadLogo(
            logoData,
            getters.getCompany.id
        );

        return uploadedLogoName;
    }
};

/**
 * Getters
 */
export const getters = {
    getCompany: state => state.company
};
