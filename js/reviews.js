let reviews = document.getElementsByClassName("client");
let right = document.getElementById("right");
let left = document.getElementById("left");

function showOnlyThree(x) {

    let w = window.innerWidth;
    console.log(w);

    window.onresize = () => {
        w = window.innerWidth;
    }

    let i = x;
    while(i <= reviews.length){

        if(w > 890) {

            // Disable and enable buttons
            if(x === 0) {
                right.disabled = false;
                left.disabled = true;
            }
            else if(x === reviews.length - 3) {
                left.disabled = false;
                right.disabled = true;
            }
            else {
                left.disabled = false;
                right.disabled = false;
            }

            // Check if window size is still big
            // & less than 2 elements are shown
            if(i < x + 3 && w > 890) {
                if(i < 0) {
                    reviews[reviews.length - 1].style.display = 'flex';
                }
                else if(i === reviews.length) {
                    reviews[0].style.display = 'flex';
                }
                else {
                    reviews[i].style.display = 'flex';
                }
            }
            i++;
        }

        else if(w <= 890) {

            // Disable and enable buttons
            if(x === 0) {
                right.disabled = false;
                left.disabled = true;
            }

            // Rewrote this condition with change to change else if
            // otherwise it will disable the right button on element 4
            else if(x === reviews.length - 1) {
                left.disabled = false;
                right.disabled = true;
            }
            else {
                left.disabled = false;
                right.disabled = false;
            }

            // Check if window size is still big
            // & less than 2 elements are shown
            if(i < x + 1 && w <= 890) {
                if(i < 0) {
                    reviews[reviews.length - 1].style.display = 'flex';
                }
                else if(i === reviews.length) {
                    reviews[0].style.display = 'flex';
                }
                else {
                    reviews[i].style.display = 'flex';
                }
            }
            i++;
        }
    }
}

let x = 0;

function buttonClick(n) {

    for(let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = 'none';
    }

    console.log("x = " + x);
    if(n === 1) {
        showOnlyThree(++x);
    }
    else if (n === 2) {
        showOnlyThree(--x);
    }
}


showOnlyThree(0);
