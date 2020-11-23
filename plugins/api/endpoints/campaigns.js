export default () => ({
    all: () => new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {id: 1, name: 'Google AdWords'},
                {id: 2, name: 'Facebook'},
                {id: 3, name: 'Billboards'},
                {id: 4, name: 'Newspapers'},
                {id: 5, name: 'Keyword Tracking'}
            ]);
        }, 1000);
    })
});
