// // const number = prompt('Please Enter your number:' );

// // let squareRoot = Math.sqrt(number)

// // //console.log(squareRoot)

// // document.getElementById('sqrt').innerHTML = `The square Root of ${number} is {squareRoot}`;
// // document.getElementById('sqrt2').innerHTML = 'The square Root of' + 'is ' + squareRoot;


// const base = prompt('Enter the Base Triangle :' );
// const height = prompt('Enter the Height Triangle :' );

// let Area = 1/2 * base * height ;

// console.log('The Area is', Area);

// document.getElementById('sqrt').innerHTML = `The Area of ${number} is {Area}`;
// 12

const naira = document.getElementById('naira');

naira.addEventListener("input", nairaConverter)

function nairaConverter(e) {
    let nairaC = e.target.value;
    document.getElementById('dollars').value = nairaC / 493;
    document.getElementById('pounds').value = nairaC / 710;
    document.getElementById('euros').value = nairaC / 595;
}