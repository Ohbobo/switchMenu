const buttonsValidatorContainer = document.querySelector('.validator-icons');
const enterButton = document.querySelector('.enter-button');

let buttons = [
    {
        title: "1",
        active: false,
    },
    {
        title: "2",
        active: false,
    },
    {
        title: "3",
        active: false,
    },
];

const refreshData = () => {
    buttonsValidatorContainer.innerHTML = "";
    for(let i = 0; i < buttons.length; i++) {
    
        const isActive = buttons[i].active === true;
        
        console.log(isActive)
    
        let containerHTML = `<p class=${isActive ? "active-button" : ""}>${buttons[i].title}</p>`;
         buttonsValidatorContainer.innerHTML += containerHTML;
        
    }
}

refreshData()

enterButton.addEventListener('click', () => {
    const isActive = buttons.filter(btn => btn.active === false);

    const ok = buttons.every(btn => btn.active === true);

    console.log(isActive)
    
    if(ok) {
        alert('dashboard');
        return;
    }

    if(isActive) {
        isActive[0].active = true
        console.log(isActive[0])
        refreshData();
    }
})