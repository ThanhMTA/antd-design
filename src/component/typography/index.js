import { Typography } from 'antd';
import { useState } from 'react';

const { Title, Text, Paragraph, Link } = Typography;
const TypograpyAnt = () => {
    const [text, setText] = useState("code with antd")
    return (
        <>
            <Title level={3}>Code with Antd</Title>
            <Title level={5}>Code with Antd</Title>
            <Text strong>Code with Antd</Text> {/*in daam*/}
            <Text underline>Code with Antd</Text>
            <Text mark>Code with Antd</Text>
            <Text disabled>Code with Antd</Text>

            <Text type='secondary'>Code with Antd</Text>
            <Text type='success'>Code with Antd</Text>
            <Link href='https://www.youtube.com/watch?v=lXQ1yCFLX60&list=PL-JTnqZPF5z2qTGwNkYln3m0pA0qfgHFR&index=23&ab_channel=CodeWithAamir' underline>Code with antd</Link>
            <Paragraph strong> code with antd</Paragraph>
            <Paragraph editable={{
                onChange: (value) => {
                    setText(value);
                },
                triggerType: "icon|text",
                tooltip: "click to edit",
                // icon:<SmileFilled/>,
                // enterIcon:<CheckOutlined/>
            }}>{text}</Paragraph>
            <Paragraph copyable={{
                text: "diffenrent Text coppied",
                tooltips: ["click to copy", "Done"]
            }}
            > 
            code with antd
            
            </Paragraph>
            <Paragraph
            style={{width:"100px"}}
             ellipsis = {{
                rows:2, 
                expandable:true, 
                symbol:"show more", 
                suffix:"code with antd"

            }}> code with antd
            code with antd
            code with antd
            code with antd
            code with antd
            </Paragraph>

            <Paragraph> code with antd</Paragraph>







        </>
    )
}
export default TypograpyAnt;