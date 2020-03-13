
const cache = new Map();


const cacheItem = (id: string, value: any) => {
    cache.set(id, value);
};

const getFromCache = (id: string) => cache.get(id);