import axios from '@/plugins/api/axios';
import auth      from '@/plugins/api/endpoints/auth.js';
import calls     from '@/plugins/api/endpoints/calls';
import autodialer     from '@/plugins/api/endpoints/autodialer';
import contactlists     from '@/plugins/api/endpoints/contactlists';
import contactlistItems     from '@/plugins/api/endpoints/contactlistItems';
import campaigns from '@/plugins/api/endpoints/campaigns';
import sms       from '@/plugins/api/endpoints/sms';
import list       from '@/plugins/api/endpoints/list';
import list_day       from '@/plugins/api/endpoints/list_day';
import users     from '@/plugins/api/endpoints/users';
import companies from '@/plugins/api/endpoints/companies';

const API = {
    auth     : auth(axios),
    calls    : calls(axios),
    campaigns: campaigns(axios),
    sms      : sms(axios),
    list      : list(axios),
    list_day      : list_day(axios),
    users    : users(axios),
    autodialer    : autodialer(axios),
    companies: companies(axios),
    contactlists: contactlists(axios),
    contactlistItems: contactlistItems(axios)
};

export default API;
