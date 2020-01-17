class kryminal {
    constructor(ilosc) {
        this.ilosc = ilosc;
    }
    pokazIloscKry(){
        return parseInt(this.ilosc);
    }
    wstawKry(nowailosc) {
        this.ilosc = nowailosc;
    }
}

class horror {
    constructor(ilosc) {
        this.ilosc = ilosc;
    }
    pokazIloscHor(){
        return parseInt(this.ilosc);
    }
    wstawHor(nowailosc) {
        this.ilosc = nowailosc;
    }
}

class lektura_szkolna {
    constructor(ilosc) {
        this.ilosc = ilosc;
    }
    pokazIloscLsz(){
        return parseInt(this.ilosc);
    }
    wstawLs(nowailosc) {
        this.ilosc = nowailosc;
    }
}

class wypozyczone {
    constructor(kryminal, horror, lektura_szkolna) {
        this.kryminal = kryminal;
        this.horror = horror;
        this.lektura_szkolna = lektura_szkolna;
    }
    ilewszystkich(){
        return this.kryminal.pokazIloscKry()+this.horror.pokazIloscHor()+this.lektura_szkolna.pokazIloscLsz();
    }
       
}


class uczen {
    wstawImie(imie) {
        this.imie = imie;
    }
}




class biblioteka {
    constructor(uczen, wypozyczone) {
        this.uczen = uczen;
        this.wypozyczone = wypozyczone;
    }
}




function wstaw(imie) {


    // kry = new kryminal(2);
    // hor = new horror(1);
    // lsz = new lektura_szkolna(3);
    // wyp = new wypozyczone(kry,hor,lsz);
    u1 = new uczen();
    k = new kryminal(1);
    h = new horror(1);
    l = new lektura_szkolna(1);
    wyp = new wypozyczone(k,h,l);
    o1 = new biblioteka(u1,wyp);

    noweImie = document.getElementById('poleimie').value;
    noweKry = document.getElementById('poleKry').value;
    noweHor = document.getElementById('poleHor').value;
    noweLs = document.getElementById('poleLs').value;

    if ((parseInt(noweKry)+parseInt(noweHor)+parseInt(noweLs)<=9)){
        u1.wstawImie(noweImie);
        k.wstawKry(noweKry);
        h.wstawHor(noweHor);
        l.wstawLs(noweLs);
        // console.log("Może być wypozycz dalej")
        console.log(wyp.ilewszystkich());
    } else {
        console.log("Figa")
    }


    
    tab = [];
    tab.push(o1);
    console.log(tab);


}