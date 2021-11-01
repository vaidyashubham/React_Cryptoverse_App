import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic, Card } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Cryptocurrencies, News } from '../components'
import Loader from './Loader';

const { Title } = Typography

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10)
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        {/* <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}></Statistic></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}></Statistic></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}></Statistic></Col> */}
        <Col xs={24} md={12} lg={6}>
          <Card
            hoverable
          >
            <Title level={5}>Total Cryptocurrencies</Title>
            <Title level={4}>{globalStats.total}</Title>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Card
            hoverable
          >
            <Title level={5}>Total Exchanges</Title>
            <Title level={4}>{millify(globalStats.totalExchanges)}</Title>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Card
            hoverable
          >
            <Title level={5}>Total Market Cap</Title>
            <Title level={4}>{millify(globalStats.totalMarketCap)}</Title>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Card
            hoverable
          >
            <Title level={5}>Total 24h Volume</Title>
            <Title level={4}>{millify(globalStats.total24hVolume)}</Title>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Card
            hoverable
          >
            <Title level={5}>Total Markets</Title>
            <Title level={4}>{millify(globalStats.totalMarkets)}</Title>
          </Card>
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title" >Top 10 Crypto Currencies in the World</Title>
        <Title level={3} className="show-title" ><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title" >Latest Cryptp News</Title>
        <Title level={3} className="show-title" ><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified />
    </>
  )
}

export default HomePage
