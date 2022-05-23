import '../../../node_modules/chart.js/dist/chart.min.js';

(function(){
    const chartCanvas= document.getElementById("example-chart");
    const data=JSON.parse(chartCanvas.parentElement.dataset.values);
    const brandColor=(window.getComputedStyle(chartCanvas)).getPropertyValue("--color-brand") || "#2541b2";
    const chart=new Chart(chartCanvas,{
        type:"line",
        data:{
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets:[{
                label:"مبيعات الشهر",
                data:data,
                borderColor:brandColor,
                backgroundColor:"transparent",
                lineTension:0.2
            }]
        },
        options:{
            plugins:{
                legend:{
                    display:false,
                }
            },

            scales:{
                y:{
                    display:false,
                },

                x:{
                    position:"top",
                }
            }
        },
    })

    const navigation = document.querySelector(".c-table__navigation");
    const randomArray=(myLength,max) => 
        Array.from({length:myLength}, () => Math.round(Math.random() * max));

    navigation.addEventListener("click" , () =>{
        chart.data.datasets[0].data=randomArray(12,1200);
        chart.update();
    })

})();