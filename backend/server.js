const express = require("express");
const port = 5000;

const app = express();


//lancer le serveur
app.listen(port, () => console.log("le serveur a démarré au port " + port));
