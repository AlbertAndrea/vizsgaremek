## **1. Az alkalmazás célja**
​
- Az alkalmazás feladata, hogy a Gyakorló Iskolák Konferenciájának az adatait nyilvántartsa és kezelje.
​
## **2. Az alkalmazás telepítése**
​
- Forkolni kell az adott GitHub repository tartalmát: https://github.com/AlbertAndrea/vizsgaremek   
- A célgépre le kell klónozni az adott GitHub repository tartalmát: 
1. lehetőség: `git clone https://github.com/AlbertAndrea/vizsgaremek.git` paranccsal a VisualStudioCode alkalmazás termináljában.
2. éehetőség:Megnyitás GitHub Desktop alkalmazással.  
- Telepíteni kell az alkalmazás függőségeit: Külön VSCode ablakokban Meg kell nyitni a Backend (`cd vizsgaremek/backend`) és a Frontend mappákat (`cd vizsgaremek/frontend`). A `code . -r` parancsot futtajuk mindkét terminálban, hogy belépjünk a mappa gyökerébe. Ezután mindkét terminálon telepíteni kell a függőségeket az `npm i` paranccsal. 
- Ha még nincsen fenn a célgépen, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal (ha kell)   
- A terminálban ki kell adni az `ng build` parancsot   
- A /frontend/dist/frontend mappa tartalmát be kell másolni a /backend/public mappába   
- A terminálon be kell lépni a /backend mappába és futtatni az `npm run build` parancsot 
​
## **3. Az alkalmazás konfigurálása**
​
A /frontend/environments mappában be kell állítani az API-végpont elérési útvonalát: (ha szükséges)
  - _environment.ts_ állomány: http://localhost:3000/  
  - _environment.prod.ts_ állomány: http://localhost:3000/ 
​
## **4. Az alkalmazás indítása**
​
A megadott Docker container indítása és inicializálása:
- El kell indítani a Docker Desktop alkalmazást
- A /backend mappába belépve a terminálban ki kell adni az `npm run dev` parancsot  
- Ha szükséges, a /frontend mappába belépve a terminálban az `npm start` paranccsal indítható a frontend
​
_Megjegyzés_:  
A belépéshez egy érvényes e-mail-cím és jelszó páros (példa):  
​
E-mail | Jelszó
------------ | -------------
test01123@test.com | 123test789&
​
## **5. A végpontok dokumentációja**
​
Swagger 
- Az alábbi URL-t kell beírni a böngészőbe: http://localhost:3000/api-docs/
Az alábbi végpontokat találjuk az alkalmazásban:
- https://localhost:4200/iskola
- https://localhost:4200/eloado
- https://localhost:4200/szekcio
- https://localhost:4200/resztvevo
- https://localhost:4200/user
Bejelentkezés:
- https://localhost:4200/login

Az egyes oldalakon lehetőségünk van új entitás felvételére, illetve meglévők szerkesztésére, törlésére.

​
## **Linkek:**  

User Story link:
https://github.com/AlbertAndrea/vizsgaremek#readme
​
​
​
