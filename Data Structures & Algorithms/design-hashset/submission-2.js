class MyHashSet {
    constructor() {
        this.arr = []
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        let exist = false
        if(this.arr.length <1){
            this.arr.push(key)
        }
        for (let i = 0 ; i < this.arr.length ; ++i){
            if(this.arr[i]==key){
                exist = true
            }
        }
        if(!exist){
            this.arr.push(key)
        }   
         
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.arr = this.arr.filter( (item) => item !== key)
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
                let exist = false
        if(this.arr.length <1){
            return exist
        }
        for (let i = 0 ; i < this.arr.length ; ++i){
            if(this.arr[i]==key){
                exist = true
            }
        }
        return exist
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
