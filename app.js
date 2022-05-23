import Chart from "chart.js/auto";
 
    const fetcher = function(){
        fetch("http://localhost:3000")
        .then(resp => resp.json())
        .then(data => {
            const array = data
            scoresPerStudentWisk(array)
            scoresPerGroep(array)
        })
        .catch(err => console.error(err))
    }
    fetcher()
    
    //Scores van wiskunde voor alle studenten
    const scoresPerStudentWisk = function(array){
        let wiskundeScores = []
        let label = []
        let counter = 0
        array.forEach(element => {
            wiskundeScores.push(element.math)
            counter++
            label.push(counter)
        });
        //TEKENEN OP CANVAS
        const secondChart = document.querySelector("#chartTwo")

        const labels = label

        const data = {
            labels: labels,
            datasets: [{
                label: "Every students math's points",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: wiskundeScores
            }]
        }

        const config = {
            type: "bar",
            data: data,
            options: {}
        }

        const myChart = new Chart(
            secondChart,
            config
          );
    }

    //Scores per groep
    const scoresPerGroep = function(array){
        //Opdelen in groepen
        let aArray = [];
        let bArray = [];
        let cArray = [];
        let dArray = [];
        let eArray = [];
        array.forEach(element => {
            if(element.group === "group A"){
                aArray.push(element)
            }
            else if(element.group === "group B"){
                bArray.push(element)
            }
            else if(element.group === "group C"){
                cArray.push(element)
            }
            else if(element.group === "group D"){
                dArray.push(element)
            }
            else if(element.group === "group E"){
                eArray.push(element)
            }
        })

        //Gemiddelde scores berekenen per vak per groep
        let mathA = 0;
        let readingA = 0;
        let writingA = 0;

        let mathB = 0;
        let readingB = 0;
        let writingB = 0;

        let mathC = 0;
        let readingC = 0;
        let writingC = 0;

        let mathD = 0;
        let readingD = 0;
        let writingD = 0;

        let mathE = 0;
        let readingE = 0;
        let writingE = 0;

        //GROUP A
        aArray.forEach(element => {
            mathA += parseInt(element.math)
            readingA += parseInt(element.reading)
            writingA += parseInt(element.writing)
        })
        mathA = Math.round(mathA / aArray.length)
        readingA = Math.round(readingA / aArray.length)
        writingA = Math.round(writingA / aArray.length)

        //GROUP B
        bArray.forEach(element => {
            mathB += parseInt(element.math)
            readingB += parseInt(element.reading)
            writingB += parseInt(element.writing)
        })
        mathB = Math.round(mathB / bArray.length)
        readingB = Math.round(readingB / bArray.length)
        writingB = Math.round(writingB / bArray.length)
        
        //GROUP C
        cArray.forEach(element => {
            mathC += parseInt(element.math)
            readingC += parseInt(element.reading)
            writingC += parseInt(element.writing)
        })
        mathC = Math.round(mathC / cArray.length)
        readingC = Math.round(readingC / cArray.length)
        writingC = Math.round(writingC / cArray.length)

        //GROUP D
        dArray.forEach(element => {
            mathD += parseInt(element.math)
            readingD += parseInt(element.reading)
            writingD += parseInt(element.writing)
        })
        mathD = Math.round(mathD / dArray.length)
        readingD = Math.round(readingD / dArray.length)
        writingD = Math.round(writingD / dArray.length)

        //GROUP E
        eArray.forEach(element => {
            mathE += parseInt(element.math)
            readingE += parseInt(element.reading)
            writingE += parseInt(element.writing)
        })
        mathE = Math.round(mathE / eArray.length)
        readingE = Math.round(readingE / eArray.length)
        writingE = Math.round(writingE / eArray.length)

        //TEKENEN OP CANVAS
        const firstChart = document.querySelector("#chartOne")

        const labels = [
            "Math group A",
            "Reading group A",
            "Writing group A",
            "Math group B",
            "Reading group B",
            "Writing group B",
            "Math group C",
            "Reading group C",
            "Writing group C",
        ]

        const data = {
            labels: labels,
            datasets: [{
                label: "Points for each course",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [
                    mathA,
                    writingA,
                    readingA,

                    mathB,
                    writingB,
                    readingB,

                    mathC,
                    writingC,
                    readingC,

                    mathD,
                    writingD,
                    readingD,

                    mathE,
                    writingE,
                    readingE,
                ]
            }]
        }

        const config = {
            type: "line",
            data: data,
            options: {
                  scales: {
                    y: { // defining min and max so hiding the dataset does not change scale range
                      min: 40,
                      max: 100
                    }
                  }
            }
        }

        const myChart = new Chart(
            firstChart,
            config
          );
    }