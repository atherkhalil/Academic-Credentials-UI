import classNames from 'classNames';
import React, { useState } from 'react';
import { Button, Card, CardText, CardTitle, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import AllMessagesWidget from './../elements/AllMessagesList';

const MessageTab = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classNames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        All Messages
          </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classNames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Groups
          </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classNames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        Archived
          </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <div className="col-12 my-12">
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1">
                                        <i className="ri-search-line"></i>
                                    </span>
                                    <input type="search" className="form-control" placeholder="search your message" />
                                </div>
                                <AllMessagesWidget/>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <Card body>
                                <CardTitle>Envato Group</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Join with us</Button>
                            </Card>
                        </Col>
                        <Col sm="12">
                            <Card body>
                                <CardTitle>Code Canyon Group</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Join with us</Button>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <Col sm="12">
                            <h4>Tab 3 Contents</h4>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default MessageTab;