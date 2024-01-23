
const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base = 5, listar = false, hasta  =10) => {
    try{
        let salida = '';       
        for (var i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if(listar){
            console.log(colors.green('=================='))
            console.log( colors.rainbow(`TABLE OF ${base}`))
            console.log(colors.green('=================='))
            console.log(colors.rainbow(salida));               
            }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        //console.log(`tabla-${base}.txt creada`)
       return colors.blue(`archivo tabla-${base}.txt`);
    }catch(e){
        throw e;
    }      
}

module.exports = {
   crearArchivo
}