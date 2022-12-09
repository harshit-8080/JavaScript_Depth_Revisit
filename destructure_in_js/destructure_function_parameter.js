const person = {
    name:"Manikesh",
    age:20,
    address:"west housing colony",
    city:"Chhapra"
}

function fun({name,age,address,city}) {

    console.log(name);
    console.log(age);
    console.log(address);
    console.log(city);
}

fun(person);