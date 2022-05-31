let month = document.getElementById("monthly");
let year = document.getElementById("yearly");

let monthly = document.getElementById('monthlyPlans');
let yearly = document.getElementById('yearlyPlans');

/* Function to control radio buttons
/* & display according to the choosing of the user (Monthly / Yearly) */
function onCheck() {
    month.onclick = function() {
        year.checked = false;
        monthly.style.display = "grid";
        yearly.style.display = "none";
    }

    year.onclick = function() {
        month.checked = false;
        yearly.style.display = "grid";
        monthly.style.display = "none";
    }
}

onCheck();

/* Function for Pricing Plan section to make it
* scroll on small sized devices */

function convertToScroll() {
    let w = window.innerWidth;

    if(w <= 1300) {
        let plans = document.getElementById("plan");

        plans.style.overflowX = "scroll";
    }
}
