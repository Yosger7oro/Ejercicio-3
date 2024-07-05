export default class CL_Persona{
    constructor(ed){
        this.edad=ed;
    }
    set edad(e){
        return this._edad=e;
    }
    get edad(){
        return this._edad;
    }
}