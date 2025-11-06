    class Car {
        drive() {
            console.log("Sürücü araba kullanıyor.");
        }
        capacity: number = 4;
    }

    class Truck {
        drive() {
            console.log("Sürücü kamyon kullanıyor.");
        }
        loadCapacity: number = 10;
    }

    type Vehicle = Car | Truck;

    function useVehicle(vehicle: Vehicle) {
        if ('capacity' in vehicle) {
            vehicle.drive();
            console.log(`Kapasite: ${vehicle.capacity}`);
        } 
        else if ('loadCapacity' in vehicle) {
            vehicle.drive();
            console.log(`Yük: ${vehicle.loadCapacity} ton`);
        }
    }

    const myCar = new Car();
    const myTruck = new Truck();

    useVehicle(myCar);
    useVehicle(myTruck);