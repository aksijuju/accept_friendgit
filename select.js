const dropdown = document.querySelector('.dropdown select');

for(var select of dropdown) {
    for(country in countryList) {
        let options = document.createElement('option');
        options.innerText = country;
        options.value = country;
        select.append(options);
    }
}
