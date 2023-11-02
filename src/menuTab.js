export function MenuTab() {
    const mainContent = document.querySelector("#content");

    while (mainContent.children.length > 1) {
        mainContent.removeChild(mainContent.lastChild);
    }

    const menuPage = document.createElement("div");
    menuPage.classList.add("menu-page");
    mainContent.appendChild(menuPage);

    const numOfDishes = 6;

    for (let i = 1; i <= numOfDishes; i++) {
        const category = document.createElement("div");
        category.classList.add("food-category");
        const categoryName = document.createElement("h1");
        const categoryContent = document.createElement("ul");

        for (let i = 0; i < 3; i++) {
            const dish = document.createElement("li");
            dish.textContent = "Keke";
            categoryContent.appendChild(dish);
        }

        MenuCreation(categoryName, i);

        menuPage.appendChild(category);
        category.append(categoryName, categoryContent);
    }
}

function MenuCreation(category, categoryNum) {
    switch (categoryNum) {
        case 1:
            category.innerText = "Firsts";
            break;
        case 2:
            category.innerText = "Seconds";
            break;
        case 3:
            category.innerText = "Salads";
            break;
        case 4:
            category.innerText = "Desserts";
            break;
        case 5:
            category.innerText = "Drinks";
            break;
        case 6:
            category.innerText = "Specials";
            break;
    }
}
