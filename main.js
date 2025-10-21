const baseUri = 'https://www.check-mot.service.gov.uk/results?registration=';
const checkRecalls = '&checkRecalls=true';

function searchMOTHistory(registration) {
    try {
        const uri = baseUri + registration + checkRecalls;
        chrome.tabs.create({
            'url': uri
        });
    }
    catch (e) {
        console.error("Failed to open window: " + e);
    }
};

function handleClickSearchBtn() {
    let input = document.getElementById("search-mot").value;
    if (input) {
        let formattedInput = input.replaceAll(" ", "");
        searchMOTHistory(formattedInput);
    }
};

let searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", handleClickSearchBtn);

let inputBox = document.getElementById("search-mot");
inputBox.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      searchBtn.click();  
    }
});

