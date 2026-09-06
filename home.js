const STORAGE_KEY = "choresListItems";
let chores = document.getElementById("chores");
let choresList = document.getElementById("choresList");

function getStoredChores() {
   try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
   } catch (error) {
      return [];
   }
}

function saveChores() {
   const choresToSave = Array.from(choresList.children).map((item) => item.textContent);
   try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(choresToSave));
   } catch (error) {
      console.log("Could not save chores to local storage.");
   }
}

function renderChores() {
   if (!choresList) return;

   choresList.innerHTML = "";
   const savedChores = getStoredChores();

   savedChores.forEach((choreText) => {
      const choreItem = document.createElement("li");
      choreItem.textContent = choreText;
      choresList.appendChild(choreItem);
   });
}

function submitButton() {
   let money = window.prompt("enter dollar amount");
   if (!chores || !choresList || !chores.value.trim() || money === null) {
      return;
   }

   let choreText = `${chores.value.trim()} for $${money}`;
   let choreItem = document.createElement("li");
   choreItem.textContent = choreText;
   choresList.appendChild(choreItem);
   saveChores();
   chores.value = "";
   console.log(choreText);
}

renderChores();
