import "./style.css";
import { InitialLoad } from "./initialLoad.js";
import { HomeTab } from "./homeTab";
import { MenuTab } from "./menuTab.js";
import { ContactsTab } from "./contactsTab.js";

InitialLoad();
HomeTab();

const navMenu = document.querySelector(".nav-menu");
navMenu.addEventListener("click", MenuTab);

const navHome = document.querySelector(".nav-home");
navHome.addEventListener("click", HomeTab);

const navContacts = document.querySelector(".nav-contacts");
navContacts.addEventListener("click", ContactsTab);
