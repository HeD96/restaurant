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

        Menu.menuCreation(categoryName, i, categoryContent);

        menuPage.appendChild(category);
        category.append(categoryName, categoryContent);
    }
}

const Menu = (function () {
    let firsts = ["Borscht", "Chicken Soup", "Pickle Soup"];
    let seconds = [
        "Cutlets with Mashed Potato",
        "Chicken with Rice",
        "Beef with Vegetables",
    ];
    let salads = ["Olivier Salad", "Greek Salad", "Caesar Salad"];
    let desserts = ["Doughnuts", "Cheesecake", "Medovik"];
    let drinks = ["Juice (in assortment)", "Tea", "Coffee", "Wine"];
    let specials = ["Chef's kiss", "Awesomesauce", "Pure Gold"];

    const menuCreation = function (title, categoryIndex, menu) {
        switch (categoryIndex) {
            case 1:
                title.innerText = "Firsts";

                for (let i = 0; i < firsts.length; i++) {
                    const dish = document.createElement("li");
                    dish.textContent = firsts[i];
                    menu.appendChild(dish);
                }

                break;
            case 2:
                title.innerText = "Seconds";

                for (let i = 0; i < seconds.length; i++) {
                    const dish = document.createElement("li");
                    dish.textContent = seconds[i];
                    menu.appendChild(dish);
                }

                break;
            case 3:
                title.innerText = "Salads";

                for (let i = 0; i < salads.length; i++) {
                    const dish = document.createElement("li");
                    dish.textContent = salads[i];
                    menu.appendChild(dish);
                }

                break;
            case 4:
                title.innerText = "Desserts";

                for (let i = 0; i < desserts.length; i++) {
                    const dish = document.createElement("li");
                    dish.textContent = desserts[i];
                    menu.appendChild(dish);
                }

                break;
            case 5:
                title.innerText = "Drinks";

                for (let i = 0; i < drinks.length; i++) {
                    const dish = document.createElement("li");
                    dish.textContent = drinks[i];
                    menu.appendChild(dish);
                }

                break;
            case 6:
                title.innerText = "Specials";

                for (let i = 0; i < specials.length; i++) {
                    const dish = document.createElement("li");
                    dish.textContent = specials[i];
                    menu.appendChild(dish);
                }

                break;
        }
    };

    return {
        menuCreation,
    };
})();
