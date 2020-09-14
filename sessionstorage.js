let myObj = {
    name: "Daniyal",
    age: 14,
    passion: 'Coding'
};

sessionStorage.setItem("profile", myObj);

sessionStorage.getItem("profile")
sessionStorage.setItem("profile", JSON.stringify(myObj));
let storageProfileString = localStorage.getItem("profile");
let savedPerson = JSON.parse(storageProfileString);
