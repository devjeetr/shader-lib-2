
export interface Cache {
    update: (key: string, value: any) => void;
    delete: (key: string) => void;
    exists: (key: string) => boolean;
    getOrDefault: (key: string, defaultVal: any) => any;
  }
  
  const SimpleMapCache = () => {
    const cache = new Map<string, any>();
  
    return {
      update(key: string, value: any) {
        cache.set(key, value);
      },
      delete(key: string) {
        cache.delete(key);
      },
      exists(key: string) {
        return cache.has(key);
      },
      getOrDefault(key: string, value: any) {
        return cache.has(key) ? cache.get(key) : value;
      }
    };
  };
  
  export const ProgramCache = (): Cache => {
    return SimpleMapCache();
  };