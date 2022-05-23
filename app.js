import Chart from "chart.js/auto";
 
    const fetcher = function(){
        fetch("http://localhost:3000")
        .then(resp => resp.json())
        .then(data => {
            const array = data
            scoresPerStudentWisk(array)
            scoresPerGroep(array)
            geslaagden(array)
            manVrouw(array)
            bestGroup(array)
        })
        .catch(err => console.error(err))
    }
    fetcher()
    
    const bestGroup = function(array){
        //The group is to see who passed every test
        //The counter is to see how many people were in the group in order to calculate %
        let groupA = 0
        let aCounter = 0

        let groupB = 0
        let bCounter = 0
        
        let groupC = 0
        let cCounter = 0

        let groupD = 0
        let dCounter = 0

        let groupE = 0
        let eCounter = 0

        array.forEach(element => {
            const math = parseInt(element.math)
            const reading = parseInt(element.reading)
            const writing = parseInt(element.writing)
            const group = element.group

            if(group === "group A"){
                if(math >= 50){
                    if(reading >= 50){
                        if(writing >= 50){
                            groupA++
                        }
                    }
                }
                aCounter++
            }

            else if(group === "group B"){
                if(math >= 50){
                    if(reading >= 50){
                        if(writing >= 50){
                            groupB++
                        }
                    }
                }
                bCounter++
            }

            else if(group === "group C"){
                if(math >= 50){
                    if(reading >= 50){
                        if(writing >= 50){
                            groupC++
                        }
                    }
                }
                cCounter++
            }

            else if(group === "group D"){
                if(math >= 50){
                    if(reading >= 50){
                        if(writing >= 50){
                            groupD++
                        }
                    }
                }
                dCounter++
            }

            else if(group === "group E"){
                if(math >= 50){
                    if(reading >= 50){
                        if(writing >= 50){
                            groupE++
                        }
                    }
                }
                eCounter++
            }
        })

        //Put everything in percentage
        groupA = groupA / aCounter * 100
        groupB = groupB / bCounter * 100
        groupC = groupC / cCounter * 100
        groupD = groupD / dCounter * 100
        groupE = groupE / eCounter * 100

        const fifthChart = document.querySelector("#chartFive")

        const labels = [
            "Group A",
            "Group B",
            "Group C",
            "Group D",
            "Group E"
        ]

        const data = {
            labels: labels,
            datasets: [{
                label: `Percentage of people in the group who passed all their tests`,
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(252, 255, 99)",
                    "rgb(99, 148, 255)",
                    "rgb(61, 199, 130)",
                    "rgb(204, 145, 36)",
                    "rgb(144, 228, 34)"
                ],
                borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(252, 255, 99)",
                    "rgb(99, 148, 255)",
                    "rgb(61, 199, 130)",
                    "rgb(204, 145, 36)",
                    "rgb(144, 228, 34)"
                ],
                data: [
                    groupA,
                    groupB,
                    groupC,
                    groupD,
                    groupE
                ]
            }]
        }

        const config = {
            type: "polarArea",
            data: data
        }

        const myChart = new Chart(
            fifthChart,
            config
        )

    }

    //Mannen vs vrouwen geslaagd
    const manVrouw = function(array){
        let vrouwenWisk = 0
        let vrouwenSchrijf = 0
        let vrouwenLees = 0

        let mannenWisk = 0
        let mannenSchrijf = 0
        let mannenLees = 0

        array.forEach(element => {
            if(element.gender === "female"){
                if(parseInt(element.math) >= 50){
                    vrouwenWisk++
                }
                if(parseInt(element.reading) >= 50){
                    vrouwenSchrijf++
                }
                if(parseInt(element.writing) >= 50){
                    vrouwenLees++
                }
            }
            else if(element.gender === "male"){
                if(parseInt(element.math) >= 50){
                    mannenWisk++
                }
                if(parseInt(element.reading) >= 50){
                    mannenSchrijf++
                }
                if(parseInt(element.writing) >= 50){
                    mannenLees++
                }
            }
        })

        const fourthChart = document.querySelector("#chartFour")
        
        const labels = [
            "Woman passed math",
            "Woman passed reading",
            "Woman passed Writing",
            "Man passed math",
            "Man passed reading",
            "Man passed Writing"
        ]

        const data = {
            labels: labels,
            datasets: [{
                label: "Amount of men vs women who passed the subjects",
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(230, 73, 107)",
                    "rgb(197, 46, 79)",
                    "rgb(99, 148, 255)",
                    "rgb(65, 115, 221)",
                    "rgb(37, 83, 184)"
                ],
                borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(230, 73, 107)",
                    "rgb(197, 46, 79)",
                    "rgb(99, 148, 255)",
                    "rgb(65, 115, 221)",
                    "rgb(37, 83, 184)"
                ],
                data: [
                    vrouwenWisk,
                    vrouwenLees,
                    vrouwenSchrijf,
                    mannenWisk,
                    mannenLees,
                    mannenSchrijf
                ]
            }]
        }

        const config = {
            type: "polarArea",
            data: data
        }

        const myChart = new Chart(
            fourthChart,
            config
        )
    }

    //Tel personen met meer dan 50% voor de 3 vakken (die dus geslaagd zijn)
    const geslaagden = function(array){
        let wiskGeslaagd = 0
        let lezenGeslaagd = 0
        let schrijvenGeslaagd = 0

        array.forEach(element => {
            const math_score = parseInt(element.math)
            const reading_score = parseInt(element.reading)
            const writing_score = parseInt(element.writing)

            if(math_score >= 50){
                wiskGeslaagd++
            }
            if(reading_score >= 50){
                lezenGeslaagd++
            }
            if(writing_score >= 50){
                schrijvenGeslaagd++
            }
        })

        const thirdChart = document.querySelector("#chartThree")
        const header = document.querySelector("#total-students")
        header.innerHTML = `Total amount of students who passed the different subjects<br><span class="header-total-students">Total students: ${array.length}</span>`

        const labels = [
            "Passed math",
            "Passed reading",
            "Passed writing"
        ]

        const data = {
            labels: labels,
            datasets: [{
                label: `Students who passed math, reading and writing. Total Students: ${array.length}`,
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(99, 148, 255)",
                    "rgb(252, 255, 99)"
                ],
                borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(99, 148, 255)",
                    "rgb(252, 255, 99)"
                ],
                data: [
                    wiskGeslaagd,
                    lezenGeslaagd,
                    schrijvenGeslaagd
                ]
            }]
        }

        const config = {
            type: "doughnut",
            data: data
        }

        const myChart = new Chart(
            thirdChart,
            config
        )
    }

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
            options: {
                scales: {
                  y: { // defining min and max so hiding the dataset does not change scale range
                    min: 0,
                    max: 100
                  }
                }
          }
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