const aCar = { 
    owner : "Joe Bloggs", 
    address : "3 Walkers Lane",
    
    previous_owners: [
        {name : "Pat Smith", address : "1 Main Street"},
        {name : "Sheila Dwyer", address : "2 High Street"},
    ],

    features : ['Parking assist','Alarm','Tow-bar'],

    type :{
        make : "Toyota",
        model : "Corolla",
        cc : "1.8"
    } , 

    registration : {
        year : 201,
        county_code: "WD",
        number : 1058
    } ,

    milage : 10000,

    color :{
        exterior : "red",
        interior : {
            texture: "leather",
            shade : "cream"
        }
    },

};
// console.log(aCar.owner);
// console.log(aCar.owner + ' drives a ' + aCar.type.make)
// console.log(aCar.registration.year + '-' + aCar.registration.county_code + '-' + aCar.registration.number)
// console.log( "It is a " + aCar.color.exterior + " car, " + aCar.milage + " milage, with " + aCar.color.interior.texture + " interior.")
// console.log('First owner : ' + aCar.previous_owners[0].name + "-"+ aCar.previous_owners[0].address);
for (let i = 0 ; i < aCar.features.length ; i += 1) {
    console.log(aCar.features[i]) ;
}
for (let j = 0 ; j < aCar.previous_owners.length; j += 1){
    console.log(aCar.previous_owners[j].name);
}

for (let p in aCar.type)  {
    console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
}


