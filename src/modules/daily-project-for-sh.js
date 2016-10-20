/**
 * daily-project-multi.html
 * Created by yinfxs on 16-10-20.
 */

'use strict';

import echarts from 'echarts'
import _ from 'underscore'

export default function (app, $$) {
// Option 2. Using live 'pageInit' event handlers for each page
    $$(document).on('pageInit', '.page[data-page="daily-project-for-sh"]', function (e) {
        console.log('daily-project-for-sh.pageInit');

        let chart = null, option = null;

        // 基于准备好的dom，初始化echarts实例
        chart = echarts.init(document.getElementById('daily-project-for-sh-k-gold-card'));
        // option
        option = {
            title: {
                text: 'Gold Card'
            },
            tooltip: {
                alwaysShowContent: true
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['本月', '同期'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 220],
                    markLine: {
                        data: [
                            {
                                name: 'Y 轴值为 100 的水平线',
                                yAxis: 100
                            }]
                    }
                }
            ]
        };
        chart.setOption(option);
        // 基于准备好的dom，初始化echarts实例
        chart = echarts.init(document.getElementById('daily-project-for-sh-k-black-card'));
        // 绘制图表
        option = {
            title: {
                text: 'Black Card'
            },
            tooltip: {
                alwaysShowContent: true
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['本月', '同期'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 220],
                    markLine: {
                        data: [
                            {
                                name: 'Y 轴值为 100 的水平线',
                                yAxis: 100
                            }]
                    }
                }
            ]
        };
        chart.setOption(option);

        // 基于准备好的dom，初始化echarts实例
        chart = echarts.init(document.getElementById('daily-project-for-sh-p-gold-card'));
        // option
        option = {
            title: {
                text: 'Gold Card'
            },
            tooltip: {
                alwaysShowContent: true
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['本月', '同期'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 220],
                    markLine: {
                        data: [
                            {
                                name: 'Y 轴值为 100 的水平线',
                                yAxis: 100
                            }]
                    }
                }
            ]
        };
        chart.setOption(option);
        // 基于准备好的dom，初始化echarts实例
        chart = echarts.init(document.getElementById('daily-project-for-sh-p-black-card'));
        // 绘制图表
        option = {
            title: {
                text: 'Black Card'
            },
            tooltip: {
                alwaysShowContent: true
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['本月', '同期'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 220],
                    markLine: {
                        data: [
                            {
                                name: 'Y 轴值为 100 的水平线',
                                yAxis: 100
                            }]
                    }
                }
            ]
        };
        chart.setOption(option);

        // 基于准备好的dom，初始化echarts实例
        chart = echarts.init(document.getElementById('daily-project-for-sh-j-gold-card'));
        // option
        option = {
            title: {
                text: 'Gold Card'
            },
            tooltip: {
                alwaysShowContent: true
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['本月', '同期'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 220],
                    markLine: {
                        data: [
                            {
                                name: 'Y 轴值为 100 的水平线',
                                yAxis: 100
                            }]
                    }
                }
            ]
        };
        chart.setOption(option);
        // 基于准备好的dom，初始化echarts实例
        chart = echarts.init(document.getElementById('daily-project-for-sh-j-black-card'));
        // 绘制图表
        option = {
            title: {
                text: 'Black Card'
            },
            tooltip: {
                alwaysShowContent: true
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['本月', '同期'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 220],
                    markLine: {
                        data: [
                            {
                                name: 'Y 轴值为 100 的水平线',
                                yAxis: 100
                            }]
                    }
                }
            ]
        };
        chart.setOption(option);

        // 基于准备好的dom，初始化echarts实例
        chart = echarts.init(document.getElementById('daily-project-for-sh-app'));
        // 绘制图表
        option = {
            title: {
                text: 'APP'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['iOS','Android']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                // feature: {
                //     saveAsImage: {}
                // }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1','2','3','4','5','6','7','8','9','10']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'iOS',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'Android',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
            ]
        };
        chart.setOption(option);

        // 基于准备好的dom，初始化echarts实例
        chart = echarts.init(document.getElementById('daily-project-for-sh-mall'));
        // 绘制图表
        option = {
            title: {
                text: 'Mall Sales'
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1','2','3','4','5','6','7','8','9','10']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    type:'line',
                    data:[120, 132, 101, 134, 90, 230, 210]
                }
            ]
        };
        chart.setOption(option);
        // 基于准备好的dom，初始化echarts实例
        chart = echarts.init(document.getElementById('daily-project-for-sh-footfall'));
        // 绘制图表
        option = {
            title: {
                text: 'Footfall'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['iOS','Android']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1','2','3','4','5','6','7','8','9','10']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'iOS',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'Android',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
            ]
        };
        chart.setOption(option);
        // 基于准备好的dom，初始化echarts实例
        chart = echarts.init(document.getElementById('daily-project-for-sh-yy'));
        // 绘制图表
        option = {
            title: {
                text: '艺游'
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1','2','3','4','5','6','7','8','9','10']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    type:'line',
                    data:[120, 132, 101, 134, 90, 230, 210]
                }
            ]
        };
        chart.setOption(option);
    });
};