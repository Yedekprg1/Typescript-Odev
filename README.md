
Soru 1: Jenerik Dizi Birleştirme 
mergeArrays fonksiyonu, <T, U> olmak üzere iki farklı jenerik tip alacak şekilde tanımlanmıştır. Spread operatörü (...) kullanılarak bu iki dizi tek bir (T | U)[] tipinde diziye birleştirilmiştir.

Soru 2: Tipp Koruyucuları 
useVehicle fonksiyonu, Vehicle tipini (Car | Truck) daraltmak için in operatörünü kullanmıştır. if ('drive' in vehicle) kontrolü, TypeScript'e bu bloğun Car tipinde olduğunu kanıtlar.

Soru 3: Sınıf ve Erişim Belirleyiciler 
Logger sınıfı, logHistory dizisini private olarak tanımlayarak dışarıdan erişimi engellemiştir. Kayıtlara erişim, public bir metot olan getHistory() aracılığıyla kontrollü bir şekilde sağlanmıştır.

Soru 4: keyof ile Jenerik Fonksiyon 
getProperty fonksiyonu, <T, K extends keyof T> jeneriklerini kullanmıştır. keyof T, bir nesnenin anahtarlarını tip olarak almayı sağlar, böylece fonksiyona geçersiz bir anahtar (key) verilmesi engellenir.

Soru 5: Fonksiyon Aşırı Yüklemesi 
search fonksiyonu için iki farklı imza tanımlanmıştır: biri id: number alıp tek bir User döndüren, diğeri name: string alıp User[] dizisi döndüren. Ana implementasyon, typeof kontrolü ile bu iki durumu yönetir.

Soru 6: Jenerik Sınıf Implementasyonu 
MemoryCache<T> sınıfı, jenerik bir tip (T) alarak implemente edilmiştir. set, get ve clear metotları, Map<string, T> kullanarak verileri bellekte yönetir.

Soru 7: Partial ile Güncelleme Fonksiyonu 
updateUser fonksiyonu, ikinci parametre olarak Partial<User> almıştır. Bu utility tip, User arayüzünün tüm özelliklerini opsiyonel yapar. Fonksiyon, ... (spread) operatörü ile eski ve yeni veriyi birleştirir ve Readonly<User> olarak döndürür.

Soru 8: Rest Parametreleri 
sum fonksiyonu, ...numbers: number[] (rest parametresi) kullanarak aldığı tüm sayısal argümanları tek bir dizi olarak toplar. reduce metodu ile bu dizinin toplamı hesaplanır.

Soru 9: Soyut Sınıf 
Shape sınıfı, abstract olarak tanımlanmış ve getArea adında soyut bir metot içermiştir. Circle sınıfı, Shape'i extends ederek getArea metodunu implemente etmek (uygulamak) zorunda kalmıştır.

Soru 10: Statik Özellikler ve Metotlar 
MathHelper sınıfı, static PI özelliğini ve static calculateCircumference metodunu tanımlamıştır. Statik oldukları için, sınıfın bir örneğini (new MathHelper()) oluşturmadan doğrudan sınıf adı üzerinden (MathHelper.PI) erişilebilirler.

Soru 11: Koşullu Tipler 
UnwrapPromise<T> tipi, T extends Promise<infer U> ? U : T koşullu tipini kullanmıştır. Eğer T bir Promise ise, infer U ile içindeki tipi (U) yakalar ve döndürür; değilse T'yi olduğu gibi bırakır.

Soru 12: infer ile Fonksiyon Dönüş Tipi 
GetReturnType<T> tipi, T extends (...args: any[]) => infer R ? R : any olarak tanımlanmıştır. infer R, fonksiyonun dönüş tipini (R) yakalamak için kullanılır.

Soru 13: Mapped Types ve Template Literals 
CreateGetters<T> tipi, Mapped Type ([K in keyof T]) ve Template Literal (get${Capitalize<string & K>}) kullanarak id: number gibi bir özelliği getId: () => number gibi bir getter metoduna dönüştürmüştür.

Soru 14: Rekürsif Tipler 
DeepReadonly<T> tipi, rekürsif (kendini çağıran) bir yapıdadır. Readonly utility tipini kullanır ve nesnenin içindeki her özelliğin object olup olmadığını kontrol eder. Eğer özellik de bir nesne ise, DeepReadonly'i tekrar çağırarak iç içe salt okunurluk sağlar.

Soru 15: Mapped Types ile Filtreleme 
PickByValueType<T, V> tipi, Mapped Type ([K in keyof T]) ve koşullu tip (T[K] extends V ? K : never) kullanarak bir nesnenin özelliklerini değer tiplerine göre filtrelemiştir.

Soru 16: Nominal Tipleme 
Brand<T, U> tipi, UserID ve PostID gibi tipler oluşturmak için kullanılmıştır. İkisi de temelde string olsa da, eklenen __brand: U özelliği sayesinde TypeScript bu iki tipin birbirine atanmasını (karıştırılmasını) engeller.

Soru 17: Dağıtılmış Koşullu Tipler 
FilterUnion<T, U> tipi, T extends U ? never : T yapısını kullanmıştır. T bir Union (birleşim) tipi olduğunda, bu koşul her bir elemana dağıtılır (Distributive). T'nin U'ya atanabilen kısımları never (yok) edilerek filtrelenir.

Soru 18: infer ile Fonksiyon Parametresi 
LastParameter<T> tipi, T extends (...args: [...any[], infer L]) => any ? L : never olarak tanımlanmıştır. ...any[] ile önceki tüm parametreler atlanır ve infer L ile son parametrenin tipi yakalanır.

Soru 19: infer ile Dizi Elemanı Tipi 
Flatten<T> tipi, T extends (infer U)[] ? U : T koşulunu kullanmıştır. T bir dizi ise, infer U ile dizinin içindeki eleman tipini (U) yakalar; değilse T'yi olduğu gibi bırakır.

Soru 20: Template Literal Parsing 
ParseRouteParams<T> tipi, rekürsif olarak çalışan karmaşık bir koşullu tiptir. Template Literals (${...}) ve infer kullanarak /:id gibi bir rota parçasını { id: string } gibi bir nesne tipine dönüştürür.
