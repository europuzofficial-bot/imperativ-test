// 50 ta A2 savol — bot ham, test sahifasi ham shu fayldan foydalanadi.
// s: gap (___ = asosiy bo‘shliq, _2_ = ajraladigan qism), a: to‘g‘ri javob, o: noto‘g‘ri variantlar, e: izoh
// Savollarni o‘zgartirsangiz: botni qayta ishga tushiring VA shu faylni saytga qayta yuklang.
const Q = [
 {
  "h": "du · aufräumen",
  "s": "___ bitte dein Zimmer _2_, bevor die Gäste um sechs Uhr kommen!",
  "uz": "Mehmonlar soat oltida kelishidan oldin xonangni yig‘ishtirib qo‘y!",
  "a": "Räum … auf",
  "o": [
   "Räumst … auf",
   "Räumt … auf",
   "Räumen … auf"
  ],
  "e": "Ajraladigan fe’l: fe’l boshida, auf esa gapning birinchi qismi oxirida (vergulgacha) turadi."
 },
 {
  "h": "du · vergessen",
  "s": "___ nicht, morgen früh deinen Pass und das Flugticket mitzunehmen!",
  "uz": "Ertaga ertalab pasporting va samolyot chiptangni olishni unutma!",
  "a": "Vergiss",
  "o": [
   "Vergesse",
   "Vergisst",
   "Vergess"
  ],
  "e": "e → i: du vergisst → Vergiss! (-st tushib qoladi)."
 },
 {
  "h": "Sie · sich setzen",
  "s": "___, der Arzt kommt in ein paar Minuten zu Ihnen!",
  "uz": "O‘tiring, shifokor bir necha daqiqadan keyin oldingizga keladi!",
  "a": "Setzen Sie sich",
  "o": [
   "Setz dich",
   "Sie setzen sich",
   "Setzen sich Sie"
  ],
  "e": "Sie shaklida tartib: fe’l + Sie + sich → Setzen Sie sich!"
 },
 {
  "h": "ihr · sich beeilen",
  "s": "___, der Zug nach Berlin fährt in fünf Minuten ab!",
  "uz": "Shoshilinglar, Berlinga poyezd besh daqiqadan keyin jo‘naydi!",
  "a": "Beeilt euch",
  "o": [
   "Beeil dich",
   "Beeilen euch",
   "Beeilt ihr euch"
  ],
  "e": "ihr shaklida qaytma olmosh euch bo‘ladi: Beeilt euch!"
 },
 {
  "h": "du · sich anziehen",
  "s": "___ warm _2_, draußen sind es heute minus zehn Grad!",
  "uz": "Issiq kiyin, bugun tashqarida minus o‘n daraja!",
  "a": "Zieh dich … an",
  "o": [
   "Ziehst dich … an",
   "Zieh mich … an",
   "Zieht euch … an"
  ],
  "e": "Qaytma + ajraladigan fe’l: Zieh dich warm an! (du → dich)."
 },
 {
  "h": "du · werden",
  "s": "___ nicht nervös, du hast für die Prüfung doch sehr viel gelernt!",
  "uz": "Asabiylashma, axir imtihonga juda ko‘p tayyorlanding-ku!",
  "a": "Werde",
  "o": [
   "Wirst",
   "Wird",
   "Werdet"
  ],
  "e": "werden: du wirst, lekin imperativda e o‘zgarmaydi → Werde! (yoki Werd!)."
 },
 {
  "h": "Sie · mitbringen",
  "s": "___ bitte zum Termin Ihren Ausweis und die Versichertenkarte _2_!",
  "uz": "Iltimos, qabulga shaxsiy guvohnomangiz va sug‘urta kartangizni olib keling!",
  "a": "Bringen Sie … mit",
  "o": [
   "Bringt … mit",
   "Bring … mit",
   "Sie bringen … mit"
  ],
  "e": "Sie shakli: Bringen Sie … mit! — mit gap oxirida."
 },
 {
  "h": "du · sein",
  "s": "___ bitte nicht traurig, wir sehen uns in den Sommerferien wieder!",
  "uz": "Iltimos, xafa bo‘lma, yozgi ta’tilda yana ko‘rishamiz!",
  "a": "Sei",
  "o": [
   "Bist",
   "Seist",
   "Seid"
  ],
  "e": "sein: du → Sei!, ihr → Seid!, Sie → Seien Sie!"
 },
 {
  "h": "ihr · sein",
  "s": "Kinder, ___ bitte ruhig, euer Vater schläft noch im Schlafzimmer!",
  "uz": "Bolalar, iltimos, jim bo‘linglar, dadangiz hali yotoqxonada uxlayapti!",
  "a": "seid",
  "o": [
   "sei",
   "seit",
   "sind"
  ],
  "e": "ihr uchun: seid! (seit – “…dan beri” predlogi, adashtirmang)."
 },
 {
  "h": "Sie · sein",
  "s": "___ bitte so nett und schließen Sie das Fenster hinter sich!",
  "uz": "Iltimos, iltifot qilib, ortingizdan derazani yopib qo‘ying!",
  "a": "Seien Sie",
  "o": [
   "Sind Sie",
   "Seid Sie",
   "Sei"
  ],
  "e": "Sie uchun sein maxsus shaklga ega: Seien Sie!"
 },
 {
  "h": "du · anrufen",
  "s": "___ mich bitte heute Abend _2_, wenn du zu Hause angekommen bist!",
  "uz": "Uyga yetib kelganingda, bugun kechqurun menga qo‘ng‘iroq qil!",
  "a": "Ruf … an",
  "o": [
   "Rufst … an",
   "Ruft … an",
   "Rief … an"
  ],
  "e": "du shakli: Ruf … an! (Rief – o‘tgan zamon)."
 },
 {
  "h": "du · essen",
  "s": "___ nicht so schnell, sonst bekommst du später Bauchschmerzen!",
  "uz": "Bunchalik tez yema, aks holda keyin qorning og‘riydi!",
  "a": "Iss",
  "o": [
   "Esse",
   "Isst",
   "Ess"
  ],
  "e": "e → i: du isst → Iss!"
 },
 {
  "h": "du · nehmen",
  "s": "___ lieber die U-Bahn, weil die Straßen im Zentrum total voll sind!",
  "uz": "Yaxshisi metroga o‘tir, chunki markazdagi ko‘chalar butunlay tirband!",
  "a": "Nimm",
  "o": [
   "Nehme",
   "Nimmst",
   "Nehm"
  ],
  "e": "nehmen: du nimmst → Nimm!"
 },
 {
  "h": "du · fahren",
  "s": "___ bitte vorsichtig, die Straßen sind heute Morgen sehr glatt!",
  "uz": "Iltimos, ehtiyot bo‘lib hayda, bugun ertalab yo‘llar juda sirpanchiq!",
  "a": "Fahr",
  "o": [
   "Fähr",
   "Fährst",
   "Fährt"
  ],
  "e": "a → ä o‘zgarishi imperativda bo‘lmaydi: du fährst, lekin Fahr!"
 },
 {
  "h": "du · schlafen",
  "s": "___ heute früh, morgen musst du schon um sechs Uhr aufstehen!",
  "uz": "Bugun erta uxla, ertaga soat oltida turishing kerak!",
  "a": "Schlaf",
  "o": [
   "Schläf",
   "Schläfst",
   "Schläft"
  ],
  "e": "a → ä imperativda yo‘q: du schläfst → Schlaf!"
 },
 {
  "h": "du · laufen",
  "s": "___ nicht so schnell, ich kann mit meinen schweren Taschen nicht mitkommen!",
  "uz": "Bunchalik tez yurma, og‘ir sumkalarim bilan ortingdan yetolmayapman!",
  "a": "Lauf",
  "o": [
   "Läuf",
   "Läufst",
   "Läuft"
  ],
  "e": "au → äu imperativda yo‘q: du läufst → Lauf!"
 },
 {
  "h": "du · arbeiten",
  "s": "___ nicht so lange am Computer, deine Augen brauchen auch eine Pause!",
  "uz": "Kompyuterda bunchalik uzoq ishlama, ko‘zlaringga ham dam kerak!",
  "a": "Arbeite",
  "o": [
   "Arbeiten",
   "Arbeitest",
   "Arbeitet"
  ],
  "e": "O‘zak -t/-d bilan tugasa, -e qo‘shiladi: Arbeite!"
 },
 {
  "h": "du · warten",
  "s": "___ bitte vor dem Kino auf mich, ich komme zehn Minuten später!",
  "uz": "Iltimos, kinoteatr oldida meni kut, o‘n daqiqa kechikaman!",
  "a": "Warte",
  "o": [
   "Warten",
   "Wartest",
   "Wartet"
  ],
  "e": "O‘zak -t bilan tugaydi → Warte!"
 },
 {
  "h": "du · öffnen",
  "s": "___ bitte das Fenster, hier im Klassenzimmer ist die Luft sehr schlecht!",
  "uz": "Iltimos, derazani och, sinfxonada havo juda yomon!",
  "a": "Öffne",
  "o": [
   "Öffn",
   "Öffnest",
   "Öffnet"
  ],
  "e": "Undosh + n bilan tugaganda -e qo‘shiladi: Öffne!"
 },
 {
  "h": "du · helfen",
  "s": "___ deiner Schwester bei den Mathehausaufgaben, sie versteht die Aufgabe nicht!",
  "uz": "Singlingga matematikadan uy vazifasida yordam ber, u masalani tushunmayapti!",
  "a": "Hilf",
  "o": [
   "Helf",
   "Hilfst",
   "Helfe"
  ],
  "e": "e → i: du hilfst → Hilf!"
 },
 {
  "h": "du · sprechen",
  "s": "___ bitte etwas langsamer, ich verstehe noch nicht so gut Deutsch!",
  "uz": "Iltimos, sekinroq gapir, men hali nemischani unchalik yaxshi tushunmayman!",
  "a": "Sprich",
  "o": [
   "Sprech",
   "Sprichst",
   "Spricht"
  ],
  "e": "e → i: du sprichst → Sprich!"
 },
 {
  "h": "du · geben",
  "s": "___ mir bitte mal das Salz, das Essen ist ein bisschen zu fade!",
  "uz": "Menga tuzni uzatib yubor, ovqat biroz tuzsiz!",
  "a": "Gib",
  "o": [
   "Geb",
   "Gibst",
   "Gibt"
  ],
  "e": "e → i: du gibst → Gib!"
 },
 {
  "h": "du · sehen",
  "s": "___ mal aus dem Fenster, es schneit zum ersten Mal in diesem Winter!",
  "uz": "Derazadan qara, bu qishda birinchi marta qor yog‘yapti!",
  "a": "Sieh",
  "o": [
   "Seh",
   "Siehst",
   "Sieht"
  ],
  "e": "e → ie: du siehst → Sieh!"
 },
 {
  "h": "du · lesen",
  "s": "___ den Text noch einmal genau, bevor du die Fragen beantwortest!",
  "uz": "Savollarga javob berishdan oldin matnni yana bir marta diqqat bilan o‘qi!",
  "a": "Lies",
  "o": [
   "Les",
   "Liest",
   "Lese"
  ],
  "e": "e → ie: du liest → Lies!"
 },
 {
  "h": "du · haben",
  "s": "___ keine Angst vor dem Hund, er ist schon alt und sehr freundlich!",
  "uz": "Itdan qo‘rqma, u allaqachon qari va juda yuvosh!",
  "a": "Hab",
  "o": [
   "Hast",
   "Hat",
   "Habt"
  ],
  "e": "haben: du → Hab!, ihr → Habt!, Sie → Haben Sie!"
 },
 {
  "h": "ihr · mitkommen",
  "s": "___ doch heute Abend _2_, wir grillen bei uns im Garten!",
  "uz": "Bugun kechqurun biz bilan yuringlar, bog‘imizda kabob qilamiz!",
  "a": "Kommt … mit",
  "o": [
   "Komm … mit",
   "Kommen … mit",
   "Kommst … mit"
  ],
  "e": "ihr shakli: Kommt … mit! — mit gap oxirida."
 },
 {
  "h": "wir · gehen",
  "s": "Es ist so schönes Wetter – ___ doch am Wochenende zusammen in den Park!",
  "uz": "Havo juda yaxshi – dam olish kuni birga bog‘ga boraylik!",
  "a": "gehen wir",
  "o": [
   "wir gehen",
   "geht",
   "geh"
  ],
  "e": "Taklif (“…aylik”): fe’l + wir → gehen wir!"
 },
 {
  "h": "Sie · anfangen",
  "s": "___ bitte mit Übung drei auf Seite fünfundzwanzig _2_!",
  "uz": "Iltimos, 25-betdagi uchinchi mashqdan boshlang!",
  "a": "Fangen Sie … an",
  "o": [
   "Fängt … an",
   "Fang … an",
   "Sie fangen … an"
  ],
  "e": "Sie shakli: Fangen Sie … an!"
 },
 {
  "h": "ihr · sich waschen",
  "s": "___ vor dem Essen die Hände, ihr habt gerade draußen gespielt!",
  "uz": "Ovqatdan oldin qo‘llaringizni yuvinglar, hozirgina tashqarida o‘ynadinglar!",
  "a": "Wascht euch",
  "o": [
   "Wäscht euch",
   "Wasch dich",
   "Waschen euch"
  ],
  "e": "ihr shaklida a → ä bo‘lmaydi: ihr wascht → Wascht euch!"
 },
 {
  "h": "du · sich freuen",
  "s": "___ nicht zu früh, das Ergebnis kommt erst nächste Woche!",
  "uz": "Erta quvonma, natija faqat kelasi haftada chiqadi!",
  "a": "Freu dich",
  "o": [
   "Freust dich",
   "Freu mich",
   "Freut dich"
  ],
  "e": "du shaklida qaytma olmosh dich: Freu dich!"
 },
 {
  "h": "Sie · sich anmelden",
  "s": "___ bitte bis spätestens Freitag für den Deutschkurs _2_!",
  "uz": "Iltimos, nemis tili kursiga eng kechi juma kunigacha ro‘yxatdan o‘ting!",
  "a": "Melden Sie sich … an",
  "o": [
   "Meldet euch … an",
   "Melde dich … an",
   "Sie melden sich … an"
  ],
  "e": "Sie shakli: Melden Sie sich … an!"
 },
 {
  "h": "du · einkaufen",
  "s": "___ bitte nach der Schule Brot, Milch und zehn Eier _2_!",
  "uz": "Iltimos, maktabdan keyin non, sut va o‘nta tuxum sotib ol!",
  "a": "Kauf … ein",
  "o": [
   "Kaufst … ein",
   "Kauft … ein",
   "Käuf … ein"
  ],
  "e": "Ajraladigan fe’l: Kauf … ein!"
 },
 {
  "h": "du · ausmachen",
  "s": "___ bitte das Licht _2_, wenn du als Letzter das Zimmer verlässt!",
  "uz": "Xonadan oxirgi bo‘lib chiqsang, iltimos, chiroqni o‘chir!",
  "a": "Mach … aus",
  "o": [
   "Machst … aus",
   "Macht … aus",
   "Machen … aus"
  ],
  "e": "Ajraladigan fe’l: Mach … aus!"
 },
 {
  "h": "du · fernsehen",
  "s": "___ nicht den ganzen Abend _2_, du musst noch Vokabeln lernen!",
  "uz": "Butun kechqurun televizor ko‘rma, hali so‘z yodlashing kerak!",
  "a": "Sieh … fern",
  "o": [
   "Seh … fern",
   "Siehst … fern",
   "Sieht … fern"
  ],
  "e": "e → ie va ajraladigan fe’l: Sieh … fern!"
 },
 {
  "h": "ihr · aufpassen",
  "s": "___ gut _2_, wenn ihr nach der Schule über die große Straße geht!",
  "uz": "Maktabdan keyin katta ko‘chadan o‘tayotganda ehtiyot bo‘linglar!",
  "a": "Passt … auf",
  "o": [
   "Pass … auf",
   "Passen … auf",
   "Pässt … auf"
  ],
  "e": "ihr shakli: Passt … auf!"
 },
 {
  "h": "du · anfangen",
  "s": "___ endlich mit deinen Hausaufgaben _2_, es ist schon acht Uhr!",
  "uz": "Nihoyat uy vazifalaringni boshla, soat sakkiz bo‘ldi!",
  "a": "Fang … an",
  "o": [
   "Fäng … an",
   "Fängst … an",
   "Fängt … an"
  ],
  "e": "a → ä imperativda yo‘q: Fang … an!"
 },
 {
  "h": "du · vorlesen",
  "s": "___ uns bitte die Geschichte _2_, die du gestern geschrieben hast!",
  "uz": "Iltimos, kecha yozgan hikoyangni bizga o‘qib ber!",
  "a": "Lies … vor",
  "o": [
   "Les … vor",
   "Liest … vor",
   "Lese … vor"
  ],
  "e": "e → ie va ajraladigan: Lies … vor!"
 },
 {
  "h": "du · mitnehmen",
  "s": "___ lieber einen Regenschirm _2_, heute Nachmittag soll es regnen!",
  "uz": "Yaxshisi soyabon olib ol, bugun tushdan keyin yomg‘ir yog‘armish!",
  "a": "Nimm … mit",
  "o": [
   "Nehm … mit",
   "Nimmst … mit",
   "Nehme … mit"
  ],
  "e": "e → i va ajraladigan: Nimm … mit!"
 },
 {
  "h": "Sie · vergessen",
  "s": "___ bitte nicht, die Rechnung bis Ende des Monats zu bezahlen!",
  "uz": "Iltimos, hisobni oy oxirigacha to‘lashni unutmang!",
  "a": "Vergessen Sie",
  "o": [
   "Vergiss",
   "Vergesst",
   "Sie vergessen"
  ],
  "e": "Sie shaklida fe’l o‘zgarmaydi: Vergessen Sie!"
 },
 {
  "h": "ihr · sprechen",
  "s": "___ im Unterricht bitte nur Deutsch, auch wenn es am Anfang schwer ist!",
  "uz": "Darsda iltimos faqat nemischa gapiringlar, boshida qiyin bo‘lsa ham!",
  "a": "Sprecht",
  "o": [
   "Sprich",
   "Sprechet",
   "Sprechen"
  ],
  "e": "ihr shaklida e → i bo‘lmaydi: ihr sprecht → Sprecht!"
 },
 {
  "h": "ihr · aufessen",
  "s": "___ euer Gemüse _2_, dann bekommt ihr ein Eis zum Nachtisch!",
  "uz": "Sabzavotlaringizni oxirigacha yeb qo‘yinglar, keyin desertga muzqaymoq olasizlar!",
  "a": "Esst … auf",
  "o": [
   "Iss … auf",
   "Isst … auf",
   "Esset … auf"
  ],
  "e": "ihr esst → Esst … auf!"
 },
 {
  "h": "ihr · lesen",
  "s": "___ bis morgen die Seiten zwanzig bis fünfundzwanzig im Lehrbuch!",
  "uz": "Ertagacha darslikdagi 20–25-betlarni o‘qib kelinglar!",
  "a": "Lest",
  "o": [
   "Lies",
   "Liest",
   "Lesst"
  ],
  "e": "ihr shaklida e → ie bo‘lmaydi: ihr lest → Lest!"
 },
 {
  "h": "ihr · haben",
  "s": "___ bitte noch etwas Geduld, das Essen ist in zehn Minuten fertig!",
  "uz": "Iltimos, yana biroz sabr qilinglar, ovqat o‘n daqiqada tayyor bo‘ladi!",
  "a": "Habt",
  "o": [
   "Hab",
   "Hat",
   "Habet"
  ],
  "e": "haben: ihr habt → Habt!"
 },
 {
  "h": "du · sich Sorgen machen",
  "s": "___ keine Sorgen, ich bin spätestens um elf Uhr wieder zu Hause!",
  "uz": "Xavotir olma, eng kechi soat o‘n birda uyda bo‘laman!",
  "a": "Mach dir",
  "o": [
   "Mach dich",
   "Machst dir",
   "Macht dir"
  ],
  "e": "sich Sorgen machen – dativ: Mach dir keine Sorgen!"
 },
 {
  "h": "Sie · geben",
  "s": "___ mir bitte noch eine Woche Zeit, dann ist das Projekt fertig!",
  "uz": "Iltimos, menga yana bir hafta vaqt bering, keyin loyiha tayyor bo‘ladi!",
  "a": "Geben Sie",
  "o": [
   "Gib",
   "Gebt",
   "Sie geben"
  ],
  "e": "Sie shaklida e → i bo‘lmaydi: Geben Sie!"
 },
 {
  "h": "du · lassen",
  "s": "___ mich bitte in Ruhe, ich muss mich auf die Prüfung konzentrieren!",
  "uz": "Iltimos, meni tinch qo‘y, imtihonga diqqatimni qaratishim kerak!",
  "a": "Lass",
  "o": [
   "Lässt",
   "Läss",
   "Lasst"
  ],
  "e": "a → ä imperativda yo‘q: du lässt → Lass!"
 },
 {
  "h": "du · einladen",
  "s": "___ doch auch Anna zu deiner Geburtstagsparty _2_, sie ist sehr nett!",
  "uz": "Annani ham tug‘ilgan kuningga taklif qil, u juda yoqimli!",
  "a": "Lad … ein",
  "o": [
   "Läd … ein",
   "Lädst … ein",
   "Lädt … ein"
  ],
  "e": "a → ä imperativda yo‘q: Lad … ein! (yoki Lade … ein!)."
 },
 {
  "h": "wir · anfangen",
  "s": "Alle Kollegen sind jetzt da, ___ also mit der Besprechung _2_!",
  "uz": "Barcha hamkasblar yig‘ildi, demak, yig‘ilishni boshlaylik!",
  "a": "fangen wir … an",
  "o": [
   "wir fangen … an",
   "fangt … an",
   "fang … an"
  ],
  "e": "wir-taklif: fangen wir … an!"
 },
 {
  "h": "du · aussteigen",
  "s": "___ an der nächsten Haltestelle _2_, das Museum ist direkt gegenüber!",
  "uz": "Keyingi bekatda tush, muzey roppa-rosa ro‘parada!",
  "a": "Steig … aus",
  "o": [
   "Steigst … aus",
   "Steigt … aus",
   "Stieg … aus"
  ],
  "e": "Ajraladigan fe’l: Steig … aus!"
 },
 {
  "h": "Sie · zurückrufen",
  "s": "___ bitte so schnell wie möglich _2_, es ist sehr dringend!",
  "uz": "Iltimos, menga imkon qadar tezroq qayta qo‘ng‘iroq qiling, bu juda shoshilinch!",
  "a": "Rufen Sie mich … zurück",
  "o": [
   "Ruf mich … zurück",
   "Ruft mich … zurück",
   "Sie rufen mich … zurück"
  ],
  "e": "Sie shakli: Rufen Sie mich … zurück!"
 }
];
if (typeof module !== "undefined") module.exports = Q;
