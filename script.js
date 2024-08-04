var courses = [
    {
        name : "Complete Angular Course",
        price : "2.3"
    },
    {
        name : "Complete ReactJS Course",
        price : "2.5"
    },
    {
        name : "Complete Android Development Course",
        price : "3.0"
    },
    {
        name : "Complete Java Course",
        price : "2.1"
    },
]

function generateList(){
    const ul =  document.querySelector(".classUl");
    ul.innerHTML = "";
    courses.forEach(
        (courses) => {
            const li = document.createElement("li");
            li.classList.add("classLi");

            const name = document.createTextNode(courses.name);
            li.appendChild(name);

            const span = document.createElement("span");
            span.classList.add("classSpan");

            const price = document.createTextNode("$ " + courses.price);
            span.appendChild(price);

            li.appendChild(span);
            ul.appendChild(li);
        }
    );
}

window.addEventListener("load",generateList);

const button = document.querySelector(".classButton");

button.addEventListener("click", () => {
    courses.sort((a,b) => a.price - b.price);
    generateList();
});