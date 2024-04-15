# Beschrijving

Login toevoegen was voor de tijd die ik hiervoor had te optimistisch, er zijn voornamelijk 2 belangrijke onderdelen: De map kweektafel-frontend/ bevat alle frontend code, geschreven in next.js. Dit werd vervolgens gecompiled naar een statische site, opgeslagen samen met de backend in site/ - De backend van de site runt in Deno, met een postgres database via supabase.

# Layout
- /cash_register: Kassa systeem, verkopen worden gepusht via een CRUD api naar de sql server op supabase
De kassa is tevens het hoofdgedeelte van de app. De functies zijn korting toevoegen en aftrekken, zoeken door een itemlijst, en natuurlijk het toevoegen en weghalen van 
items via of de itemlijst met +/- of de zoekbare lijst
- /stats: Leuke grafiekjes gehaalt uit de CRUD api
- /sales: Lijstje van alle verkopen op basis van data uit de database. Meer inhoudelijke informatie over de verkoop word weergeven door de verkoop uit te vouwen.

# Login systeem

De login was grotendeels werkend, maar gezien de deadline van het informatica project is het niet gelukt om werkend te krijgen. Het grootste probleem was externe toegang, door hoe ik de site gebouwd had en dat de JWT token altijd na 5 minuten verliep, ongeacht van of de gebruiker nog actief was.
