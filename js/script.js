//Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
//Bonus: aggiungere  alla pagina un'immagine, presa anch'essa da un dato.
var app = new Vue ({
        el: "#root",
        data: {
            message: "Ciao Vue!!!",
            imgUrl: "https://animesher.com/orig/1/108/1087/10876/animesher.com_onizuka-great-teacher-onizuka-gto-1087654.jpg",
            imgAlt: "G.T.O."
        }
    }
)