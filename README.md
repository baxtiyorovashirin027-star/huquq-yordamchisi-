# HuquqYordam

O‘zbekiston aholisi uchun huquqiy xizmatlarni topish, muammoni tahlil qilish va murojaat loyihasini tayyorlashga mo‘ljallangan mobilga mos MVP.

## Talablar

- Node.js 20 yoki yangiroq
- npm

## Kompyuterda ishga tushirish

1. Loyihani yuklab oling yoki GitHub’dan clone qiling.
2. Terminalda loyiha papkasiga kiring va `npm install` bajaring.
3. `.env.example` faylidan `.env` nusxa oling. Demo uchun qiymatlarni o‘zgartirish shart emas.
4. `npx prisma db push` va `npm run db:seed` bajaring.
5. `npm run dev` buyrug‘i bilan ishga tushiring; brauzerda `http://localhost:3000` ni oching.

Telefon tasdiqlash demo kodi: **1234**. SMS provayderi ulanmagan. OpenAI kaliti bo‘lmasa yordamchi qoidaviy demo javob qaytaradi. Kalit bo‘lsa `.env` dagi `OPENAI_API_KEY` ga kiriting va serverni qayta ishga tushiring.

## Asosiy imkoniyatlar

- Telefon bo‘yicha foydalanuvchi yaratish/kirish va httpOnly imzolangan cookie.
- 9 ta huquqiy xizmat, muammo qidiruvi va sodda yo‘l-yo‘riq.
- OpenAI API yoki belgilangan demo yordamchi.
- Murojaat loyihasini bazada saqlash va PDF yuklab olish.
- SQLite va Prisma.

## API

- `GET /api/services`
- `POST /api/analyze` `{ "query": "Ishdan noqonuniy bo‘shatildim" }`
- `POST /api/auth/request-code`, `POST /api/auth/verify`, `GET /api/auth/me`, `POST /api/auth/logout`
- `POST /api/assistant` `{ "message": "Qanday hujjat kerak?" }`
- `GET/POST /api/applications` (kirish talab qilinadi)
- `GET /api/applications/:id/pdf` (kirish talab qilinadi)

## GitHub’ga joylash

GitHub repository’ni clone qilib, shu fayllarni uning papkasiga joylang, so‘ng `git add .`, `git commit -m "Build HuquqYordam MVP"`, `git push` bajaring. `.env` va maʼlumotlar bazasi GitHub’ga qo‘shilmaydi.

## Cheklovlar

Demo OTP kodi haqiqiy SMS emas. Tashkilot manzillari hamda havolalar umumiy yo‘naltirish namunalaridir, rasmiy integratsiya emas. Huquqiy javoblar umumiy maʼlumot; yuborishdan oldin yurist yoki tegishli davlat idorasi bilan tekshiring. Production’da maxfiy kodlarni yuborish provayderi, rate limiting va xavfsiz sessiya boshqaruvini sozlash lozim.
