export default function({ store, redirect }) {
    if (store.getters['auth/user']) {
        return redirect('/calls');
    }
}
