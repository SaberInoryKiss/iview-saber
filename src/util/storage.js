/*
 * @Author: 夏开尧
 * @Description: file content
 * @Date: 2020-05-21 09:40:56
 * @LastEditTime: 2020-06-15 09:29:43
 * @LastEditors: 夏开尧
 * @UpdateLogs: logs
 */ 
const storage = sessionStorage

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