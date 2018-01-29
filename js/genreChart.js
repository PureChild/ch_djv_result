calgenre(0,24);

function MoreChartOptions() {}
var ChartData = {
    labels: ["액션",
        "SF", "범죄", "어드벤처", "코미디", "애니메이션", "스릴러", "로맨스",
    ],
    datasets: [{
        fillColor: "rgba(52,152,219,0.11)",
        strokeColor: "rgba(52,152,219,0.19)",
        pointColor: "rgba(52,152,219,1)",
        markerShape: "circle",
        pointStrokeColor: "rgba(255,255,255,1)",
        data: [35.94, 2.71, 13.35, 2.71, 13.25, 21.48, 2.61, 7.93, ],
        title: "cgv"
    }, {
        fillColor: "rgba(46,204,112,0.07)",
        strokeColor: "rgba(46,204,113,1)",
        pointColor: "rgba(46,204,113,1)",
        markerShape: "circle",
        pointStrokeColor: "rgba(255,255,255,1)",
        data: [37.08, 12.24, 10.25, 15.56, 9.75, 9.20, 3.03, 2.85, ],
        title: "ocn"
    }, {
        fillColor: "rgba(156,89,182,0.14)",
        strokeColor: "rgba(156,89,182,0.48)",
        pointColor: "rgba(156,89,182,1)",
        markerShape: "circle",
        pointStrokeColor: "rgba(255,255,255,1.00)",
        data: [38.11, 13.74, 11.01, 13.59, 9.43, 7.96, 2.46, 3.66, ],
        title: "SuperAction"
    }, ]
};
ChartOptions = {
    decimalSeparator: ".",
    thousandSeparator: ",",
    spaceLeft: 12,
    spaceRight: 9,
    spaceTop: 12,
    spaceBottom: 11,
    scaleLabel: "<%=value+''%>",
    yAxisMinimumInterval: 1,
    scaleShowLabels: true,
    scaleShowLine: true,
    scaleLineStyle: "solid",
    scaleLineWidth: 1,
    scaleLineColor: "rgba(0,0,0,0.6)",
    scaleOverlay: false,
    scaleOverride: false,
    scaleSteps: 10,
    scaleStepWidth: 10,
    scaleStartValue: 0,
    legend: true,
    maxLegendCols: 5,
    legendBlockSize: 15,
    legendFillColor: 'rgba(255,255,255,0.00)',
    legendColorIndicatorStrokeWidth: 1,
    legendPosX: -2,
    legendPosY: 4,
    legendXPadding: 0,
    legendYPadding: 0,
    legendBorders: false,
    legendBordersWidth: 1,
    legendBordersStyle: "solid",
    legendBordersColors: "rgba(102,102,102,1)",
    legendBordersSpaceBefore: 5,
    legendBordersSpaceLeft: 5,
    legendBordersSpaceRight: 5,
    legendBordersSpaceAfter: 5,
    legendSpaceBeforeText: 5,
    legendSpaceLeftText: 5,
    legendSpaceRightText: 5,
    legendSpaceAfterText: 5,
    legendSpaceBetweenBoxAndText: 5,
    legendSpaceBetweenTextHorizontal: 5,
    legendSpaceBetweenTextVertical: 5,
    legendFontFamily: "'Open Sans'",
    legendFontStyle: "normal normal",
    legendFontColor: "rgba(0,0,0,1)",
    legendFontSize: 15,
    showYAxisMin: false,
    rotateLabels: "smart",
    xAxisBottom: true,
    yAxisLeft: true,
    yAxisRight: false,
    graphTitleSpaceBefore: 5,
    graphTitleSpaceAfter: 5,
    graphTitleBorders: false,
    graphTitleBordersXSpace: 1,
    graphTitleBordersYSpace: 1,
    graphTitleBordersWidth: 1,
    graphTitleBordersStyle: "solid",
    graphTitleBordersColor: "rgba(0,0,0,1)",
    graphTitle: "채널별 장르분포",
    graphTitleFontFamily: "'Open Sans'",
    graphTitleFontStyle: "normal normal",
    graphTitleFontColor: "rgba(52,152,219,1)",
    graphTitleFontSize: 26,
    graphSubTitleSpaceBefore: 5,
    graphSubTitleSpaceAfter: 5,
    graphSubTitleBorders: false,
    graphSubTitleBordersXSpace: 1,
    graphSubTitleBordersYSpace: 1,
    graphSubTitleBordersWidth: 1,
    graphSubTitleBordersStyle: "solid",
    graphSubTitleBordersColor: "rgba(0,0,0,1)",
    graphSubTitle: "",
    graphSubTitleFontFamily: "'Open Sans'",
    graphSubTitleFontStyle: "normal normal",
    graphSubTitleFontColor: "rgba(102,102,102,1)",
    graphSubTitleFontSize: 16,
    scaleFontFamily: "'Open Sans'",
    scaleFontStyle: "normal normal",
    scaleFontColor: "rgba(0,0,0,1)",
    scaleFontSize: 12,
    pointLabelFontFamily: "'Open Sans'",
    pointLabelFontStyle: "normal normal",
    pointLabelFontColor: "rgba(102,102,102,1)",
    pointLabelFontSize: 12,
    angleShowLineOut: true,
    angleLineStyle: "solid",
    angleLineWidth: 1,
    angleLineColor: "rgba(0,0,0,0.1)",
    percentageInnerCutout: 50,
    scaleShowGridLines: true,
    scaleGridLineStyle: "solid",
    scaleGridLineWidth: 1,
    scaleGridLineColor: "rgba(0,0,0,0.1)",
    scaleXGridLinesStep: 1,
    scaleYGridLinesStep: 3,
    segmentShowStroke: true,
    segmentStrokeStyle: "solid",
    segmentStrokeWidth: 2,
    segmentStrokeColor: "rgba(255,255,255,1.00)",
    datasetStroke: true,
    datasetFill: true,
    datasetStrokeStyle: "solid",
    datasetStrokeWidth: 2,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDotStrokeStyle: "solid",
    pointDotStrokeWidth: 1,
    pointDotRadius: 3,
    pointDot: true,
    scaleTickSizeBottom: 5,
    scaleTickSizeTop: 5,
    scaleTickSizeLeft: 5,
    scaleTickSizeRight: 5,
    graphMin: 0,
    barShowStroke: false,
    barBorderRadius: 0,
    barStrokeStyle: "solid",
    barStrokeWidth: 1,
    barValueSpacing: 15,
    barDatasetSpacing: 0,
    scaleShowLabelBackdrop: true,
    scaleBackdropColor: 'rgba(255,255,255,0.75)',
    scaleBackdropPaddingX: 2,
    scaleBackdropPaddingY: 2,
    animation: true,
    onAnimationComplete: function() {
        MoreChartOptions()
    }
};
DrawTheChart(ChartData, ChartOptions, "genreChart", "Radar");
