function search() {

    // Get the value types in search bar and transform to lower case.
    let item = document.getElementById("searchItem").value;
    let itemInLowerCase = item.toLowerCase();
    let targetId = " ";

    // Get all sections/divs from web page.
    let divs = document.getElementsByClassName("animate");

    for (let i = 0; i < divs.length; i++) {

        // Get all headings.
        let header2 = divs[i].getElementsByTagName("h2");
        let header1 = divs[i].getElementsByTagName("h1");

        // Get the values in headings and transform ot lower case.
        let header2Value = header2[0].innerText.toLowerCase();
        let header1Value = header1[0].innerText.toLowerCase();

        // See if there's any matches and scroll to match.
        if (header2Value.includes(itemInLowerCase) || header1Value.includes(itemInLowerCase)) {
            console.log("success");

            targetId = divs[i].id;
            document.getElementById(targetId).scrollIntoView({block: 'center'});
            break;
        }
    }
     if(targetId === " ") {
         alert("No such values in web page");
     }
}