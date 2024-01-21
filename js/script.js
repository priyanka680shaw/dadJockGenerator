function dadsJoke(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET' , 'https://api.api-ninjas.com/v1/dadjokes?limit=1');
    xhr.setRequestHeader('X-Api-Key', 'q/wdXqJO/Rz2m7Bs1Gb5zw==peDra7evIbQ4HFKG');
    xhr.onload = () =>{
        const response = JSON.parse(xhr.response);
        console.log(response[0].joke);
        document.querySelector(".content").innerText = " ";
        document.querySelector(".content").append(response[0].joke +"😂");
    }
    xhr.send();
}
console.log(dadsJoke);
document.querySelector("button").addEventListener("click", dadsJoke);