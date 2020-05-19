// Core
import React from "react";
import {Card, Col, Row, Statistic} from "antd";


export const AdditionalDetails = ({filmDetails}) => {
    return (
        <Card>
            <Row>
                <Col span={8}>
                    <Statistic
                        title="Budget"
                        value={filmDetails.budget}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        suffix="$"
                    />
                </Col>
                <Col span={8}>
                    <Statistic
                        title="Revenue"
                        value={filmDetails.revenue}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        suffix="$"
                    />
                </Col>
                <Col span={8}>
                    <Statistic
                        title="Popularity"
                        value={filmDetails.popularity}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                    />
                </Col>
            </Row>
        </Card>
    )
};