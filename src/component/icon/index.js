import { PieChartFilled ,CloseCircleTwoTone, LoadingOutlined} from '@ant-design/icons';
import './icon.css'
const IconAntd = () => {
    return (
        <>
            <div className='icon'>
                <PieChartFilled   style={{color:'purple',fontSize:100}}/>
                <CloseCircleTwoTone />
                <PieChartFilled  rotate={45}  style={{color:'orange',fontSize:100}}/>
                <LoadingOutlined spin />


            </div>
        </>
    )
}
export default IconAntd;