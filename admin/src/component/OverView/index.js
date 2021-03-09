import React from 'react';
import {Line} from 'react-chartjs-2';

const doanhThu = {
  labels: ['Thứ 2', 'Thứ 3', 'Thứ 4',
           'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'],
  datasets: [
    {
      label: 'Triệu đồng',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [10, 8, 7, 9, 11, 6, 4, 0]
    }
  ]
}
const soDonHang = {
    labels: ['Thứ 2', 'Thứ 3', 'Thứ 4',
           'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'],
    datasets: [
      {
        label: 'Đơn',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 100, 90]  
      }
    ]
  }

export default class OverView extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={doanhThu}
          options={{
            title:{
              display:true,
              text:'Doanh thu theo từng ngày',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        <Line
          data={soDonHang}
          options={{
            title:{
              display:true,
              text:'Số đơn hàng từng ngày',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
