/**
 * daily-project-multi.html
 * Created by yinfxs on 16-10-20.
 */

'use strict';

import echarts from 'echarts'
import _ from 'underscore'

export default function (app, $$) {
// Option 2. Using live 'pageInit' event handlers for each page
    $$(document).on('pageInit', '.page[data-page="daily-project-for-adrain"]', function (e) {
        console.log('daily-project-for-adrain.pageInit');

        let chart = null, option = null;

        // 基于准备好的dom，初始化echarts实例
        chart = echarts.init(document.getElementById('daily-project-for-adrain-overall'));
        // option
        option = {
            title: {
                text: 'Overall Summary'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Footfall', 'Sales', 'Tour Arte', 'Chi Art Museum'],
                top: 30
            },
            grid: {
                top: 80,
                left: '3%',
                right: '4%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Footfall',
                    type: 'line',
                    areaStyle: {normal: {}},
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Sales',
                    type: 'line',
                    areaStyle: {normal: {}},
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Tour Arte',
                    type: 'line',
                    areaStyle: {normal: {}},
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Chi Art Museum',
                    type: 'line',
                    areaStyle: {normal: {}},
                    data: [320, 332, 301, 334, 390, 330, 320]
                }
            ]
        };
        chart.setOption(option);
        // 基于准备好的dom，初始化echarts实例
        chart = echarts.init(document.getElementById('daily-project-for-adrain-tour'));
        // 绘制图表
        option = {
            title: {
                text: 'Tour Arte'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Local Shoppers', 'Tourist Shoppers', 'School', 'Organization', 'VIP/Others'],
                top:30
            },
            toolbox: {
                // feature: {
                //     saveAsImage: {}
                // }
            },
            grid: {
                top:80,
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Local Shoppers',
                    type: 'line',
                    areaStyle: {normal: {}},
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Tourist Shoppers',
                    type: 'line',
                    areaStyle: {normal: {}},
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'School',
                    type: 'line',
                    areaStyle: {normal: {}},
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Organization',
                    type: 'line',
                    areaStyle: {normal: {}},
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'VIP/Others',
                    type: 'line',
                    areaStyle: {normal: {}},
                    data: [150, 32, 211, 174, 290, 390, 420]
                }
            ]
        };
        chart.setOption(option);
        // 基于准备好的dom，初始化echarts实例
        chart = echarts.init(document.getElementById('daily-project-for-adrain-others'));
        // option
        option = {
            title: {
                text: 'Others'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Weibo', 'Apps Download iOS', 'Apps Download Android', 'WeChat'],
                top:30
            },
            toolbox: {
                // feature: {
                //     saveAsImage: {}
                // }
            },
            grid: {
                top:80,
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Weibo',
                    type: 'line',
                    areaStyle: {normal: {}},
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Apps Download iOS',
                    type: 'line',
                    areaStyle: {normal: {}},
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Apps Download Android',
                    type: 'line',
                    areaStyle: {normal: {}},
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'WeChat',
                    type: 'line',
                    areaStyle: {normal: {}},
                    data: [320, 332, 301, 334, 390, 330, 320]
                }
            ]
        };
        chart.setOption(option);

        // 基于准备好的dom，初始化echarts实例
        chart = echarts.init(document.getElementById('daily-project-for-adrain-total'));
        // 绘制图表
        option = {
            title: {
                text: 'Overall Summary'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['Total','Total in Nov.'],
                top:40
            },
            grid: {
                top:80,
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ["WeChat", "Apps Download Android", "Apps Download iOS", "Weibo", "Chi Art Museum", "Tour Arte", "Sales", "Footfall"]
            },
            series: [
                {
                    name: 'Total',
                    type: 'bar',
                    data: [19325, 24438, 31000, 121594, 134141, 681807, 701807, 781807]
                },
                {
                    name: 'Total in Nov.',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230, 680230, 730230]
                }
            ]
        };
        chart.setOption(option);
    });
};