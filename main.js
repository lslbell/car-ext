const baseUri = 'https://www.check-mot.service.gov.uk/results?registration=';

const searchMOTHistory = (registration) => {
    try {
        const uri = baseUri + registration;
        chrome.tabs.create({
            'url': uri
        });
    }
    catch (e) {
        console.error("Failed to open window: " + e);
    }
};


const handleClickSearchBtn = () => {
    let input = document.getElementById("search-mot").value;
    if (input) {
        let formattedInput = input.replaceAll(" ", "");
        searchMOTHistory(formattedInput);
    }
};

let searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", handleClickSearchBtn);


