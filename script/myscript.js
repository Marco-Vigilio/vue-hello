/**
 * 
 * Descrizione:
 * Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
 * 
 * Bonus:
 * Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 * 
 */

let createApp = Vue.createApp; //STESSA IDENTICA COSA MA SCRITTA IN MODO DIFFERENTE DI SOTTO
//let { createApp } = Vue;  //DESTRUTTURAZIONE DELLA VARIABILE SOPRA

createApp({
    data(){
        return {
            message: "Your Welcome in Vue",
            image: "https://unsplash.it/300/300?image",
        };
        
    }
}).mount("#app");
