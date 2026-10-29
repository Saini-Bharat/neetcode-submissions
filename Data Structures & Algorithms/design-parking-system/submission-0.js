class ParkingSystem {
    constructor(big, medium, small) {
        this.remaning = [big, medium, small]
    }
    addCar(carType) {
        if(this.remaning[carType - 1] == 0 ){
            return false
        }
        this.remaning[carType - 1]--
        return true
    }
}
