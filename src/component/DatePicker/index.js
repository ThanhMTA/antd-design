import { DatePicker, TimePicker } from 'antd';
const DatePickerAnt = () => {
    return (
        <>
            <DatePicker
                picker='year'
            />
            <DatePicker
                picker='quarter'
                dis
            />
            <DatePicker.RangePicker picker='month'/>
            <TimePicker></TimePicker>
             <DatePicker
                picker='month'
            />
            <DatePicker picker='day'/>
        </>
    )
}
export default DatePickerAnt;