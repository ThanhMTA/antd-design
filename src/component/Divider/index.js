import { Divider } from "antd";
const DividerAntd = () => {
    return (
        <>
            <Divider dashed style={{ borderColor: "blue" }} >text</Divider>

            <p style={{ color: "black" }}>Tuyển thủ Việt Nam háo hức đấu Son Heung Min, tiết lộ mục tiêu của HLV Troussier
                Tạp chí Du lịch TP.HCM
                2 giờ
                Vụ trẻ tử vong nghi ngộ độc bánh: Sở Y tế TP.HCM họp khẩn với các chuyên gia
                Vụ trẻ tử vong nghi ngộ độc bánh: Sở Y tế TP.HCM họp khẩn với các chuyên gia</p>
            <Divider dashed style={{ borderColor: "blue" }} />
            <Divider dashed style={{ borderColor: "Orange" }} orientation="left" >text</Divider>

            <p style={{ color: "black" }}>Tuyển thủ Việt Nam háo hức đấu Son Heung Min, tiết lộ mục tiêu của HLV Troussier
                Tạp chí Du lịch TP.HCM
                2 giờ
                Vụ trẻ tử vong nghi ngộ độc bánh: Sở Y tế TP.HCM họp khẩn với các chuyên gia
                Vụ trẻ tử vong nghi ngộ độc bánh: Sở Y tế TP.HCM họp khẩn với các chuyên gia</p>
            <Divider dashed style={{borderColor:'orange'}} orientation="left" >text</Divider>
            <div>
                <Divider style={{ borderColor: "Orange" }}type="vertical">link</Divider>
                <span>Link</span>
                <Divider style={{ borderColor: "Orange" }}type="vertical">link</Divider>
                <span>Link</span>
            </div>

        </>
    )
}
export default DividerAntd;