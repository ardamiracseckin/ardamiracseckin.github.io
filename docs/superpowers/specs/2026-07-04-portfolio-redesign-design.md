# Portfolio Yeniden Tasarımı — Tasarım Belgesi

**Tarih:** 2026-07-04
**Site:** https://ardamiracseckin.github.io/
**Repo:** ardamiracseckin/ardamiracseckin.github.io

## Amaç

Mevcut tek dosyalık, GitHub görünümlü portfolyoyu modern koyu temalı, iki dilli (TR/EN),
animasyonlu ve daha etkileyici bir portfolio sitesine dönüştürmek. Site GitHub Pages
üzerinde yayınlanmaya devam edecek.

## Teknoloji Seçimi

Sade HTML + CSS + JavaScript (framework yok, derleme adımı yok). Gerekçe: GitHub Pages'e
doğrudan yüklenir, kullanıcı (başlangıç seviyesi) kodu anlayıp düzenleyebilir, portfolio
için fazlasıyla yeterli.

## Dosya Yapısı

```
index.html    — sayfa iskeleti
style.css     — tüm görsel tasarım
script.js     — GitHub API, dil değiştirme, animasyonlar, çeviri metinleri
cv_foto.jpg   — mevcut profil fotoğrafı (aynen korunur)
```

## Sayfa Bölümleri (yukarıdan aşağıya)

1. **Üst menü (sticky):** Bölüm linkleri (Hakkımda, Yetenekler, Projeler, İletişim) +
   TR/EN dil düğmesi. Kaydırınca üstte sabit kalır, yarı saydam bulanık arka plan.
2. **Giriş (Hero):** Büyük puntolarla isim; "Software Engineering Student | Backend & AI
   Developer" alt başlığı harf harf yazılan (typing) animasyonla. Arka planda yavaş
   hareket eden mor-mavi degrade ışıltı. Profil fotoğrafı parlayan çerçeveyle.
3. **Hakkımda:** Mevcut tanıtım metninin daha akıcı hali, TR ve EN olarak yeniden yazılır.
4. **Yetenekler:** 3 kategorili kartlar, hover'da parlama efekti:
   - *Programlama Dilleri:* Python, Java, C#, JavaScript, HTML5 & CSS3
   - *Yapay Zeka & Veri:* NLP, OCR, Derin Öğrenme, Makine Öğrenmesi, Jupyter
   - *Araçlar & Kavramlar:* Git & GitHub, OOP, IoT & Ağ Simülasyonu, AI destekli
     geliştirme (Claude, Gemini, GitHub Copilot)
   - Liste kolayca genişletilebilir olmalı (script.js veya HTML içinde düz liste).
5. **Projeler — iki katman:**
   - *Öne çıkanlar (elle yazılmış):* PriceGuard, Smart-Stadium-IoT-Simulation,
     English-News-Classification, Two-Pass-Compiler-Project. Büyük kartlar, detaylı
     TR/EN açıklamalar (README'lerden yararlanılarak yazılacak), kullanılan teknolojiler
     etiket olarak, GitHub linki.
   - *Diğer projeler (otomatik):* GitHub API'den `users/ardamiracseckin/repos` çekilir;
     öne çıkan 4 proje, profil reposu ve site reposu hariç tutulur. Yeni public repo
     otomatik görünür. README açılır penceresi (modal, marked.js ile) korunur.
6. **İletişim:** E-posta (ardamirac.seckin@gmail.com), GitHub, LinkedIn büyük şık
   düğmelerle.
7. **Alt bilgi (footer):** Kısa telif satırı.

## Görsel Tarz

- Koyu lacivert-siyah zemin, mor-mavi degrade vurgu renkleri, yumuşak gölgeler.
- Scroll-reveal: bölümler kaydırdıkça yumuşakça belirir (IntersectionObserver).
- Konfeti kaldırılır; yerine zarif giriş animasyonu.
- Responsive: telefon, tablet ve masaüstünde düzgün görünüm.

## Dil Sistemi (TR/EN)

- Tüm metinler `data-i18n` anahtarlarıyla işaretlenir; çeviriler script.js içinde
  TR/EN sözlük olarak durur.
- Düğmeye basınca anında değişir; seçim `localStorage`'da saklanır.
- Varsayılan dil: İngilizce.
- Öne çıkan proje açıklamaları da iki dilli.

## Hata Durumları

- GitHub API erişilemez/limit aşılırsa: "Diğer projeler" bölümünde nazik iki dilli
  uyarı. Öne çıkan 4 proje elle yazıldığından her zaman görünür.
- README bulunamazsa modal içinde bilgi mesajı (mevcut davranış korunur).

## Test / Doğrulama

- Yerel önizleme sunucusuyla görsel kontrol (masaüstü + mobil boyut, konsol hataları,
  GitHub API isteklerinin başarısı, TR/EN geçişi, modal açma/kapama).
- Kullanıcı onayından sonra GitHub'a push edilerek yayınlanır.

## Kapsam Dışı

- Blog, çoklu sayfa, iletişim formu (backend gerektirir), analitik, framework kullanımı.
