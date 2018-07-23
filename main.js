const advisor = Object.create(null, {
    company: 
    {
        value: "GreenGots",
        enumerable: true,
        writeable: true
    },

    specialty: {
        value: "Goblins",
        enumerable: true,
        writeable: true
    },

    name: {
        value: "Bill Weasley",
        enumerable: true,
    },

    portfolio:{
        value:[ 
            {
                symbol: "CBR",
                name: "Curse Breaking Inc",
                shares: 450,
                valuation: 34567891
            },
            {
                symbol: "FDE",
                name: "Fighting Death Eaters, LLC",
                shares: 231,
                valuation: 4563728
            },
            {
                symbol: "SWA",
                name: "Surviving a werewolf attack, LLC",
                shares: 798,
                valuation: 89000
            },
            {
                symbol: "WWW",
                name: "Weasley's Wizarding Wheezes Co.",
                shares: 2300,
                valuation: 1000000000
            }
        ],
        enumerable: false,
        writable: true
    },
    worth: {
        value: function (){

        },
        enumerable: false
    },
    purchase: {
        value: function(symbol,name,quantity, price){
            advisor.portfolio.push({
                symbol: symbol,
                name: name,
                shares: quantity,
                valuation: price
            })

        },
        enumerable: false
    },
    sell: {
        value: function (symbol, name, quantity, price) {
            let portfolio = advisor.portfolio;
            for (let i = 0; i < portfolio.length; i++) {
                if (portfolio[i].symbol === symbol
                    && portfolio[i].name === name
                    && portfolio[i].shares === quantity
                    && portfolio[i].valuation === price){
                        console.log("got 1", i);
                         portfolio.splice([i])
                }
            }
        }
    }

});
   
advisor.sell("FDE", 231,4563728)   
    


// console.log(advisor.portfolio[0]);

// function(index)

// for (const key in advisor) {
//         console.log(key, advisor[key]);
//     }


// advisor.purchase("GUP", "Growing Up Poor", 1, 10);
// console.log(advisor);


//     // console.log(advisor.portfolio.push(newPortfolio));
// let newPortfolio = {
//     symbol: "GUP",
//     name: "Growing up Poor",
//     shares: 1,
//     valuation: 12

// };

// function addPortfolio(){
//     advisor.portfolio.push(newPortfolio);
// }
// addPortfolio()
// console.log(advisor);


// // let newPortfolio = () {
// // function addPortfolio(){
// //     advisor.portfolio.value.push(newPortfolio);

// // }

// // addPortfolio();
// // console.log(advisor);
// // },
// // });// console.log(advisor.portfolio.push(newPortfolio));
// let newPortfolio = {
//     symbol: "GUP",
//     name: "Growing up Poor",
//     shares: 1,
//     valuation: 12

// };

// function addPortfolio(){
//     advisor.portfolio.push(newPortfolio);
// }
// addPortfolio()
// console.log(advisor);


// // let newPortfolio = () {
// // function addPortfolio(){
// //     advisor.portfolio.value.push(newPortfolio);

// // }

// // addPortfolio();
// // console.log(advisor);
// // },
// // });