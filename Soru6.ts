class MemoryCache<T> {
    private cache: Map<string, T> = new Map();

    set(key: string, value: T) {
        this.cache.set(key, value);
    }

    get(key: string): T | undefined {
        return this.cache.get(key);
    }

    clear() {
        this.cache.clear();
    }
}

const numberCache = new MemoryCache<number>();
numberCache.set('yas', 30);
console.log(`Yaş: ${numberCache.get('yas')}`);

const stringCache = new MemoryCache<string>();
stringCache.set('isim', 'Mehmet');
numberCache.clear();
console.log(`Isim: ${stringCache.get('isim')}`);
console.log(`Yaş (temizlendi): ${numberCache.get('yas')}`);

export {};