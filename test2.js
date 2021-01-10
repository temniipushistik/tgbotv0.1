class Gena{
    value =0;

    met01 = function(int1,int2){
        this.value = int1+int2;

        return this;
    }
    met2=function(){
       this.value += this.value++
    return this;
    }
}
let gena = new Gena;
//let result01 = gena.met01(1,2);
let result02 = gena.met01(1,2).met2();

console.log(gena.value);

