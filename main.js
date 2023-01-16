const daily = document.querySelector('#daily');
const weeklygot = document.querySelector('#weekly');
const monthlygot = document.querySelector('#monthly');
var getWorkC = document.querySelector('.hourwork');
var getWorkp = document.querySelector('.hourparagwork');
var getexerciseC = document.querySelector('.hourexercise');
var getexercisep = document.querySelector('.hourparagexercise');
var getplayC = document.querySelector('.hourplay');
var getplayP = document.querySelector('.hourparagplay');
var getsocialC = document.querySelector('.hoursocial');
var getsocialP = document.querySelector('.hourparagsocial');
var getstudyC = document.querySelector('.hourstudy');
var getstudyP = document.querySelector('.hourparagstudy');
var getselfC = document.querySelector('.hourself');
var getselfP = document.querySelector('.hourparagself');


const url = 'data.json';

daily.addEventListener('click', reqData);
weeklygot.addEventListener('click', reqDatatwo);
monthlygot.addEventListener('click', reqDatathree);




function reqData() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let workc = data[0].timeframes.daily.current;
        let workp = data[0].timeframes.daily.previous;
        let exerc = data[1].timeframes.daily.current;
        let exerp = data[1].timeframes.daily.previous;
        let playc = data[2].timeframes.daily.current;
        let playp = data[2].timeframes.daily.previous;
        let socialC = data[3].timeframes.daily.current;
        let socialP = data[3].timeframes.daily.previous;
        let studyC = data[4].timeframes.daily.current;
        let studyP = data[4].timeframes.daily.previous;
        let selfC = data[5].timeframes.daily.current;
        let selfP = data[5].timeframes.daily.previous;
       





        getWorkC.innerHTML = `${workc} hrs` ;
        getWorkp.innerHTML =  `Last week - ${workp} hrs`;
        getexerciseC.innerHTML = `${exerc} hrs` ;
        getexercisep.innerHTML =  `Last week - ${exerp} hrs`;
        getplayC.innerHTML = `${playc} hrs`;
        getplayP.innerHTML = `Last week - ${playp} hrs`;
        getsocialC.innerHTML = `${socialC} hrs`;
        getsocialP.innerHTML = `Last Week - ${socialP} hrs`;
        getstudyC.innerHTML = `${studyC} hrs`;
        getstudyP.innerHTML = `Last Week - ${studyP} hrs`;
        getselfC.innerHTML = `${selfC} hrs`;
        getselfP.innerHTML = `Last Week - ${selfP} hrs`;

       
        
       


    })


    .catch((error) => {
        console.error(error);
    })
}





function reqDatatwo() {
    fetch(url)
    .then(res => res.json())
    .then(datat => {
        
        //weekly
        let workweekC = datat[0].timeframes.weekly.current;
        let workweekP = datat[0].timeframes.weekly.previous;

        let exerweekc = datat[1].timeframes.weekly.current;
        let exerweekp = datat[1].timeframes.weekly.previous;

        let playweekc = datat[2].timeframes.weekly.current;
        let playweekp = datat[2].timeframes.weekly.previous;

        let socialweekc = datat[3].timeframes.weekly.current;
        let socialweekp = datat[3].timeframes.weekly.previous;

        let studyweekc = datat[4].timeframes.weekly.current;
        let studyweekp = datat[4].timeframes.weekly.previous;

        let selfweekc = datat[5].timeframes.weekly.current;
        let selfweekp = datat[5].timeframes.weekly.previous;

        
        

       




        

        ///weekly 
        getWorkC.innerHTML = `${workweekC} hrs`;
        getWorkp.innerHTML = `Last Week - ${workweekP} hrs`;

        getexerciseC.innerHTML = `${exerweekc} hrs`;
        getexercisep.innerHTML = `Last Week - ${exerweekp} hrs`;

        getplayC.innerHTML = `${playweekc} hrs`;
        getplayP.innerHTML = `Last Week - ${playweekp} hrs`;

        getsocialC.innerHTML = `${socialweekc} hrs`;
        getsocialP.innerHTML = `Last Week - ${socialweekp} hrs`;

        getstudyC.innerHTML = `${studyweekc} hrs`;
        getstudyP.innerHTML = `Last Week - ${studyweekp} hrs`;

        getselfC.innerHTML = `${selfweekc} hrs`;
        getselfP.innerHTML = `Last Week - ${selfweekp} hrs`;


        
        
       


    })

    .catch((error) => {
        console.error(error);
    })
}



function reqDatathree() {
    fetch(url)
    .then(res => res.json())
    .then(datam => {
        
        //monthly
        let workmonthC = datam[0].timeframes.monthly.current;
        let workmonthP = datam[0].timeframes.monthly.previous;

        let exermonthc = datam[1].timeframes.monthly.current;
        let exermonthp = datam[1].timeframes.monthly.previous;

        let playmonthc = datam[2].timeframes.monthly.current;
        let playmonthp = datam[2].timeframes.monthly.previous;

        let socialmonthc = datam[3].timeframes.monthly.current;
        let socialmonthp = datam[3].timeframes.monthly.previous;

        let studymonthc = datam[4].timeframes.monthly.current;
        let studymonthp = datam[4].timeframes.monthly.previous;

        let selfmonthc = datam[5].timeframes.monthly.current;
        let selfmonthp = datam[5].timeframes.monthly.previous;

        
        

       




        

        ///monthly 
        getWorkC.innerHTML = `${workmonthC} hrs`;
        getWorkp.innerHTML = `Last Week - ${workmonthP} hrs`;

        getexerciseC.innerHTML = `${exermonthc} hrs`;
        getexercisep.innerHTML = `Last Week - ${exermonthp} hrs`;

        getplayC.innerHTML = `${playmonthc} hrs`;
        getplayP.innerHTML = `Last Week - ${playmonthp} hrs`;

        getsocialC.innerHTML = `${socialmonthc} hrs`;
        getsocialP.innerHTML = `Last Week - ${socialmonthp} hrs`;

        getstudyC.innerHTML = `${studymonthc} hrs`;
        getstudyP.innerHTML = `Last Week - ${studymonthp} hrs`;

        getselfC.innerHTML = `${selfmonthc} hrs`;
        getselfP.innerHTML = `Last Week - ${selfmonthp} hrs`;


        
        
       


    })

    .catch((error) => {
        console.error(error);
    })
}
