class Solution {
    /**
     * @param {number[]} arr1
     * @param {number[]} arr2
     * @return {number[]}
     */
    relativeSortArray(arr1, arr2) {
        let map = {}
        let res = []
        let remaning = []
        // for(let i = 0 ; i <arr2.length ; ++i){
        //     map[arr2[i]] = i;
        // }
        // for(let i = 0 ; i < arr1.length; ++i){
        //     if(Object.hasOwn(map, arr1[i])){
        //         res.splice(map[arr1[i]], 0 , arr1[i])
        //     }else{
        //         res.push(arr1[i])
        //     }
        // }


        for(let i = 0 ; i < arr1.length ; ++i){
            map[arr1[i]] = (map[arr1[i]] || 0) + 1;
            if(!arr2.includes(arr1[i])){
                remaning.push(arr1[i])
            }
        }

        for(let i = 0 ; i < arr2.length ; ++i){
                for(let j = 0 ; j < map[arr2[i]] ; ++j){
                    res.push(arr2[i]);
                }
        }

        remaning.sort((a,b) => a-b);
        res.push(...remaning)
        return res
    }
}
