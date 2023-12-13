const storagePrefix = 'storage_'

const storage = {
    setItem: (key: string, value: string) => {
        localStorage.setItem(storagePrefix + key, JSON.stringify(value))
    },
    getItem: (key: string) => {
        return JSON.parse( localStorage.getItem(storagePrefix + key) as string )
    },
    removeItem: (key: string) => {
        localStorage.removeItem(storagePrefix + key)
    }
}