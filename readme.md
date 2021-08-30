# Uzd

// uzd kai sukuriam nauja meetup nunaviguoti i pagr HomePage

/\*

1. susikuriam nauja next projekta
2. susikuriam pages: homePage, paintingsPage, paintingDetailsPage
3. / => homePage, /paintings => paingingsPage, /paintings/p1 (p1 painting id) => paintingDetailsPage
4. homePage ar atskiram db.js failiuke susikuriam paintingsData masyva
   jame yra paintings objektai kurie turi id, title, price, image, country,
   susikuriam bent 5 paveikslo objektus
5. Prisideti stiliau kad viskas atrodytu tvarkingai.
6. paintingsPage sukuriam sarasa paveikslu, kuri generuojam is paintingsData.
   saraso elementai yra paspaudziami ir veda i to paveikslo paintingDetailsPage.
7. paintingDetailsPage atpazinti dinamine route dali ir pagal ja atrinkti atitinkama
   paveiksla ir ji parodyti puslapyje.
8. Prisideti navigacija kuri butu bendra visiems puslapiams. (\_app.js ? )
9. addPaintingPage. jame yra newPainting formos komponentas kuriame galima supildyti
   ivestoes laukuose title, price, image, country, o id jau buna uzpildytas pagal
   paskutinio id reiksme
10. issiuntus forma atspausdiname ivesties lauku reiksmes su konsole addPaintingPage
11. tik uzsikrovus aplikacijai, irasome paintingsData duomenis i localStorage.
12. tik uzsikrovus aplikacijai pasitikriname ar yra paintingsData localStorage,
    jei nera suskuriam jei yra ne perrasom
13. addPaintingPage submitinant forma irasom duomenis i masyva esanti localStorage
14. paintings page atvaizduojam duomenis pasieme is localStorage masyvo

\*/
