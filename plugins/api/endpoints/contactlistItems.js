export default () => ({
    all: () => new Promise(resolve => {
        setTimeout(() => {
            resolve(
                [
                    {
                        'id'          : '5f7f5f6d07813fc79ff92af5',
                        'phone'        : '123-456-7890',
                        'first_name'    : 'Marion' ,
                        'last_name': 'White',
                        'email'        : 'marionwhite@gmail.com',
                        'status'    : 'Added Manually',
                    },
                    {
                        'id'          : '5f7f5f6d07813fc79ff92af6',
                        'phone'        : '845-971-2354',
                        'first_name'    : 'Billie' ,
                        'last_name': 'Wheeler',
                        'email'        : 'billiewheeler@gmail.com',
                        'status'    : 'Added Manually',
                    },
                    {
                        'id'          : '5f7f5f6d07813fc79ff92af7',
                        'phone'        : '887-486-5981',
                        'first_name'    : 'Roger' ,
                        'last_name': 'Carpenter',
                        'email'        : 'rogercarpenter@gmail.com',
                        'status'    : 'Added Manually',
                    },
                    {
                        'id'          : '5f7f5f6d07813fc79ff92af8',
                        'phone'        : '855-154-59586',
                        'first_name'    : 'John' ,
                        'last_name': 'Appleseed',
                        'email'        : '--',
                        'status'    : 'Opted-In',
                    },
                ]
            );
        }, 500);
    })
});