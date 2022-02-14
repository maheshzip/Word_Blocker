// it detect and changes your a site theme automatically 

let printOut = document.getElementsByTagName('body')[0];
(() => {
    //hacking block listed words gonna be here in matchword 

    let matchword = /ngrok|gnix|facebook.web|nrok/i;
    if (document.title.match(matchword)) {

        //alert msg gonna be here

        alert(`this site contains some malacious keywords and will be banned by ANTI-PHISHING PLUGIN`)
        printOut.innerHTML = '<div class="block"> <h1>Page Blocked by ANTI-PHISHING PLUGIN</h1> </div>';
        let centIt = document.querySelector('.block');
        let sites = ['http://mahesh.ninja']
        let pick = sites[Math.floor(Math.random() * sites.length)]
        setTimeout(() => window.location.href = pick, 4000)
    } else {
        //
        if (printOut.style.backgroundColor = 'white') {
            printOut.classList.add('join')
        } else {

            //theme

            let conf = confirm('this site is not on light theme so will you like to change it to light theme ?')
            if (conf === true) {
                printOut.classList.add('else ')
                return true;
            } else {
                return false;
            }
        }

    }
//nayan is kavda
})()