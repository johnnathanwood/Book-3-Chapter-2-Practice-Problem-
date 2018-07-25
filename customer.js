const customers = [
        {
            location: {
                street: "Old York Road",
                state: "Delaware",
                country: "Qatar",
                city: "Irma"
            },
            last_name: "Herzog",
            job: {
                position: "Senior Intranet Assistant",
                phone_number: "1-035-577-1574",
                department: "sales",
                company: "Ganjazamlux"
            },
            first_name: "Johnson",
            contacts: {
                mobile: "102.596.5226",
                email: [
                    "rerum@outlook.com",
                    "possimus_abraham@hotmail.com",
                    "yoshiko@gmail.com"
                ]
            }
        },
        {
            location: {
                street: "Maple Street",
                state: "Wyoming",
                country: "Uzbekistan",
                city: "Ortonville"
            },
            last_name: "Stehr",
            job: {
                position: "Dynamic Quality Administrator",
                phone_number: "555.173.9685",
                department: "customer service support",
                company: "Hating"
            },
            first_name: "Rogelio",
            contacts: {
                mobile: "1-746-406-3132",
                email: [
                    "saw_savannah@yahoo.com",
                    "this46@outlook.com",
                    "quidem_shayna@hotmail.com"
                ]
            }
        },
        {
            location: {
                street: "Cleveland Avenue",
                state: "South Carolina",
                country: "Lebanon",
                city: "New Salem"
            },
            last_name: "McDermott",
            job: {
                position: "Human Research Architect",
                phone_number: "1-120-949-9685",
                department: "accounting",
                company: "Keyzazim"
            },
            first_name: "Herbert",
            contacts: {
                mobile: "705.404.8808",
                email: [
                    "him_joshuah@yahoo.com",
                    "neha@outlook.com",
                    "tail@gmail.com"
                ]
            }
        },
        {
            location: {
                street: "Route 30",
                state: "Pennsylvania",
                country: "Nauru",
                city: "Brocton"
            },
            last_name: "Buckridge",
            job: {
                position: "National Usability Technician",
                phone_number: "215.951.1943",
                department: "research and development",
                company: "Dongsolofind"
            },
            first_name: "Keagan",
            contacts: {
                mobile: "665.835.9595",
                email: [
                    "trade_hunter@yahoo.com",
                    "ut@hotmail.com",
                    "throw@gmail.com"
                ]
            }
        },
        {
            location: {
                street: "Arch Street",
                state: "Illinois",
                country: "Guam",
                city: "Stroud"
            },
            last_name: "Barton",
            job: {
                position: "Dynamic Directives Analyst",
                phone_number: "1-069-596-0831 x15766",
                department: "operations",
                company: "Zoomruntam"
            },
            first_name: "Kenton",
            contacts: {
                mobile: "(972) 219-3017",
                email: [
                    "alberto@outlook.com",
                    "june@gmail.com",
                    "rafaela@hotmail.com"
                ]
            }
        },
        {
            location: {
                street: "Race Street",
                state: "Nebraska",
                country: "Syrian Arab Republic",
                city: "Guelph"
            },
            last_name: "Mitchell",
            job: {
                position: "Principal Implementation Specialist",
                phone_number: "713-818-2034 x23626",
                department: "IT support",
                company: "Hot-tom"
            },
            first_name: "Hattie",
            contacts: {
                mobile: "(144) 533-6049",
                email: [
                    "river32@yahoo.com",
                    "class65@gmail.com",
                    "scale_oda@outlook.com"
                ]
            }
        },
        {
            location: {
                street: "Prospect Avenue",
                state: "Massachusetts",
                country: "Fiji",
                city: "Hachita"
            },
            last_name: "Rohan",
            job: {
                position: "Customer Identity Producer",
                phone_number: "110-592-6773 x3160",
                department: "production",
                company: "Zapware"
            },
            first_name: "Clotilde",
            contacts: {
                mobile: "005.981.1039",
                email: [
                    "winter@outlook.com",
                    "kyla@gmail.com",
                    "boy@yahoo.com"
                ]
            }
        },
        {
            location: {
                street: "Lexington Court",
                state: "Georgia",
                country: "Tokelau",
                city: "Blackwater"
            },
            last_name: "Kuphal",
            job: {
                position: "Direct Division Executive",
                phone_number: "(763) 900-2576 x943",
                department: "operations",
                company: "Inchdonin"
            },
            first_name: "Marcelle",
            contacts: {
                mobile: "1-511-518-7079",
                email: [
                    "try@outlook.com",
                    "part73@yahoo.com",
                    "mother5@hotmail.com"
                ]
            }
        },
        {
            location: {
                street: "Cobblestone Court",
                state: "Minnesota",
                country: "Saint Helena, Ascension and Tristan da Cunha",
                city: "North Stonington"
            },
            last_name: "Thompson",
            job: {
                position: "Product Response Facilitator",
                phone_number: "(948) 430-6348 x4290",
                department: "communication",
                company: "Goldcare"
            },
            first_name: "Briana",
            contacts: {
                mobile: "714-922-9557",
                email: [
                    "randi@outlook.com",
                    "christian@yahoo.com",
                    "tempore_gilda@hotmail.com"
                ]
            }
        },
        {
            location: {
                street: "Mill Street",
                state: "Kentucky",
                country: "Ireland",
                city: "Crystal"
            },
            last_name: "Weimann",
            job: {
                position: "Future Web Representative",
                phone_number: "693-204-7849 x4251",
                department: "legal",
                company: "K-touch"
            },
            first_name: "Brittany",
            contacts: {
                mobile: "1-327-084-4643",
                email: [
                    "she@hotmail.com",
                    "quam3@gmail.com",
                    "recusandae23@outlook.com"
                ]
            }
        }
]


// // I ran a console log to make sure I knew how to get to the emails below
// // console.log(customers.customers[0].contacts.email)

// // customers is the name of my data structure, so dataFind is basically "go into the datastructure, and find each customer"   
// //       |   |   |
// //       |   |   |
// //      \|/ \|/ \|/
// let dataFind = customers.customers;

// // Next I made a function to loop through each customer and grab only their emails, and store them in an empty array called "storedEmails". When the loop is done, I had the function return the emails array.
// //    |      |       |
// //    |      |       |
// //   \|/    \|/     \|/

// let allEmails = []
// const extractEmail = customers.map(function(arguement){
//    return allEmails = allEmails.concat(arguement.contacts.email)
// })
// console.log(allEmails)

// // Now I've set these specific results to a new variable, same name because the other only exist in the scope of the function so it is reusable outside
// //      |     |     |
// //      |     |     |
// //     \|/   \|/   \|/

// let storedEmails = allEmails(dataFind);

// // Now I log it to see the array of arrays
// console.log(storedEmails);
console.log("where emails are stored:", customers[0].contacts.email);
let h3 = document.getElementById("emails");
// forEach loop to go into the customers array
let emailArray = [];
let betterEmailArray = [];
// this is going through each index of the array
let customerLoop = customers.forEach((item) => {
    console.log("customers loop:", item);
    // assigned the variable to the item > going into contacts > and into email.
    let emails = item.contacts.email;
    console.log("emails: ", emails);
    // push customer emails into an array
    emailArray.push(emails);
    // loop through customer emails to grab each individual email
        emails.forEach((oneEmail)=>{
            // assigned variable to the new email list of individual emails
            let emailList = betterEmailArray.push(oneEmail);
            console.log("One list of emails?:", emailList);
        })
})

console.log("better Email Array: ", betterEmailArray);
// added *** to see emails better on page
h3.innerHTML = betterEmailArray.join(" *** ");