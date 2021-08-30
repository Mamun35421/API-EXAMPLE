const loadBuddis = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddes(data));

}
loadBuddis();

const displayBuddes = data =>{
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for(const buddy of buddies)
    console.log(buddy)
    const p = document.createElement('p');
    p.innerText =`name: ${buddy.name.first} ${buddy.name.last}`;

    buddiesDiv.appendChild(p);
}