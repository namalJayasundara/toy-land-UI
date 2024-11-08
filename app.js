const { Layout, Menu, Breadcrumb, Card, Row, Col } = antd;
const { Header, Content, Footer } = Layout;

const App = () => {
    const toys = [
        { name: "Teddy Bear", price: "$19.99", image: "https://via.placeholder.com/300x200?text=Teddy+Bear" },
        { name: "LEGO Set", price: "$49.99", image: "https://via.placeholder.com/300x200?text=LEGO+Set" },
        { name: "Barbie Doll", price: "$24.99", image: "https://via.placeholder.com/300x200?text=Barbie+Doll" },
        { name: "RC Car", price: "$39.99", image: "https://via.placeholder.com/300x200?text=RC+Car" },
    ];

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Products</Menu.Item>
                    <Menu.Item key="3">About Us</Menu.Item>
                    <Menu.Item key="4">Contact</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Products</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    <h1>Welcome to ToyLand</h1>
                    <p>Discover our amazing collection of toys!</p>
                    <Row gutter={16}>
                        {toys.map((toy, index) => (
                            <Col span={6} key={index}>
                                <Card
                                    hoverable
                                    className="toy-card"
                                    cover={<img alt={toy.name} src={toy.image} />}
                                >
                                    <Card.Meta title={toy.name} description={toy.price} />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>ToyLand ©2023 Created by Your Company</Footer>
        </Layout>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
