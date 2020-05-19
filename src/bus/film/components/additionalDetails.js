// Core
import React from "react";
import {Card, Col, Row, Statistic} from "antd";


export const AdditionalDetails = ({filmDetails}) => {
    const DEFAULT_STATS_COLOR = '#3f8600';
    const precisionNumber = 2;
    return (
        <Card>
            <Row>
                <Col span={8}>
                    <Statistic
                        title="Budget"
                        value={filmDetails.budget}
                        precision={precisionNumber}
                        valueStyle={{ color: `${DEFAULT_STATS_COLOR}` }}
                        suffix="$"
                    />
                </Col>
                <Col span={8}>
                    <Statistic
                        title="Revenue"
                        value={filmDetails.revenue}
                        precision={precisionNumber}
                        valueStyle={{ color: `${DEFAULT_STATS_COLOR}` }}
                        suffix="$"
                    />
                </Col>
                <Col span={8}>
                    <Statistic
                        title="Popularity"
                        value={filmDetails.popularity}
                        precision={precisionNumber}
                        valueStyle={{ color: `${DEFAULT_STATS_COLOR}` }}
                    />
                </Col>
            </Row>
        </Card>
    )
};