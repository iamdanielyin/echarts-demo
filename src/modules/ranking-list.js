/**
 * daily-project-single.html
 * Created by yinfxs on 16-10-20.
 */

'use strict';

import echarts from 'echarts';

export default function (app, $$) {
// Option 2. Using live 'pageInit' event handlers for each page
    $$(document).on('pageInit', '.page[data-page="ranking-list"]', function (e) {
        console.log('ranking-list.pageInit');

        var calendarRange = app.calendar({
            input: '#calendar-range',
            rangePicker: true,
            minDate: new Date(2016, 5, 12),
            maxDate: new Date()
        });


        let chart = null, option = null;

        // 基于准备好的dom，初始化echarts实例
        chart = echarts.init(document.getElementById('ranking-list'));
        // option
        option = {
            title: {
                text: '粉丝PK排行榜'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['Mike', 'Jeans', 'Tony', 'Jane', 'John', 'David']
            },
            series: [
                {
                    type: 'bar',
                    data: [182, 239, 290, 449, 734, 960]
                }
            ]
        };
        chart.setOption(option);

    });
};