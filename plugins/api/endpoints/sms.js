export default () => ({
    all: () => new Promise(resolve => {
        setTimeout(() => {
            resolve(
                [
                    {
                        'id'          : '5f7f5f6d07813fc79ff92af5',
                        'date'        : 'Sat 10/03 2020 5:32 PM',
                        'source'      : 'Geostele Dent Repair',
                        'campaign'    : '__geostele__',
                        'clients'     : null,
                        'from'        : '(816) 577-2007',
                        'to'          : '(839) 488-2154',
                        'contents'    : 'Hi, I just left a phone message. This is the dent. Are you available' +
                            ' tomorrow?',
                        'call_caching': false
                    },
                    {
                        'id'          : '5f7f5f6d07813fc79ff9h7s5',
                        'date'        : 'Fri 10/02 2020 9:10 AM',
                        'source'      : 'Tubesys Dent Repair',
                        'campaign'    : 'tubesys_dr_camp',
                        'clients'     : null,
                        'from'        : '(913) 473-2679',
                        'to'          : '(965) 425-3665',
                        'contents'    : 'I sent you my email, did you received?',
                        'call_caching': false
                    },
                    {
                        'id'          : '5f7f5f7f4t813fc79ff9h7s5',
                        'date'        : 'Thu 10/01 2020 1:31 PM',
                        'source'      : 'Scenty Dent Repair',
                        'campaign'    : null,
                        'clients'     : null,
                        'from'        : '(894) 473-3212',
                        'to'          : '(808) 422-3550',
                        'contents'    : 'Your invoice has been sent.',
                        'call_caching': false
                    },
                    {
                        'id'          : '5f7f5f6d388e087521eee342',
                        'date'        : 'Thu 10/01 2020 1:41 PM',
                        'source'      : 'Kineticut Dent Repair',
                        'campaign'    : 'Kineticut Dent Repair',
                        'clients'     : null,
                        'from'        : '(807) 441-2088',
                        'to'          : '(865) 480-3574',
                        'contents'    : 'Call me as soon as you can...',
                        'call_caching': false
                    },
                    {
                        'id'          : '5f7f5f6d55301d193898bd03',
                        'date'        : 'Thu 10/01 2020 1:41 PM',
                        'source'      : 'Senmei Dent Repair',
                        'campaign'    : null,
                        'clients'     : null,
                        'from'        : '(808) 513-3708',
                        'to'          : '(970) 436-2742',
                        'contents'    : 'Alert: Your PayPal account has been limited because...',
                        'call_caching': false
                    }
                ]
            );
        }, 2000);
    })
});