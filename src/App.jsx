import { useState } from 'react'
import { Layout, Space } from 'antd';
import CountryTable from './features/components/CountryTable';


function App() {

  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} >
        <Layout>
            <CountryTable/>
        </Layout>
      </Space>
    </>
  )
}

export default App
