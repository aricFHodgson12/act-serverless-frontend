export default () => ({
    all: () => new Promise(resolve => {
        setTimeout(() => {
            resolve(
                [
                    {
                        'id'          : '5f7f5f6d07813fc79ff92af5',
                        'source'        : '12 AM',
                        'total_calls'      : 98,
                        'percent_value'    : 13,
                        'new_calls'     : 73,
                        'repeated_calls'        :     28,
                        'avg_duration'          : 136,
                    },
                    {
                        'id'          : '5f7f5f6d07813fc79ff9h7s5',
                        'source'        : '12 AM',
                        'total_calls'      : 261,
                        'percent_value'    : 26,
                        'new_calls'     : 69,
                        'repeated_calls'        :     192,
                        'avg_duration'          : 148,
                    },
                    {
                        'id'          : '5f7f5f7f4t813fc79ff9h7s5',
                        'source'        : '1 AM',
                        'total_calls'      : 86,
                        'percent_value'    : 12,
                        'new_calls'     : 42,
                        'repeated_calls'        :     45,
                        'avg_duration'          : 109,
                    },
                    {
                        'id'          : '5f7f5f6d388e087521eee342',
                        'source'        : '2 AM',
                        'total_calls'      : 208,
                        'percent_value'    : 24,
                        'new_calls'     : 14,
                        'repeated_calls'        :     189,
                        'avg_duration'          : 124,
                    },
                    {
                        'id'          : '5f7f5f6d55301d193898bd03',
                        'source'        : '3 AM',
                        'total_calls'      : 140,
                        'percent_value'    : 16,
                        'new_calls'     : 15,
                        'repeated_calls'        :     126,
                        'avg_duration'          : 183,
                    },
                    {
                        'id'          : '5f7f5f6d55301d193898bd03',
                        'source'        : '4 AM',
                        'total_calls'      : 279,
                        'percent_value'    : 28,
                        'new_calls'     : 28,
                        'repeated_calls'        :     281,
                        'avg_duration'          : 157,
                    },
                    {
                        'id'          : '5f7f5f6d55301d193898bd03',
                        'source'        : '5 AM',
                        'total_calls'      : 279,
                        'percent_value'    : 28,
                        'new_calls'     : 28,
                        'repeated_calls'        :     281,
                        'avg_duration'          : 157,
                    }                                                            
                ]
            );
        }, 2000);
    })
});