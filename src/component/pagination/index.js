import { us, useState } from 'react';
import { Pagination, Space } from 'antd';
const PaginationAntd = () => {
    const [currentPage, setCurrentpage] = useState(2)
    return (
        <>
            <Space size={8} direction='vertical'>
                <Pagination total={200} pageSize={5} />
                <Pagination total={20} pageSize={5} defaultCurrent={2} />
                <Pagination total={200} pageSize={5} defaultCurrent={2} />
                <Pagination total={20} pageSize={5} defaultCurrent={2} showSizeChanger />
                <Pagination
                    total={20} pageSize={
                        5
                    }
                />
                <Pagination
                    total={20}
                    pageSize={5}
                    showQuickJumper
                    itemRender={(page, type) => {
                        if (type === 'next') {
                            return <a>Next</a>;
                        }
                        else if (type == 'prev') {
                            return <a>Pre</a>

                        }
                        if (type === 'page') {
                            return <a>page#{page}</a>
                        }
                    }}
                    current={currentPage}
                    onChange={(page, pageSize) => {
                        setCurrentpage(page)
                    }}
                />
                <div style={{
                    color: 'red'
                }}> showing content #{currentPage}</div>
            </Space>

        </>
    )
}
export default PaginationAntd;