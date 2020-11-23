import {user} from '@/stubs';

export default () => ({
    me: () => new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: {
                    user
                }
            });
        }, 100);
    })
});
