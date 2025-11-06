Soru 1: İki farklı türde (sayı ve yazı gibi) diziyi alıp tek bir dizide birleştiren jenerik bir mergeArrays fonksiyonu yazıldı.

Soru 2: Bir aracın Car mı yoksa Truck mı olduğunu anlamak için in operatörü (Tip Koruyucusu) kullanıldı. Bu sayede araca özel özelliklere (kapasite veya yük) güvenle erişildi.

Soru 3: Logger sınıfı yazıldı. logHistory dizisi private yapıldı, böylece dışarıdan doğrudan erişilemedi. Geçmişi okumak için getHistory metodu eklendi.

Soru 4: Bir nesnenin (User) özelliğini (name) güvenli bir şekilde almak için keyof kullanıldı. Bu, var olmayan bir özelliği ('adres' gibi) çağırmayı derleme anında engeller.

Soru 5: search fonksiyonu için "Aşırı Yükleme" (Overloading) tanımlandı. Fonksiyon ID (number) ile çağrılırsa tek bir kullanıcı, isim (string) ile çağrılırsa bir kullanıcı dizisi döndürür.

Soru 6: MemoryCache adında jenerik bir sınıf yazıldı. Bu sınıf, <number> veya <string> gibi içine aldığı tipe göre farklı verileri hafızada (Map) saklayabilir.

Soru 7: updateUser fonksiyonu, Partial<User> tipini kullanarak bir kullanıcının sadece bazı özelliklerini (örn: sadece 'name') güncellemesini sağladı. Çıktı Readonly yapıldı.

Soru 8: sum fonksiyonu, ...numbers (rest parametresi) kullanarak kaç tane sayı gönderilirse gönderilsin hepsini toplayacak şekilde yazıldı.

Soru 9: Shape (Şekil) adında soyut (abstract) bir sınıf ve ondan türeyen Circle (Daire) sınıfı yazıldı. Circle, Shape'in zorunlu kıldığı getArea (Alan Hesapla) metodunu uygulamak zorunda kaldı.

Soru 10: MathHelper sınıfına, new ile örnek oluşturmadan doğrudan (MathHelper.PI) erişilebilen static (statik) özellikler (PI) ve metotlar (çevre hesaplama) eklendi.

Soru 11: UnwrapPromise adında bir koşullu tip yazıldı. Bu tip, bir Promise'in içindeki asıl tipi (örn: Promise<string> ise string tipini) ortaya çıkarır.

Soru 12: GetReturnType adında bir tip yazıldı. infer kelimesi kullanılarak bir fonksiyonun dönüş tipinin ne olduğunu (örn: string veya number) otomatik olarak algıladı.

Soru 13: CreateGetters tipi yazıldı. Bu tip, bir nesnenin id: number gibi özelliklerini getId: () => number gibi getter metotlarına dönüştürmek için Mapped Types ve Template Literals kullandı.

Soru 14: DeepReadonly adında rekürsif (kendini çağıran) bir tip yazıldı. Bu tip, standart Readonly'nin aksine, iç içe geçmiş nesnelerin bile özelliklerini salt okunur (değiştirilemez) yapar.

Soru 15: PickByValueType tipi yazıldı. Mapped Types kullanarak bir nesnenin özelliklerini, değerlerinin tipine göre (örn: sadece string olanlar veya sadece number olanlar) filtreledi.

Soru 16: UserID ve PostID gibi "Branded" (Markalı) tipler oluşturuldu. İkisi de temelde string olmasına rağmen, TypeScript'in bu iki farklı ID'yi karıştırması (birbirine ataması) engellendi.

Soru 17: FilterUnion tipi yazıldı. Dağıtılmış koşullu tipler kullanarak, bir tipler birliğinden (Union) istenmeyen tipleri (örn: string | number | boolean içinden string'i çıkar) ayıkladı.

Soru 18: LastParameter tipi yazıldı. infer kullanarak bir fonksiyonun parametre listesindeki son parametrenin tipini buldu.

Soru 19: Flatten tipi yazıldı. Bir tipin dizi olup olmadığını kontrol etti; eğer diziyse (string[]), içindeki eleman tipini (string) döndürdü; değilse tipi olduğu gibi bıraktı.

Soru 20: ParseRouteParams adında karmaşık ve rekürsif bir tip yazıldı. Template Literals ve infer kullanarak, "/users/:id" gibi bir rota string'ini { id: string } gibi bir parametre nesnesine dönüştürdü.
