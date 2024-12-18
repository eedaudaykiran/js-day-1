let username=prompt("enter the username");
let pro=prompt("enter the product name");
let pri=prompt("enter the price details");
let da=prompt("enter the day");
let occa=prompt("occation");
let plat=prompt("enter the platform")
let obj={
    name:username,
    product:pro,
    price:pri,
    day:da,
    occation:occa,
    platform:plat,

}


alert(`${obj.name} has purchased a ${obj.product} which costs ${obj.price} on ${obj.day} on the ${obj.occation} in ${obj.platform}`)
console.log(`${obj.name} has purchased a ${obj.product} which costs ${obj.price} on ${obj.day} on the ${obj.occation} in ${obj.platform}`)




let studname=prompt("enter the student name") ;
let comp= prompt("enter the company") ;
let pack= prompt("enter the package") ;
let domain= prompt("enter the domain name") ;
let date= prompt("enter the joning date ") ;

let stu={
    studentname:studname,
    companyname:comp,
    package:pack,
    domainname:domain,
    joining:date,

}


alert(`${stu.studentname} got placed in ${stu.companyname} company as a ${stu.domainname} with ${stu.package} joining on ${stu.joining}`)
console.log(`${stu.studentname} got placed in ${stu.companyname} company as a ${stu.domainname} with ${stu.package} joining on ${stu.joining}`)