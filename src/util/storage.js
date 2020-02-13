const storage = localStorage

export default {
    set(key,val) {
        storage.setItem(key,val)
    },
    get(key) {
        return storage.getItem(key)
    },
    remove(key) {
        storage.removeItem(key)
    }
}