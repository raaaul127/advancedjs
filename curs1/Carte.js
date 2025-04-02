 class Carte{
    constructor(titluCarte, autorCarte, edituraCarte, anCarte, pretCarte) {
        this.titlu = titluCarte;
        this.autor = autorCarte;
        this.editura = edituraCarte;
        this.an = anCarte;
        this.pret = pretCarte;
    }
    obtineTitlu(){
        console.logs(`Titlul cartii este ${this.titlu}`)
    }
    afiseazaInfo(){
        console.log(`Detalii despre aceasta carte sunt: ${this.titlu}, ${this.autor}, ${this.pret} `);
    }
    deschidCartea(){
        console.log(`Am deschis cartea la pagina 15`);
    }
    // randomIntFromInterval(min, max){
    //     return Math.floor (Math.random() * (max - min + 1) + min)
    // }
}
export { Carte };