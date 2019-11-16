 exports.groupAdultsByAgeRange = function (arrayOfPeople) {
     let obj = {}
     for (let i = 0; i < arrayOfPeople.length; i++) {
         if (arrayOfPeople[i].age <= 20 && arrayOfPeople[i].age >= 18) {
             if (obj["20 and younger"] == undefined) {
                 obj["20 and younger"] = [arrayOfPeople[i]]
             } else {
                 obj["20 and younger"].push(arrayOfPeople[i])
             }
         } else if (arrayOfPeople[i].age <= 30 && arrayOfPeople[i].age >= 21) {
             if (obj["21-30"] == undefined) {
                 obj["21-30"] = [arrayOfPeople[i]]
             } else {
                 obj["21-30"].push(arrayOfPeople[i])
             }
         } else if (arrayOfPeople[i].age <= 40 && arrayOfPeople[i].age >= 31) {
             if (obj["31-40"] == undefined) {
                 obj["31-40"] = [arrayOfPeople[i]]
             } else {
                 obj["31-40"].push(arrayOfPeople[i])
             }
         } else if (arrayOfPeople[i].age <= 50 && arrayOfPeople[i].age >= 41) {
             if (obj["41-50"] == undefined) {
                 obj["41-50"] = [arrayOfPeople[i]]
             } else {
                 obj["41-50"].push(arrayOfPeople[i])
             }
         } else if (arrayOfPeople[i].age >= 51) {
             if (obj["51 and older"] == undefined) {
                 obj["51 and older"] = [arrayOfPeople[i]]
             } else {
                 obj["51 and older"].push(arrayOfPeople[i])
             }
         }
     }
     return obj
 }



