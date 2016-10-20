/**
 * daily-project-multi.html
 * Created by yinfxs on 16-10-20.
 */

'use strict';

import echarts from 'echarts'
import _ from 'underscore'

export default function (app, $$) {
// Option 2. Using live 'pageInit' event handlers for each page
    $$(document).on('pageInit', '.page[data-page="daily-project-multi-echarts"]', function (e) {
        console.log('daily-project-multi.pageInit');

        // 基于准备好的dom，初始化echarts实例
        const chart = echarts.init(document.getElementById('daily-project-multi-echarts'));
        // 绘制图表

        const xAxisData = [];
        const data1 = [];
        const data2 = [];
        const data3 = [];
        const data4 = [];
        const data5 = [];
        const data6 = [];
        const data7 = [];

        for (let i = 1; i < 13; i++) {
            xAxisData.push(i + '月');
            data1.push(_.random(60, 140));
            data2.push(_.random(60, 140));
            data3.push(_.random(60, 140));
            data4.push(_.random(60, 140));
            data5.push(_.random(60, 140));
            data6.push(_.random(60, 140));
            data7.push(_.random(60, 140));
        }
        const option = {
            title: {
                show: false
            },
            legend: {
                data: ['K11 HK', 'K11 SH', 'K11 GZ', 'K11 WHGG', 'K11 SYAM', 'K11 D Park', 'K11 Kuriosity'],
                align: 'left',
                selected: {
                    'K11 HK': true,
                    'K11 SH': true,
                    'K11 GZ': false,
                    'K11 WHGG': false,
                    'K11 SYAM': false,
                    'K11 D Park': false,
                    'K11 Kuriosity': false
                }
            },
            toolbox: {
                show: false
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                silent: false,
                offset: -140,
                splitLine: {
                    show: false
                }
            },
            grid: {
                top: 100
            },
            yAxis: {
                name: '%',
                min: 60,
                max: 140
            },
            series: [
                {
                    name: 'K11 HK',
                    type: 'line',
                    data: data1,
                    animationDelay: function (idx) {
                        return idx * 10;
                    }
                },
                {
                    name: 'K11 SH',
                    type: 'line',
                    data: data2,
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    }
                },
                {
                    name: 'K11 GZ',
                    type: 'line',
                    data: data3,
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    }
                },
                {
                    name: 'K11 WHGG',
                    type: 'line',
                    data: data4,
                    animationDelay: function (idx) {
                        return idx * 10;
                    }
                },
                {
                    name: 'K11 SYAM',
                    type: 'line',
                    data: data5,
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    }
                },
                {
                    name: 'K11 D Park',
                    type: 'line',
                    data: data6,
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    }
                },
                {
                    name: 'K11 Kuriosity',
                    type: 'line',
                    data: data7,
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    }
                }
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
        chart.setOption(option);
    });
};