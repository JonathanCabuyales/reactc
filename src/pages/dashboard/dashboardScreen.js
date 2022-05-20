import React from 'react';
import { Navbar } from '../../components/shared/navbar/navbar';

import ReactECharts from 'echarts-for-react';

export const DashboardScreen = () => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };
  return (
    <>
      <Navbar />
      <div className='contenido-menu '>
        <div className='container'>
          <div className='card sombrasgraficas'  style={{marginTop: '75px'}}>
            <div className='card-body'>
              <ReactECharts option={options} />
            </div>
          </div>
        </div>
        
      </div>
    </>
    
  )
}
