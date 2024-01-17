function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
    updateIntroParagraphs();
}

function updateIntroParagraphs() {
    var introParagraphs = $("#introParagraphs");
    introParagraphs.empty();

    var firstName = localStorage.getItem('firstName') || '';
    var lastName = localStorage.getItem('lastName') || '';
    var city = localStorage.getItem('city') || '';
    var state = localStorage.getItem('state') || '';
    var zip = localStorage.getItem('zip') || '';
    var companyName = localStorage.getItem('companyName') || '';

    introParagraphs.append("<p>Agent: Hello and thank you for calling " + companyName + ". My name is angelica and I'm here to assist you today. May I have the pleasure of knowing whom I'm speaking with?</p>");
    introParagraphs.append("<p>Customer: Hi, I'm " + firstName + " " + lastName + "</p>");
    introParagraphs.append("<p>Agent: Thank you, " + firstName + "! How can I assist you today? Is there something specific you're looking for or need help with?</p>");
    introParagraphs.append("<p>Agent: Could you please provide me with the name of the city you are calling from?</p>");
    introParagraphs.append("<p>Customer: I'm from " + city + "</p>");
    introParagraphs.append("<p>Agent: Great! And what about the state?</p>");
    introParagraphs.append("<p>Customer: I'm in the state of " + state + "</p>");
    introParagraphs.append("<p>Agent: Excellent! Finally, may I know your zip code, please?</p>");
    introParagraphs.append("<p>Customer: My zip code is " + zip + "</p>");
}

$(document).ready(function () {
    
    var firstNameValue = localStorage.getItem('firstName') || '';
    var lastNameValue = localStorage.getItem('lastName') || '';
    var cityValue = localStorage.getItem('city') || '';
    var stateValue = localStorage.getItem('state') || '';
    var zipValue = localStorage.getItem('zip') || '';
    var companyNameValue = localStorage.getItem('companyName') || '';
    
    $("#firstName").val(firstNameValue);
    $("#lastName").val(lastNameValue);
    $("#city").val(cityValue);
    $("#state").val(stateValue);
    $("#zip").val(zipValue);
    $("#companyName").val(companyNameValue);

    updateIntroParagraphs();
    $.ajax({
        url: "https://api.sampleapis.com/codingresources/codingResources",
        method: "GET",
        success: function (data) {
            var tbody = $(".data-table tbody");
            data.forEach(function (item) {
                var row = $("<tr>");
                row.append("<td>" + item.description + "</td>");
                row.append("<td>" + item.types.join(", ") + "</td>");
                row.append("<td>" + item.topics.join(", ") + "</td>");
                tbody.append(row);
                row.click(function () {
                    window.open(item.url, "_blank");
                });
            });
        },
        error: function (error) {
            console.log("Error al cargar los datos:", error);
        }
    });
});