let myInfo={
    name: "priynka",
    age: 22,
    cgpa: 9.3
}

console.log(myInfo); // give all vlaue

console.log(myInfo.name);  // priyanka output

console.log(myInfo.age);// 22 output

console.log(myInfo.cgpa);// 9.3 output


let students={
    student1: "dhanashree",
    student2: "Divya",
    student3 :"kajal",
    student4:"priyanka",
    student5:"shereya",
    Student6:"vaishanvi"
}

console.log(students);

console.log(students.Student6);
console.log(students.student2);
console.log(students.student3);



let college={
    FYBCS :["priyanka", "dhanashre", "divya"],

    SYBCS:["kajal", "sejal"],

    TYBCS:["vrushali"]
}

console.log(college.FYBCS.indexOf(divya));// return index 


console.log(college.FYBCS);// give FYBCS array only

console.log(college.TYBCS.push("harshada"));





let info={
    name:{
        name:"priyanka",
        lastname:"gangavane"
    }, 
  
}
console.log(info ?.home ?.age );  // not show error used to safe accsess

console.log(info ?.name ?.age );


let MyInastaData={
    is_private: true,
    account_name:"priyank 412",
    user_name:"priyank 412",

    follwoing:{
        "1":"A",
        "2":"B"
    },

    posts:{
        url:" image post url",
        name:"post name"
    }
}