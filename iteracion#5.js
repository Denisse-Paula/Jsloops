//Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ];
for(let i=0;i<placesToTravel.length;i++){
    if(placesToTravel[i].id==11||placesToTravel[i].id==40){
        placesToTravel.splice(i,1);
    }
}
console.log(placesToTravel);