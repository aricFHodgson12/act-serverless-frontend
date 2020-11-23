export default () => ({
    all: () => new Promise(resolve => {
        setTimeout(() => {
            resolve(
                [
                    {
                        'id'          : '5f7f5f6d07813fc79ff92af5',
                        'name'        : 'All Products',
                        'tracking_number' : '206-123-4567 (Primary)' ,
                        'contact_list': 'Existing Customers',
                        'status'        : 'Ongoing',
                        'progress'    : '0/15',
                        'last_run'      : 'Thu 3/26/ 2015 3:11 PM'
                    },
                    {
                        'id'          : '5f7f5f6d07813fc79ff92af6',
                        'name'        : 'Free Giveaway',
                        'tracking_number'      : '877-549-2647 (Billboards)',
                        'contact_list': 'Free Giveaway',
                        'status'        : 'Completed',
                        'progress'    : '32/32',
                        'last_run'      : 'Wed 3/20 2015 1:45 PM'
                    },
                    {
                        'id'          : '5f7f5f6d07813fc79ff92af7',
                        'name'        : 'SALE',
                        'tracking_number'      : '206-123-4567 (Primary)',
                        'contact_list': 'Sale',
                        'status'        : 'In Progress',
                        'progress'    : '10/26',
                        'last_run'      : 'Mon 2/15 2015 4:38 PM'
                    },
                    {
                        'id'          : '5f7f5f6d07813fc79ff92af8',
                        'name'        : 'NEWS',
                        'tracking_number'      : '206-123-4567 (Primary)',
                        'contact_list': 'News Subscribers',
                        'status'        : 'Completed',
                        'progress'    : '36/36',
                        'last_run'      : 'Wed 3/20 2015 1:45 PM'
                    },                                   
                ]
            );
        }, 500);
    })
});