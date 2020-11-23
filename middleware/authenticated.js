export default function({ store, redirect }) {
    // If the user is null then it is unauthenticated
    if (!store.getters['auth/user']) {
        return redirect('/login');
    }
}
