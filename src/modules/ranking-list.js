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

/**
        let chart = null, option = null;

        // 基于准备好的dom，初始化echarts实例
        chart = echarts.init(document.getElementById('ranking-list'));
        let data = ['Mike', 'Jeans', 'Tony', 'Jane', 'John', 'David', 'Mike', 'Jeans', 'Tony', 'Jane', 'John', 'David'];
        // option
        option = {
            title: {
                text: '粉丝PK排行榜',
                top: '5px',
                left: '10px'
            },
            tooltip: {
                show: false
            },
            grid: {
                top: '40px',
                left: '27%',
                // right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                splitNumber: 50,
                boundaryGap: [0, 0.1],
                axisLine: {show: false},
                axisLabel: {show: false},
                axisTick: {show: false},
                splitLine: {show: false}
            },
            yAxis: {
                type: 'category',
                data: data,
                splitNumber: 50,
                // axisLabel: {
                //     formatter: function (value, i) {
                //         return (data.length - i) + '  ' + value + ' kg';
                //     }
                // },
                axisLine: {show: false},
                axisTick: {show: false},
                splitLine: {show: false}
            },
            series: [
                {
                    type: 'bar',
                    data: [182, 239, 290, 449, 734, 960, 1182, 2139, 2290, 4249, 7034, 9600],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'right',
                                formatter: function (object) {
                                    return object.value;
                                }
                            }
                        }
                    }
                }
            ]
        };
        chart.setOption(option);
**/
    });
};