console.log("Hello world.");
console.log("From script.js file.");

const myName="Sandra";
let age=21;
let number="09668930056";
let address="Manapla"
let addnumber=67;


console.log(`Name: ${myName} `);
console.log(`Age: ${age} `);
console.log(`Number: ${number} `);
console.log(`Address: ${address} `);
console.log(addnumber);

function greet(greetings,names=[]){
    if (Array.isArray(names));{
    names=names.join(" , ")
}
    return  `${greetings} sa enyu, ${names}`;

}   
console.log(greet("Mayong aga", ["sandra", "bai", "soy", "tol", "namnueng"]));

const heading = document.querySelector("h1");
heading.textContent = "Jose Margil P. Segaya"
heading.style.color = "purple"
heading.style.backgroundColor = "yellow"
heading.style.fontSize = "60px"
console.log(heading.textContent);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectHeading = document.querySelector("#services h2");
console.log(projectHeading);


