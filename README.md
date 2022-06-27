# Vizsgaremek UserStory
## Agilis felhasználói történet
## Konferenciaszervezés weboldala
________________________________________
## Miért jó nekünk ez a weboldal?
A konferencia szervezésekor fontos, hogy legyen egy a szervezők/résztvevők számára elérhető felület. A weboldal célja, hogy átlátható struktúrába  öntse egy adminisztrációs felületen keresztül a konferencia tervezett szekcióit, a konferencia résztvevőit és előadóit, a szállás és étkezési igényeket, ezáltal összetett képet kapva a konferencia tervezésével kapcsolatos fontos feladatokról.
________________________________________
## A Home főoldal
________________________________________
A weboldal kezdőoldala, a bejelentkezés és a tájékozódás oldala. Bejelentkezés után lehetőség van az adatok szerkesztésére, törlésére, új adat felvételére. Könnyen kezelhető navigációs lehetősséget biztosítunk a további oldalak között. Az oldal reszponzív.
#### Elfogadási kritérium:
> - Az oldal mobilbarát, figyelemfelkeltő, áttekinthető és egyszerű.
> - A menü mobilbarát, könnyen kezelhető, és az oldal felső részén mindig látható.
________________________________________
## Autentikációs oldal
________________________________________
Ezen az oldalon keresztül jelentkezhetnek be az adminisztrátorok.

Bejelentkezés
Alábbiak megadása szükséges:
  -	E-mail cím
  -	Jelszó


#### Elfogadási kritérium:
> - Az adminisztrátorok egyszerűen tudják szerkeszteni az adatokat.
> - Az adatok ellenőrzés alá kerülnek, hogy megfelelő adatot irt-e be a felhasználó.

________________________________________
## Az adatbázis
________________________________________
Az adatbázisban lehetőség nyílik az előadók, a szekciók és a résztvevők listázására. 
Milyen lehetőségeink vannak az adatbázisban?
  -	Kereshetünk az adatok között.
  -	Rendezhetjük az adatokat.
  -	Új adatokat vehetünk fel.
  -	Az adatokat szerkeszthetjük.
  -	Az adatokat törölhetjük, ebben az esetben egy felugró modal-lal is megkérdezzük, hogy véletlen törlések esélyét csökkentsük.

A táblázat tartalma
  -	Résztvevő adatai
  -	Előadást tart/nem tart
  -	Előadás címe
  - Szekciók
  -	Választott szekciók
  -	Szállás
#### Elfogadási kritérium:
> - Az adattárolás és az adatkezelés egy felhőben található MongoDB adatbázisban történik.
> - Van lehetőség az adatok megjelenítésére, módosítására, törlésére.
> - Van lehetőség új elem bevitelére.
> - Van lehetőség az adatok rendezésére.
________________________________________
## A tervezett aloldalak
________________________________________
### Konferencia szekciók
Ezen az oldalon láthatjuk az egyes szekciókat, előadóit.

#### Elfogadási kritérium:
> - Az oldal mobilbarát.
> - Az oldalon szerepelnek a választható szekciók, előadók.

### Szálláshelyek
Ezen az oldalon kilistázzuk az ajánlott szálláshelyeket.

#### Elfogadási kritérium:
> - Az oldal mobilbarát.
> - Az oldalon megjelennek a választható szálláshelyek adatai.

### Kapcsolat
A felhasználó megtekintheti a szervező elérhetőségeit, címét, telefonszámát, e-mail címét.

#### Elfogadási kritérium:
> - Az oldal mobilbarát.
> - Az oldalon szerepel a szervező neve, telefonszáma, e-mail címe.

### További adatok a projektről
A projekt megvalósítása 6 hetet vesz igénybe.

