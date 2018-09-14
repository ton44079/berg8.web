import React from 'react'
import PropType from 'prop-types';
import { Card, Button, Form, Col, Row, Input, Select } from 'antd';
import { Radio, DatePicker, TimePicker, InputNumber } from 'antd';
import moment from 'moment';

const RadioGroup = Radio.Group;
const Option = Select.Option;

const countryData = ['Thailand', 'Japan', 'China', 'US', 'UK']
const subData = {
    Thailand: ['Bangkok', 'Udon'],
    Japan: ['Tokyo', 'Osaka'],
    China: ['Zhenjiang'],
    US: ['none'],
    UK: ['none']
};

class Intinerary extends React.Component {
    state = {

        countryLeft: subData[countryData[0]],
        cityLeft: subData[countryData[0]][0],
        countryRight: subData[countryData[0]],
        cityRight: subData[countryData[0]][0],
    }

    handleCountryLeftChange = (value) => {
        this.setState({
            countryLeft: subData[value],
            cityLeft: subData[value][0],
        });
    }

    handleCountryRightChange = (value) => {
        this.setState({
            countryRight: subData[value],
            cityRight: subData[value][0],
        });
    }

    onCityLeftChange = (value) => {
        this.setState({
            cityLeft: value,
        });
    }

    onCityRightChange = (value) => {
        this.setState({
            cityRight: value,
        });
    }

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 24 },
                md: { span: 24 },
                lg: { span: 10 }

            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 24 },
                md: { span: 24 },
                lg: { span: 14 }
            },
        };

        const formItemLayout2 = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 24 },
                md: { span: 24 },
                lg: { span: 5 }

            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 24 },
                md: { span: 24 },
                lg: { span: 19 }
            },
        };

        const countryOptions = countryData.map(data => <Option key={data}>{data}</Option>);
        const cityLeftOptions = this.state.countryLeft.map(city => <Option key={city}>{city}</Option>);
        const cityRightOptions = this.state.countryRight.map(city => <Option key={city}>{city}</Option>);

        return (
            <Card>
                <Form onSubmit={this.props.handleSubmitIntinerary}>

                    <Row gutter={16}>
                        <Col xs={{ span: 24 }} >
                            <Form.Item
                                {...formItemLayout2}
                                label="Objective"
                            >
                                <Row gutter={16}>
                                    <Col lg={{ span: 9 }} xs={{ span: 12 }} >
                                        <Select>
                                            <Option value="1">On duty</Option>
                                            <Option value="2">Meeting</Option>
                                            <Option value="3">Seminar</Option>
                                            <Option value="4">Exhibition</Option>
                                            <Option value="5">Traning</Option>
                                        </Select>
                                    </Col>
                                    <Col lg={{ span: 15 }} xs={{ span: 12 }} >
                                       
                                            <Input />
                                 
                                    </Col>
                                </Row>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col xs={{ span: 12 }} >
                            <Form.Item
                                {...formItemLayout}
                                label="Travel"
                            >
                                <RadioGroup value={1}>
                                    <Radio value={1}>Domestic</Radio>
                                    <Radio value={2}>Oversea</Radio>
                                </RadioGroup>
                            </Form.Item>
                        </Col>
                        <Col xs={{ span: 12 }} >

                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col xs={{ span: 12 }} >
                            <Form.Item
                                {...formItemLayout}
                                label="From Country"
                            >
                                <Select defaultValue={countryData[0]} onChange={this.handleCountryLeftChange}>
                                    {countryOptions}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={{ span: 12 }} >
                            <Form.Item
                                {...formItemLayout}
                                label="Destination Country"
                            >
                                <Select defaultValue={countryData[0]} onChange={this.handleCountryRightChange}>
                                    {countryOptions}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col xs={{ span: 12 }} >
                            <Form.Item
                                {...formItemLayout}
                                label="Province or City"
                            >
                                <Select value={this.state.cityLeft} onChange={this.onCityLeftChange}>
                                    {cityLeftOptions}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={{ span: 12 }} >
                            <Form.Item
                                {...formItemLayout}
                                label="Province or City"
                            >
                                <Select value={this.state.cityRight} onChange={this.onCityRightChange}>
                                    {cityRightOptions}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col xs={{ span: 12 }} >
                            <Form.Item
                                {...formItemLayout}
                                label="Date : From"
                            >
                                <DatePicker style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col xs={{ span: 12 }} >
                            <Form.Item
                                {...formItemLayout}
                                label="Date : To"
                            >
                                <DatePicker style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col xs={{ span: 12 }} >
                            <Form.Item
                                {...formItemLayout}
                                label="Time : From"
                            >
                                <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col xs={{ span: 12 }} >
                            <Form.Item
                                {...formItemLayout}
                                label="Time : To"
                            >
                                <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col xs={{ span: 12 }} >
                            <Form.Item
                                {...formItemLayout}
                                label="Duration (days)"
                            >
                                <InputNumber min={1} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col xs={{ span: 12 }} >

                        </Col>
                    </Row>


                    <Form.Item className="text-right"><Button type="primary" htmlType="submit">SAVE</Button></Form.Item>
                </Form>
            </Card>
        )
    }
}

Intinerary.propType = {
    // data : PropType.object.isRequest,
}

export default Intinerary