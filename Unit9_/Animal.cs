using System;
using System.Collections.Generic;

namespace Unit9
{
    class Animal
    {
        /*
        b.	Create Animal class. See structure in the attachment. Implement the following methods:
        i.	  get animal info
        ii.	  set weight
        iii.  set height

        
        c.	Create child classes for some kinds of animals. See structure in the attachment. Implement the possibility
        to set the properties of child classes.

        class Animal {
        constructor(type, color, weight, height, placeOfOrigin) {
            this.type = type;
            this.color = color;
            this.weight = weight;
            this.height = height;
            this.placeOfOrigin = placeOfOrigin;
        }

        get getAnimalInfo() {
            console.log(
            `Type: ${this.type}\nColor: ${this.color}\nWeight: ${this.weight}\nHieght: ${this.height}\nPlace of origin: ${this.placeOfOrigin}`
            );
        }
        }

        class Snakes extends Animal {
        constructor(type, color, weight, height, placeOfOrigin, isPoisonous) {
            super(type, color, weight, height, placeOfOrigin);
            this.isPoisonous = isPoisonous;
        }
        }

        const viperaBerus = new Snakes(
        'Vipera berus',
        'Melanistic colour patterns',
        '10 kg',
        '2 metres',
        'Western Europe',
        true
        );

        class CatLike extends Animal {
        constructor(type, color, weight, height, placeOfOrigin, isSafeToPet) {
            super(type, color, weight, height, placeOfOrigin);
            this.isSafeToPet = isSafeToPet;
        }
        }

        const tiger = new CatLike(
        'Amur tiger',
        'Orange with black stripes',
        '110 cm',
        '200 kg',
        'Russian Far East',
        false
        );

        class Birds extends Animal {
        constructor(type, color, weight, height, placeOfOrigin, isFlying) {
            super(type, color, weight, height, placeOfOrigin);
            this.isFlying = isFlying;
        }
        }

        const sparrow = new Birds(
        'Old world sparrow',
        'Colourful',
        '13.4 grams',
        '18 cm',
        'Northern Europe',
        true
        );

        console.log('--------------------------------------');
        console.log(viperaBerus);
        viperaBerus.getAnimalInfo;
        console.log('--------------------------------------');
        console.log(tiger);
        tiger.getAnimalInfo;
        console.log('--------------------------------------');
        console.log(sparrow);
        sparrow.getAnimalInfo;
        console.log('--------------------------------------');
        */
        public string type, color, placeOfOrigin;
        public double weight, height;
        public bool isPoisonous, isSafeToPet, isFlying;
        public Animal(string type, string color, double weight, double height, string placeOfOrigin)
        {
            this.type = type;
            this.color = color;
            this.weight = weight;
            this.height = height;
            this.placeOfOrigin = placeOfOrigin;
        }

        public void getAnimalInfo()
        {
            System.Console.WriteLine($"Type: {type}\nColor: {color}\nWeight: {weight} kg\nHieght: {height} m\nPlace of origin: {placeOfOrigin}");
        }
    }
    class Snake : Animal
    {
        public Snake(string type, string color, double weight, double height, string placeOfOrigin, bool isPoisonous)
                        : base(type, color, weight, height, placeOfOrigin)
        {
            this.isPoisonous = isPoisonous;
        }
    }

    class Cat : Animal
    {
        public Cat(string type, string color, double weight, double height, string placeOfOrigin, bool isSafeToPet)
                     : base(type, color, weight, height, placeOfOrigin)
        {
            this.isSafeToPet = isSafeToPet;
        }
    }
    class Bird : Animal
    {
        public Bird(string type, string color, double weight, double height, string placeOfOrigin, bool isFlying)
                    : base(type, color, weight, height, placeOfOrigin)
        {
            this.isFlying = isFlying;
        }
    }

}