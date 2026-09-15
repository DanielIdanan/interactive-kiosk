// when the whole page the html and css finishes loading it will shows what time it loaded
window.addEventListener("load", function () {
	const ts = document.getElementById('timestamp');
	ts.textContent = "Page loaded at: " + new Date().toLocaleTimeString()
})

var themeBtn = document.getElementById("theme-btn");
// when you click the theme button the page will switch to dark mode and light mode
themeBtn.addEventListener('click', () => {
	document.body.classList.toggle("dark")
	if (document.body.classList.contains("dark")) {
		document.body.style.background = "#222";
		document.body.style.color = '#eee';
	} else {
		document.body.style.background = "#fff";
		document.body.style.color = "#000";
	}
});

const hoverCard = document.getElementById('hover-card')
const hiddenInfo = document.getElementById("hidden-info")
// when the mouse hover it reveals a hidden text by adding the "show" class
hoverCard.addEventListener("mouseover", function () {
	hiddenInfo.classList.add('show')
})

// when the mouse leaves the hover card it will hide the text by removing the "show" class
hoverCard.addEventListener('mouseout', () => {
	hiddenInfo.classList.remove("show");
});

const searchBox = document.getElementById("search-box");
const items = document.querySelectorAll("#item-list li")
// it will fires every time you type delete in the search box
searchBox.addEventListener("input", (e) => {
	let query = e.target.value.toLowerCase();
	items.forEach((item) => {
		let match = item.textContent.toLowerCase().includes(query)
		if (match) { item.style.display = ''; } else { item.style.display = "none"; }
	})
})

const textArea = document.getElementById("text-area")
const charCount = document.getElementById('char-count')
// on every key press in the text area it updates the character count
textArea.addEventListener("keydown", () => {
	setTimeout(function () {
		charCount.textContent = "Characters: " + textArea.value.length
	}, 0)
})

const demoForm = document.getElementById("demo-form")
const formMessage = document.getElementById('form-message')
// when the form is submitted it will stops the page from reloading and shows a thank you message
demoForm.addEventListener('submit', (e) => {
	e.preventDefault()
	const name = document.getElementById("name-input").value.trim()
	if (name) {
		formMessage.textContent = `Thanks, ${name}!`
	} else {
		formMessage.textContent = "Please enter a name."
	}
})

const noticeBtn = document.getElementById("notice-btn")
const noticeText = document.getElementById('notice-text')

// when notice button is clicked, changes the text then removes itself so it can only run once
function dismissNotice() {
	noticeText.textContent = "Notice dismissed. This button is now inactive."
	noticeBtn.removeEventListener("click", dismissNotice)
}

noticeBtn.addEventListener("click", dismissNotice)
