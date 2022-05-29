# Vizsgaremek UserStory
Agilis felhasználói történet
Konferenciaszervezés weboldala
________________________________________
Miért jó nekünk ez a weboldal?
A konferencia szervezésekor fontos, hogy legyen egy a szervezők és a résztvevők számára is elérhető felület. A weboldal célja, hogy átlátható struktúrába  öntse egy adminisztrációs felületen keresztül a konferencia tervezett szekcióit,, a konferencia résztvevőit / előadóit, a szállás és étkezési igényeket, ezáltal összetett képet kapva a konferencia tervezésével kapcsolatos fontos feladatokról és a pénzügyi kiadásokról is. Valamint lesznek olyan aloldalak is, melyek a résztvevőknek is hasznos információkkal szolgálnak.
________________________________________
A Home főoldal
________________________________________
A weboldal kezdőoldala, amely az érdeklődés felkeltését is szolgálja. Itt érdekes híreket, korábbi konferenciák statisztikáit találhatjuk. Ismertetjük a weboldalt. Könnyen kezelhető navigációs lehetősséget biztosítunk a további oldalak között. Az oldal reszponzív. A navigációs sávban egy egyszerű kereső is elhelyezhető.
Elfogadási kritérium:
Az oldal legyen mobilbarát, figyelemfelkeltő, áttekinthető és egyszerű. A menü legyen mobilbarát, könnyen kezelhető, és az oldal felső részén mindig látható.
________________________________________
Autentikációs oldal
________________________________________
Ezen az oldalon keresztül jelentkezhetnek be az adminisztrátorok és regisztrálhatnak a felhasználók.

Bejelentkezés
Alábbiak megadása szükséges:
•	E-mail cím / Felhasználónév
•	Jelszó

Regisztráció
Alábbiak megadása szükséges:
•	Vezetéknév
•	Keresztnév
•	Iskola neve
•	Iskola címe
•	Saját e-mail cím
•	Jelszó

Elfogadási kritérium:
A regisztráció egy űrlap kitöltésével történik, amely legyen mobilbarát, valamint egyértelmű és könnyen kezelhető. Az adatok legyenek ellenőrizve, hogy megfelelő adatot irt-e be a felhasználó.

________________________________________
Az adatbázis
________________________________________
Az adatbázisban lehetőség nyílik a résztvevők és egyéni igényeik listázására. Kétfajta nézetet láthatunk az egyik egy táblázatos, listás verzió, míg a másodikban kártyákat használva jeleníthetjük meg csoportosítva ezzel az adatainkat.
Milyen lehetőségeink vannak az adatbázisban?

  •	Kereshetünk az adatok között.
  •	Rendezhetjük az adatokat.
  •	Új adatokat vehetünk fel.
  •	Az adatokat szerkeszthetjük.
  •	Az adatokat törölhetjük, ebben az esetben egy felugró modal-lal is megkérdezzük, hogy véletlen törlések esélyét csökkentsük.
A táblázat vagy a kártyák tartalma
  •	Résztvevő regisztrációs adatai
  •	Előadást tart/nem tart
  •	Előadás címe
  •	Választott szekciók
  •	Szállás igények
  •	Étkezési igények

Elfogadási kritérium:
Az adattárolás és az adatkezelés egy felhőben található MongoDB adatbázisban történjen. Legyen lehetőség az adatok megjelenítésére, törlésére, új elem bevitelére, módosításra., az adatok szűrésére és rendezésére.
________________________________________
A tervezett aloldalak
________________________________________
Konferencia szekciók
Ezen az oldalon kártyákon láthatjuk az egyes szekciók leírását, előadóit.

Elfogadási kritérium:
Az oldal legyen mobilbarát, szerepeljenek rajta a választható szekciók, előadók,  előadások rövid kivonata.

Szálláshelyek
Ezen az oldalon kártyákon láthatjuk az egyes szálláshelyeket.

Elfogadási kritérium:
Az oldal legyen mobilbarát, szerepeljenek rajta a választható szálláshelyek adatai..

Kapcsolat
A felhasználó megtekintheti a szervező elérhetőségeit, címét, telefonszámát, e-mail címét.

Elfogadási kritérium:
Az oldal legyen mobilbarát, szerepeljen rajta a szervező neve, telefonszáma, e-mail címe és egy térkép, amelyen fel van tüntetve a szervező címe.

Statisztikai adatok
A konferencia különböző adatait adatvizuációs aloldalon is megjeleníthetjük.

További adatok a projektről
A projekt megvalósítása 6 hétig fog tartani.

