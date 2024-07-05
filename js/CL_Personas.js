export default class CL_Personas{
    constructor(){
        this.acumedades=0;
        this.contpersonas=0;
    }

    prosesarpersona(p){
        this.contpersonas++;
        this.acumedades+=p.edad;
    }

    promedad(){
        return this.acumedades/this.contpersonas;
    }
}