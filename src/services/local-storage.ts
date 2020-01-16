export type UpdateFunc = (o: Object) => Object

export function lsset(key: string, value: Object) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function lsget<T>(key: string): T | null {
    const json = localStorage.getItem(key)
    return JSON.parse(json!)
}