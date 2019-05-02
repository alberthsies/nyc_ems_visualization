// All layers name
var responseTimeLayerIDs = ["severity_rpt/sev1", "severity_rpt/sev2", "severity_rpt/sev3", "severity_rpt/sev4", "severity_rpt/sev5", "severity_rpt/sev6", "severity_rpt/sev7"];
var incidentLayerIDs = [ 'location/BROOKLYN', 'location/BRONX', 'location/QUEENS', 'location/RICHMOND-STATEN-ISLAND','location/MANHATTAN', "incident/ABDPN", "incident/CARD", "incident/DIFFBR", "incident/DRUG", "incident/EDP", "incident/INJURY", "incident/SICK", "incident/UNC", "incident/UNKNOW", "date/01-01-2013", "date/01-01-2014", "date/01-01-2015", "date/01-01-2016", "date/01-01-2017", "date/03-27-2016", "date/03-31-2013", "date/04-05-2015", "date/04-16-2017", "date/04-20-2014", "date/07-04-2013", "date/07-04-2014", "date/07-04-2015", "date/07-04-2016", "date/07-04-2017", "date/11-23-2017", "date/11-24-2016", "date/11-26-2015", "date/11-27-2014", "date/11-28-2013", "date/12-24-2013", "date/12-24-2014", "date/12-24-2015", "date/12-24-2016", "date/12-24-2017"];
var cityWideLayerIDs = [];

// Show filter
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


// Show analysis
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


// Show map
// Response Time Analysis
function getResponseTimeAnalysisRadios() {
    var responseTimeAnalysisRadios = document.getElementsByName('responseTimeFilterRadio');
    map.setLayoutProperty("severity_rpt/sev1", 'visibility', 'none');
    map.setLayoutProperty("severity_rpt/sev2", 'visibility', 'none');
    map.setLayoutProperty("severity_rpt/sev3", 'visibility', 'none');
    map.setLayoutProperty("severity_rpt/sev4", 'visibility', 'none');
    map.setLayoutProperty("severity_rpt/sev5", 'visibility', 'none');
    map.setLayoutProperty("severity_rpt/sev6", 'visibility', 'none');
    map.setLayoutProperty("severity_rpt/sev7", 'visibility', 'none');
    map.setLayoutProperty("temp_rpt/temp0", 'visibility', 'none');
    map.setLayoutProperty("temp_rpt/temp1", 'visibility', 'none');

    if (responseTimeAnalysisRadios[0].checked){
        var severitySlider = document.getElementById('severitySlider').value;

        if (severitySlider == 1){
            map.setLayoutProperty("severity_rpt/sev1", 'visibility', 'visible');
            map.setLayoutProperty("severity_rpt/sev2", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev3", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev4", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev5", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev6", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev7", 'visibility', 'none');
        }
        else if (severitySlider == 2){
            map.setLayoutProperty("severity_rpt/sev1", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev2", 'visibility', 'visible');
            map.setLayoutProperty("severity_rpt/sev3", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev4", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev5", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev6", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev7", 'visibility', 'none');

        }
        else if (severitySlider == 3){
            map.setLayoutProperty("severity_rpt/sev1", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev2", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev3", 'visibility', 'visible');
            map.setLayoutProperty("severity_rpt/sev4", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev5", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev6", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev7", 'visibility', 'none');

        }
        else if (severitySlider == 4){
            map.setLayoutProperty("severity_rpt/sev1", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev2", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev3", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev4", 'visibility', 'visible');
            map.setLayoutProperty("severity_rpt/sev5", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev6", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev7", 'visibility', 'none');

        }
        else if (severitySlider == 5){
            map.setLayoutProperty("severity_rpt/sev1", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev2", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev3", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev4", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev5", 'visibility', 'visible');
            map.setLayoutProperty("severity_rpt/sev6", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev7", 'visibility', 'none');

        }
        else if (severitySlider == 6){
            map.setLayoutProperty("severity_rpt/sev1", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev2", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev3", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev4", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev5", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev6", 'visibility', 'visible');
            map.setLayoutProperty("severity_rpt/sev7", 'visibility', 'none');

        }
        else if (severitySlider == 7) {
            map.setLayoutProperty("severity_rpt/sev1", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev2", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev3", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev4", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev5", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev6", 'visibility', 'none');
            map.setLayoutProperty("severity_rpt/sev7", 'visibility', 'visible');

        }

    }

    else if (responseTimeAnalysisRadios[1].checked){
        //"temp_rpt/temp0", "temp_rpt/temp1"
        var tempSlider = document.getElementById('tempSlider').value;
        if (tempSlider == 0) {
            map.setLayoutProperty("temp_rpt/temp0", 'visibility', 'visible');
            map.setLayoutProperty("temp_rpt/temp1", 'visibility', 'none');
        }
        else if (tempSlider == 1){
            map.setLayoutProperty("temp_rpt/temp0", 'visibility', 'none');
            map.setLayoutProperty("temp_rpt/temp1", 'visibility', 'visible');
        }

    }

    else if (responseTimeAnalysisRadios[2].checked){

    }

    else if (responseTimeAnalysisRadios[3].checked){

    }
    /*for (var i = 0, length = responseTimeAnalysisRadios.length; i < length; i++)
    {
        if (responseTimeAnalysisRadios[i].checked)
        {
            //alert(responseTimeAnalysisRadios[i].value);


            break;
        }
    }*/
}

// severity

//"severity_rpt/sev1", "severity_rpt/sev2", "severity_rpt/sev3", "severity_rpt/sev4", "severity_rpt/sev5", "severity_rpt/sev6", "severity_rpt/sev7"
//function cityWideAnalysisSwitch() {
//    var x = document.getElementById("cityWideAnalysisPic");
//    if (x.style.display === "none") {
//        x.style.display = "block";
//    } else {
//        x.style.display = "none";
//    }
//}
//link.onclick = function (e) {
//    var clickedLayer = this.textContent;
//    e.preventDefault();
//    e.stopPropagation();
//
//    var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
//
//    if (visibility === 'visible') {
//        map.setLayoutProperty(clickedLayer, 'visibility', 'none');
//        this.className = '';
//    } else {
//        this.className = 'active';
//        map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
//    }
//};
//

// Incident Analysis
// City Wide Analysis