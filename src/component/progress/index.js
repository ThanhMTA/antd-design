import { Progress } from 'antd'
 const ProgressAnt =()=> {
    return (
        <>
        <Progress percent={33}/>
        <Progress percent={33} type='circle'/>
        <Progress percent={33} type ='line' strokeColor='red'/>
        <Progress percent={33} type ='line' strokeColor='red' status='active'/>
        <Progress percent={33} type ='line' strokeColor='red' strokeWidth={50}/>
        <Progress percent={33} type='circle' status='success'/>
        <Progress percent={33} type='circle' status='exception'/>
        <Progress percent={33} type='line' status='success'/>
        <Progress percent={33} type='line' steps={3}/>

        </>
    )
 }
 export default ProgressAnt;