<!-- Peticion de datos -->
var nombre_corredor1 = prompt("Nombre del corredor 1: ");
var tiempo_corredor1 = 9999999;
if( nombre_corredor1!="salir" )
tiempo_corredor1 = parseFloat(prompt("Tiempo del corredor 1: "));

var nombre_corredor2 = prompt("Nombre del corredor 2: ");
var tiempo_corredor2 = 9999999;
if( nombre_corredor2!="salir" )
tiempo_corredor2 = parseFloat(prompt("Tiempo del corredor 2: "));

var nombre_corredor3 = prompt("Nombre del corredor 3: ");
var tiempo_corredor3 = 9999999;
if( nombre_corredor3!="salir" ){
tiempo_corredor3 = parseFloat(prompt("Tiempo del corredor 3: "));


var basuraNombre;
var basuraMarca;

while (basuraNombre!="salir") {
basuraNombre =prompt("Nombre del corredor : ");
if (basuraNombre!="salir")
basuraMarca =prompt("Tiempo del corredor :");
}}



function marcas (nombre_corredor1,nombre_corredor2,nombre_corredor3,tiempo_corredor1,tiempo_corredor2,tiempo_corredor3){
<!-- Si el corredor 1 es el mas rapido -->
if (tiempo_corredor1 < tiempo_corredor2 && tiempo_corredor1 < tiempo_corredor3){
    document.write("El primer puesto es para: "+nombre_corredor1+" Tiempo: "+tiempo_corredor1);

    <!-- Comprobamos, de los dos jugadores que faltan, quien ha sido mas rapido -->
    if (tiempo_corredor2 < tiempo_corredor3){
        document.write("<BR>El segundo puesto es para: "+nombre_corredor2+" Tiempo: "+tiempo_corredor2);
        if (tiempo_corredor3!=9999999)
        document.write("<BR>El tercer puesto es para: "+nombre_corredor3+" Tiempo: "+tiempo_corredor3);

    } else {
        document.write("<BR>El segundo puesto es para: "+nombre_corredor3+" Tiempo: "+tiempo_corredor3);
        if (tiempo_corredor2!=9999999)
        document.write("<BR>El tercer puesto es para: "+nombre_corredor2+" Tiempo: "+tiempo_corredor2);

    }

<!-- Si el corredor 2 es el mas rapido -->
} else if (tiempo_corredor2 < tiempo_corredor1 && tiempo_corredor2 < tiempo_corredor3){
    document.write("El primer puesto es para: "+nombre_corredor2+" Tiempo: "+tiempo_corredor2);

    if (tiempo_corredor1 < tiempo_corredor3){
        document.write("<BR>El segundo puesto es para: "+nombre_corredor1+" Tiempo: "+tiempo_corredor1);
        if (tiempo_corredor3!=9999999)
        document.write("<BR>El tercer puesto es para: "+nombre_corredor3+" Tiempo: "+tiempo_corredor3);

    } else {
        document.write("<BR>El segundo puesto es para: "+nombre_corredor3+" Tiempo: "+tiempo_corredor3);
        if (tiempo_corredor1!=9999999)
        document.write("<BR>El tercer puesto es para: "+nombre_corredor1+" Tiempo: "+tiempo_corredor1);

    }

<!-- Si el corredor 3 es el mas rapido -->
} else if (tiempo_corredor3 < tiempo_corredor1 && tiempo_corredor3 < tiempo_corredor2){
    document.write("El primer puesto es para: "+nombre_corredor3+" Tiempo: "+tiempo_corredor3);

    if (tiempo_corredor1 < tiempo_corredor2){
        document.write("<BR>El segundo puesto es para: "+nombre_corredor1+" Tiempo: "+tiempo_corredor1);
        if (tiempo_corredor2!=9999999)
        document.write("<BR>El tercer puesto es para: "+nombre_corredor2+" Tiempo: "+tiempo_corredor2);

    } else {
        document.write("<BR>El segundo puesto es para: "+nombre_corredor2+" Tiempo: "+tiempo_corredor2)
        if (tiempo_corredor1!=9999999);
        document.write("<BR>El tercer puesto es para: "+nombre_corredor1+" Tiempo: "+tiempo_corredor1);

    }

}
}
marcas (nombre_corredor1,nombre_corredor2,nombre_corredor3,tiempo_corredor1,tiempo_corredor2,tiempo_corredor3);
