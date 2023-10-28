import React from 'react'
import {Doughnut} from  'react-chartjs-2'
import {Chart as ChartJS,
ArcElement,
Tooltip,
Legend,
plugins} from 'chart.js'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)
const Piechart = (props) => {
    const {name,val1,val2,tag1,tag2}=props;
    console.log("inside chart");
    console.log(`name is ${props.name},val1 is ${val1}`)
const data= {
    labels:[tag1,tag2],
    datasets:[{
        // label:'In liquidity',
        data:[val1,val2],
        backgroundColor:['#0698fa','#5c0bf4'],
        borderColor:['#0698fa', '#5c0bf4'], 
       
    }],
    plugins:{
        Tooltip:{
            enabled:false,
        }
    }
}
const options ={
    cutout:70 ,
 
    hoverBorderColor:['#2BB3FF','#5c0bf4'],
}


const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart,args,pluginOptions){
        const {ctx,data}=chart;

        ctx.save();
        ctx.font = 'bolder 10px';
        ctx.fillStyle= "White";
        ctx.textAlign="center"; 
    ctx.textBaseline ="middle";
ctx.fillText(name, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
   }
}
  return (

    <div className='h-[300px] w-[200px]
    '>
    <Doughnut
       data={data}
       options={options}
       plugins ={[textCenter]}
      
 >
      
        </Doughnut>    
    </div>
  )
}

export default Piechart