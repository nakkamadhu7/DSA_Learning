//This Array is know as data structure
const studentsDataBase = ['Madhu', 'John', 'Jordan', 'Michale', 'Jacob' ];
const numbers = [1,2,3,4,5];

// The below function excution is known as the alogrithm
const findStudent = (allStudents, studentName) => {
    //O(n)
    for (let i = 0; i < studentsDataBase.length; i++) {
        if (allStudents[i] === studentName) {
            // return true;
            console.log(`found ${studentName}`);
        }
    }
    return false;
}

//O(1)
const FindLocation = (arr, index) => arr[index];

const FindParis = (allStudents) => {
    //O(n^2)
    for (let i = 0; i < studentsDataBase.length; i++) {
        for (let j = i+1; j < studentsDataBase.length; j++) {
            // return true;
            console.log(`Pairs: ${i}, ${j}`);
        }
    }
    
    //O(n)
    for (let i = 0; i < studentsDataBase.length; i++) {
        console.log(`found ${1}`);
    }

    //the considration will be O(n^2)
}

findStudent(studentsDataBase, 'madhu');
findStudent(numbers, 0);