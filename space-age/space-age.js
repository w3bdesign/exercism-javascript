export class SpaceAge {
    constructor(seconds) {
        this.seconds = seconds;
    }
    /*
    planets = {
        Earth: 31557600,
        Mercury: 0.2408467,
        Venus: 0.61519726,
        Mars: 1.8808158,
        Jupiter: 11.862615,
        Saturn: 29.447498,
        Uranus: 84.016846,
        Neptune: 164.79132, 
    }
    */
    
    onEarth (){return Math.round((this.seconds/31557600)*100)/100;}
    onMercury (){return Math.round((this.seconds/31557600/0.2408467)*100)/100;}
    onVenus (){return Math.round((this.seconds/31557600/0.61519726)*100)/100;}
    onMars (){return Math.round((this.seconds/31557600/1.8808158)*100)/100;}
    onJupiter (){return Math.round((this.seconds/31557600/11.862615)*100)/100;}
    onSaturn (){return Math.round((this.seconds/31557600/29.447498)*100)/100;}
    onUranus() {return Math.round((this.seconds/31557600/84.016846)*100)/100;}
    onNeptune (){return Math.round((this.seconds/31557600/164.79132)*100)/100;}
}