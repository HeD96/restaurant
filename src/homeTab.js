import TeamImage from "./team.jpg";

export function HomeTab() {
    const mainContent = document.querySelector("#content");

    while (mainContent.children.length > 1) {
        mainContent.removeChild(mainContent.lastChild);
    }

    const aboutPage = document.createElement("div");
    aboutPage.classList.add("about-page");
    mainContent.appendChild(aboutPage);

    const pageTitle = document.createElement("h1");
    const titleWrap = document.createElement("div");
    pageTitle.textContent = "About Us";
    titleWrap.appendChild(pageTitle);

    const companyPresentation = document.createElement("p");
    const presentWrap = document.createElement("div");
    companyPresentation.innerHTML =
        "Hello and welcome to our homepage! If you feel like eating something that is not overly exotic, but not so simple that it wouldn't surprise you, then oh boy we have something to offer here. Check out <span>info page</span> about our little place if you want, but definitely look into our <span>menu</span> and <span>contact us</span> if there is something you like!";
    presentWrap.appendChild(companyPresentation);

    const teamImage = new Image();
    teamImage.src = TeamImage;
    teamImage.classList.add("team-image");

    aboutPage.append(titleWrap, presentWrap);
    mainContent.appendChild(teamImage);
}
