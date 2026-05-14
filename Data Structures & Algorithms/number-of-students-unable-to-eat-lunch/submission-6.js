class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let map = {
            '1' : 0,
            '0' : 0,
        }
        let total = students.length 
        for(let i = 0 ; i < total ; ++i){
            map[students[i]] = map[students[i]] + 1
        }
        console.log("map" , map)
        console.log("total" , total)
        
        for(let i = 0 ; i < total ; ++i){
            console.log("map[sandwiches[i]] 1", map[sandwiches[i]])
            if(map[sandwiches[i]] == 0){
            
                return total - i 

            }
            map[sandwiches[i]]--
            console.log("map[sandwiches[i]] 2",map[sandwiches[i]])
        }
        return 0 
        
    }
}
