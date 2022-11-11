using System;
using System.Collections.Generic;

namespace Unit9
{
    class Zoo
    {
        /*
        3.	You need to create a Zoo catalog, where we will keep all animals from this Zoo.

        a.	You need to create a Zoo class which. See structure in the attachment. You should implement the following methods:
        i.	  get/set zoo’s address
        ii.	  get/set zoo’s area
        iii.  get established date
        iv.	  get/set ticket’s price
        v.	  add/remove/edit worker
        vi.	  add/remove/edit animal
        vii.  show all animals
        viii. show animal by id
        ix.	  show all workers

        class Zoo {
        constructor(address, area, establisheDate, ticketPrice) {
            this.address = address;
            this.area = area;
            this.establisheDate = establisheDate;
            this.ticketPrice = ticketPrice;
            this.workers = [];
            this.animals = [];
        }

        get getZooAddress() {
            console.log(`Zoo's address is: ${this.address}`);
        }

        get getZooArea() {
            console.log(`Zoo's area is: ${this.area}`);
        }

        get getDateOfFoundation() {
            console.log(`Date of foundation is: ${this.dateOfFoundation} years`);
        }

        get getTicketPrice() {
            console.log(`Ticket's price is: ${this.ticketPrice} BYN`);
        }

        addWorker(workerID, workerSurname, workerName) {
            this.workers[workerID - 1] = [workerID, workerSurname, workerName];
        }

        removeWorker(workerID) {
            this.workers.splice(workerID - 1, 1);
        }

        editWorker(oldWorkerID, newWorkerID, newWorkerSurname, newWorkerName) {
            for (let worker of this.workers) {
            if (worker.includes(oldWorkerID)) {
                const idx = this.workers.indexOf(worker);
                this.workers[idx] = [newWorkerID, newWorkerSurname, newWorkerName];
            }
            }
        }

        get showAllWorkers() {
            for (let info of this.workers) {
            console.log(
                `Worker's ID: ${info[0]}, Worker's surname: ${info[1]}, Worker's name: ${info[2]}`
            );
            }
        }

        addAnimal(animalID, speciesAnimal, ageAnimal) {
            this.animals[animalID - 1] = [animalID, speciesAnimal, ageAnimal];
        }

        removeAnimal(animalID) {
            this.animals.splice(animalID - 1, 1);
        }

        editAnimal(oldAnimalID, newAnimalID, newSpeciesAnimal, newAgeAnimal) {
            for (let animal of this.animals) {
            if (animal.includes(oldAnimalID)) {
                const idx = this.animals.indexOf(animal);
                this.animals[idx] = [newAnimalID, newSpeciesAnimal, newAgeAnimal];
            }
            }
        }

        get showAllAnimals() {
            for (let info of this.animals) {
            console.log(
                `Animal's ID: ${info[0]}, Animal's species: ${info[1]}, Animal's age: ${info[2]}`
            );
            }
        }

        showAnimalById(animalID) {
            const animalById = this.animals[animalID - 1];
            console.log(
            `Animal's ID: ${animalById[0]}, Animal's species: ${animalById[1]}, Animal's age: ${animalById[2]}`
            );
        }
        }

        class ZooGrodno extends Zoo {}
        const zooGrodno = new ZooGrodno(
        'Timirayzeva str. 11, Grodno',
        '5,35 hectares',
        1927,
        7
        );

        console.log('----------------------------------------------');
        console.log(zooGrodno);
        console.log('----------------------------------------------');
        zooGrodno.getZooAddress;
        zooGrodno.getZooArea;
        zooGrodno.getDateOfFoundation;
        zooGrodno.getTicketPrice;
        console.log('----------------------------------------------');

        console.log(
        '-----------------------------------------------------------------'
        );
        zooGrodno.addWorker(1, 'Sanko', 'Artur');
        zooGrodno.addWorker(2, 'Petrov', 'Petr');
        zooGrodno.addWorker(3, 'Ivanov', 'Ivan');
        zooGrodno.removeWorker(2);
        zooGrodno.editWorker(3, 2, 'Ivanov', 'Petr');
        zooGrodno.addWorker(3, 'Ivanova', 'Anay');
        zooGrodno.addWorker(4, 'Olegov', 'Oleg');
        zooGrodno.addWorker(5, 'Maksimov', 'Maksim');
        zooGrodno.removeWorker(4);
        zooGrodno.editWorker(5, 4, 'Maksimov', 'Maksim');
        zooGrodno.showAllWorkers;
        console.log(
        '-----------------------------------------------------------------'
        );
        zooGrodno.addAnimal(1, 'Wolf', 5);
        zooGrodno.addAnimal(2, 'Bear', 10);
        zooGrodno.addAnimal(3, 'Tiger', 7);
        zooGrodno.addAnimal(4, 'Lion', 13);
        zooGrodno.removeAnimal(2);
        zooGrodno.editAnimal(3, 2, 'Tiger', 10);
        zooGrodno.editAnimal(4, 3, 'Lion', 14);
        zooGrodno.showAllAnimals;
        console.log(
        '-----------------------------------------------------------------'
        );
        zooGrodno.showAnimalById(2);
        console.log(
        '-----------------------------------------------------------------'
        );
        console.log(zooGrodno);
        console.log(
        '-----------------------------------------------------------------'
        );
        */
        public string address;
        public double area, ticketPrice;
        public int establisheDate;
        List<string> workers = new List<string>();
        List<string> animals = new List<string>();
        public Zoo(string address, double area, int establisheDate, double ticketPrice)
        {
            this.address = address;
            this.area = area;
            this.establisheDate = establisheDate;
            this.ticketPrice = ticketPrice;
        }

        public string Address
        {
            get { return $"Zoo's address is: {address}"; }
        }

        public string Area
        {
            get { return $"Zoo's area is: {area}"; }

        }

        public string EstablisheDate
        {
            get { return $"Date of foundation is: {establisheDate} year"; }

        }

        public string TicketPrice
        {
            get { return $"Ticket's price is: {ticketPrice} ZL"; }
        }

        public void addWorker(string workerName)
        {
            workers.Add(workerName);
        }

        public void removeWorker(string workerName)
        {
            workers.Remove(workerName);
        }

        public void editWorker(string oldWorkerName, string newWorkerName)
        {
            int workersIndex = workers.IndexOf(oldWorkerName);
            workers[workersIndex] = newWorkerName;
        }

        public void showAllWorkers()
        {
            foreach (string worker in workers)
            {
                System.Console.WriteLine(worker);
            }
        }

        public void addAnimal(string speciesAnimal)
        {
            animals.Add(speciesAnimal);
        }

        public void removeAnimal(string speciesAnimal)
        {
            animals.Remove(speciesAnimal);
        }

        public void editAnimal(string oldSpeciesAnimal, string newSpeciesAnimal)
        {
            int animalsIndex = animals.IndexOf(oldSpeciesAnimal);
            animals[animalsIndex] = newSpeciesAnimal;
        }

        public void showAllAnimals()
        {
            foreach (string animal in animals)
            {
                System.Console.WriteLine(animal);
            }
        }

        public void showAnimalById(int animalID)
        {
            System.Console.WriteLine(animals[animalID]);
        }
    }
}