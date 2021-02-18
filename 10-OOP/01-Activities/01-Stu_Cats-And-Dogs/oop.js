const dogs = {
raining: true,
noise: 'Woof!',
makeNoise: () => {
    if (dog.raining === true){
        console.log(dogs.noise);
    }
},
};

const cats = {
raining: false, 
noise: 'Meow!',
makeNoise: () => {
    if (cats.rainiq === true){
        console.log(cats.noise);
    }
},
};

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();

const massHysteria = (dogs, cats) => {
    if (dogs.raining && cats.raining) {
        console.log (' Dogs and cats living together! Mass Hysteria');

    }
};

massHysteria(); 