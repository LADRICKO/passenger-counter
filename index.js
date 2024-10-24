// // document.getElementById("count-el").innerText =7

// let count = 7

// count = count + 1

// console.log(count)



// // function increment() {
// //     console.log("The button was clicked")
// // }

// function num42(){
//     console.log(42)
// }

// num42()

// let lapsCompleted = 0

// function incrementLap(){
    
//     lapsCompleted = lapsCompleted + 1

// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)



let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment(){
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save(){
    let countString = count + "-"
    saveEl.textContent += countString
    countEl.textContent = 0
    count = 0
    console.log(count)
}
save()

// const  username =  "Ladrick"
// const message = "You have three new notifications"

// const messageToUser = message + ", " + username + "!"

// console.log(messageToUser)


// const name = "Ladrick"
// const greeting = "Hello, my name is "

// const myGreeting = greeting + name

// console.log(myGreeting)

