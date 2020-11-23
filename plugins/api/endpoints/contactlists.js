export default () => ({
    all: () => new Promise(resolve => {
        setTimeout(() => {
            resolve(
                [
                    {
                        'id'          : '5f7f5f6d07813fc79ff92af5',
                        'name'        : 'Existing Customers',
                        'contacts'    : '24' ,
                        'broadcast_campaign': 'Invitation to subscribe',
                        'updated_at'        : 'Thu 3/26 2015 3:11 PM',
                        'created_by'    : 'Melvin Riley',
                    },
                    {
                        'id'          : '5f7f5f6d07813fc79ff92af6',
                        'name'        : 'New Subscribers',
                        'contacts'    : '15' ,
                        'broadcast_campaign': 'NEWS',
                        'updated_at'        : 'WED 3/20 2015 1:45 PM',
                        'created_by'    : 'Mike',
                    },
                    {
                        'id'          : '5f7f5f6d07813fc79ff92af7',
                        'name'        : 'Sale',
                        'contacts'    : '6' ,
                        'broadcast_campaign': 'SALE',
                        'updated_at'        : 'MON 2/15 2015 4:38 PM',
                        'created_by'    : 'Landon Harvey',
                    },
                    {
                        'id'          : '5f7f5f6d07813fc79ff92af8',
                        'name'        : 'Free Giveway',
                        'contacts'    : '14' ,
                        'broadcast_campaign': 'Fere Giveway',
                        'updated_at'        : 'Wed 3/20 2015 1:45 PM',
                        'created_by'    : 'Mike Terry',
                    },
                ]
            );
        }, 500);
    })
});