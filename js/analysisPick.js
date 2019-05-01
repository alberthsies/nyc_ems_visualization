function responseTimeAnalysis() {
    var x = document.getElementById("responseTimeFilter");
    var y = document.getElementById("incidentFilter");
    var z = document.getElementById("cityWideFilter");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        //x.style.display = "none";
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
}

function incidentAnalysis() {
    //var x = document.getElementById("incidentFilter");
    var x = document.getElementById("responseTimeFilter");
    var y = document.getElementById("incidentFilter");
    var z = document.getElementById("cityWideFilter");
    if (x.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        //x.style.display = "none";
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
}

function cityWideAnalysis() {
    //var x = document.getElementById("cityWideFilter");
    var x = document.getElementById("responseTimeFilter");
    var y = document.getElementById("incidentFilter");
    var z = document.getElementById("cityWideFilter");
    if (x.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    } else {
        //x.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    }
}


function responseTimeAnalysisSwitch() {
    var x = document.getElementById("viz1556717272772");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function incidentAnalysisSwitch() {
    var x = document.getElementById("incidenAnalysisPic");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function cityWideAnalysisSwitch() {
    var x = document.getElementById("cityWideAnalysisPic");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}