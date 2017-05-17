Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'PAGO DE PENSIONES PARA OFICIALES Y SUBALTERNOS EN RETIRO DE LA POLICÍA NACIONAL DEL PERÚ 8PNP)'
    },
    subtitle: {
        text: 'Fuente: Ministerio de Defensa-mayo 2017. /'
    },
    xAxis: {
        categories: ['PERSONAL SUPERIOR <br> <b>Teniente General</b>', 
        			'PERSONAL SUPERIOR <br> <b>General</b>', 
        			'PERSONAL SUPERIOR <br> <b>Coronel</b>', 
        			'PERSONAL SUPERIOR <br> <b>Comandante</b>',
        			'PERSONAL SUPERIOR <br> <b>Mayor</b>',
        			'PERSONAL SUPERIOR <br> <b>Capitán</b>',
        			'PERSONAL SUPERIOR <br> <b>Teniente</b>',
        			'PERSONAL SUPERIOR <br> <b>Alférez</b>',

        			'PERSONAL SUBALTERNO <br> <b>Suboficial Superior (SOS)</b>',
        			'PERSONAL SUBALTERNO <br> <b>Suboficial Brigadier (SOB)</b>',
        			'PERSONAL SUBALTERNO <br> <b>Suboficial Técnica de Primera (SOT1)</b>',
        			'PERSONAL SUBALTERNO <br> <b>Suboficial Técnico de Segunda (SOT2)</b>',
        			'PERSONAL SUBALTERNO <br> <b>Suboficial Técnico de Tercera (SOT3)</b>',
        			'PERSONAL SUBALTERNO <br> <b>Suboficial de Primera (SO1)</b>',
        			'PERSONAL SUBALTERNO <br> <b>Suboficial de Segunda (SO2)</b>',
        			'PERSONAL SUBALTERNO <br> <b>Suboficial de Tercera (SO3)</b>'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 1000,
        title: {
            text: 'Sueldo (Soles)',
            align: 'high'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: 'Soles'
    },
    plotOptions: {
       series: {
            stacking: 'Soles',
            pointFormat: 'Total: {point.stackTotal}'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
        x: 5,
        y: -70,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundImage) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Monto de incremento <br> de promulgarse la ley <br> aprobada por el Congreso',
        data: [405, 372, 254, 705, 589, 515, 444, 445, 533, 486, 454, 392, 382, 731, 368,364],
        color: '#578848'  
    },
    {
        name: 'Pensión que perciben <br> al retiro antes del <br> 09/12/2012',
        data: [8168, 7990, 6656, 3574, 2665, 2190, 1814, 1759,  2135, 2075, 1928, 1836, 1722, 1672, 1637, 1612],
        color: '#B6C29A'
    },]
});



