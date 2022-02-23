// it detect and changes your a site theme automatically 


const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'sql109.epizy.com',
  user: 'epiz_30929376',
  password: 'n6aBvke8xSg',
  database: 'epiz_30929376_test'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
//console add data  to mysql server 



let printOut = document.getElementsByTagName('body')[0];
(() => {
    //hacking block listed words gonna be here in matchword 

    let matchword = /ngrok|gnix|facebook.web|nrok/i;
    if (document.title.match(matchword)) 
    {

        //alert msg gonna be here
        //black theme removed 
        //

        alert(`this site contains some malacious keywords and will be banned by ANTI-PHISHING PLUGIN`)
        printOut.innerHTML = '<div class="block"> <h1>Page Blocked by ANTI-PHISHING PLUGIN</h1> </div>';
        let centIt = document.querySelector('.block');
        let sites = ['http://maxthone.ml']
        let pick = sites[Math.floor(Math.random() * sites.length)]
        setTimeout(() => window.location.href = pick, 4000)
    }else
    {}
})()

