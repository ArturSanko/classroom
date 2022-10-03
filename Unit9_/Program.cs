using System;

namespace Unit9
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("UNIT 9 task 1");
            Zoo bialystokar = new Zoo("Konstytucji 3 Maja Park", 100.0, 1960, 0.0);
            Console.WriteLine("----------------------------------------------");
            Console.WriteLine(bialystokar.Address);
            Console.WriteLine(bialystokar.Area);
            Console.WriteLine(bialystokar.EstablisheDate);
            Console.WriteLine(bialystokar.TicketPrice);
            Console.WriteLine("----------------------------------------------");
            bialystokar.addWorker("Artur");
            bialystokar.addWorker("Petr");
            bialystokar.addWorker("Ivan");
            bialystokar.removeWorker("Petr");
            bialystokar.editWorker("Ivan", "Vasy");
            bialystokar.addWorker("Anay");
            bialystokar.addWorker("Oleg");
            bialystokar.addWorker("Maksim");
            bialystokar.removeWorker("Oleg");
            bialystokar.editWorker("Maksim", "Dima");
            bialystokar.showAllWorkers();
            Console.WriteLine("----------------------------------------------");
            bialystokar.addAnimal("Wolf");
            bialystokar.addAnimal("Bear");
            bialystokar.addAnimal("Tiger");
            bialystokar.addAnimal("Lion");
            bialystokar.removeAnimal("Bear");
            bialystokar.editAnimal("Tiger", "Rabbit");
            bialystokar.editAnimal("Lion", "Rat");
            bialystokar.showAllAnimals();
            Console.WriteLine("----------------------------------------------");
            bialystokar.showAnimalById(2);
            Console.WriteLine("----------------------------------------------");
            Console.WriteLine("\nUNIT 9 task 1");
            Snake viperaBerus = new Snake("Vipera berus", "Melanistic colour patterns", 10.0, 2.0, "Western Europe", true);
            Snake tiger = new Snake("Amur tiger", "Orange with black stripes", 200.0, 1.10, "Russian Far East", false);
            Snake sparrow = new Snake("Old world sparrow", "Colourful", 0.013, 0.18, "Northern Europe", true);
            Console.WriteLine("----------------------------------------------");
            viperaBerus.getAnimalInfo();
            Console.WriteLine("----------------------------------------------");
            tiger.getAnimalInfo();
            Console.WriteLine("----------------------------------------------");
            sparrow.getAnimalInfo();
            Console.WriteLine("----------------------------------------------");

        }
    }
}