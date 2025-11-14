# Bestu vinirnir

**Bestu vinirnir** er smáverkefni fyrir dýravini. Vefurinn hefur takka til að skoða random mynd af ketti eða hundi, og svo auka takka sem flæðir síðuna með 20 myndum.

---

## Eiginleikar

- Sýna random mynd af ketti
- Sýna random mynd af hundi
- Sýna 20 random myndir af köttum og hundum, valið af handahófi
- Dark mode valið með preferences stillingum notanda
- Accessibility upplýsingar á tökkum

---

## Setja upp verkefnið

Hægt er að sækja verkefnið og keyra svo

npm install

npm run dev

---

## Notkun

Smelltu á Sýna kött til að sjá random mynd af ketti.

Smelltu á Syna hund til að sjá random mynd af hundi.

Smelltu á Meira! til að flæða síðuna með fullt af random myndum af hundum og kisum (allt að 20, hálf-sekúndubil á milli). Svo birtist skilaboð í console: 

Við fórum smá yfirum, best að refresha síðunni :)

---

## Tools

Verkefnið notar eftirfarandi tól:

## Verkfæri

Þessi vefsíða notar eftirfarandi tól:

- **HTML, CSS og SCSS** – til að byggja upp og stíla síðuna. SCSS til að nota breytur, nesting og endurnýtanlega stíla, auðveldara að viðhalda.
- **JavaScript** – öll gagnvirkni, takkar og sækir myndir.
- **Vite** – Notkun svipuð og Parcel í fyrri verkefnum. Live refresh á síðunni og fleira. Notað til að byggja vefinn með npm run build.
- **Tailwind CSS** – notað til að einfalda stílingu. Uppsett í gegnum npm og sett í main.scss. Tílbúnir CSS flokkar beint í HTML.
- **ESLint** – tékka JavaScript kóða fyrir villur og passa að samræma stíl. stillingar eru í .eslintrc.json. 
- **Stylelint** – tékka SCSS kóða fyrir stíl- og setningavillur. stillingar eru í .stylelintrc.json. 
- **Fetch API** – innbyggt í vafrann. `fetchCat()` og `fetchDog()` í `api.js` framkvæma asynchronous HTTP beiðnir til að sækja random myndir.
- **Jest** – Notað til að prófa utils.js. sett upp í utils.test.js. hægt er að nota eftirfarandi skipun til að testa:

- npm run test

---

## Lint

Skipunin

npm run lint

tékkar SCSS skrár með Stylelint og tékkar JavaScript skrár með ESlint

---

## Live útgáfa á Netlify

hlekkur á live version af síðunni:

https://vef1-2025-v10-blb.netlify.app/


