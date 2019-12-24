class Dog{
    name = "";
    breed = "";
    age = 0;

    constructor(name,age,breed,_energy){
        this.name = name;
        this.age = age;
        this.breed = breed;
        this._energy = _energy;
    }
    ShowDog(){
        console.log( `Name - ${this.name }\n Age - ${this.age }\n Breed - ${this.breed }\n Energy - ${this._energy}`)
    }

    SetName(name){
        if (name === this.name){
            console.log("The same name");
        }else{
                this.name = name;
            }
        
    }
DogPlay(energy){
    console.log(`${this.name} is playing`)
    this._energy -= energy;
    if (this._energy <= 0){
        this.DogDie();
    }
}

DogDie(){
  
        console.log(`${this.name} is die!`);
}

DogEat(eat){
    console.log(`${this.name} is eating`)
this._energy += eat;
if(this._energy > 100){
    this.DogDie();
}
}

}

class HanterDog extends Dog{
    constructor(name,age,breed,_energy){
        super(name,age,breed,_energy);
    }
}

// let Bobik = new Dog("Bobik", "Лайка", 3,100);
// Bobik.ShowDog();
// Bobik.SetName("Bobik");
// Bobik.ShowDog();
// Bobik.DogPlay(50);
// Bobik.ShowDog();
// Bobik.DogEat(50);
// Bobik.ShowDog();
// Bobik.DogPlay(20);
// Bobik.ShowDog();

// function Save(){
// let name_in = document.querySelector(".name");
// name_in.innerHTML = localStorage.getItem("Name");
// let age_in = document.querySelector(".age");
// age_in.innerHTML = localStorage.getItem("Age");
// let breed_in = document.querySelector(".breed");
// breed_in.innerHTML = localStorage.getItem("Breed");
// let energy_in = document.querySelector(".energy");
// energy_in.innerHTML = localStorage.getItem("Energy");
// }

// localStorage.setItem("Name", Bobik.name);
// localStorage.setItem("Breed", Bobik.breed);
// localStorage.setItem("Age", Bobik.age);
// localStorage.setItem("Energy", Bobik._energy);

// nameLS = localStorage.getItem("Name");

// console.log("Name from LS =>", nameLS);
