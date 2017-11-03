import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Card, CardTitle} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';

import './styles.css';

export const Profile = () => {
    return (
        <div> 
            <div className="profile-card">
                <Card>
                    <div className="card-structure">
                        <div className="profile-name">
                            <CardTitle title="title" subtitle="subtitle" />
                        </div>
                        <div className="compliments-given">
                            <CardTitle title="Compliments given: " subtitle="2" />
                        </div>
                        <div className="compliments-received">
                            <CardTitle title="Compliments given: " subtitle="3" />
                        </div>
                        <div className="user-image-and-badge">
                            <div className="user-image">
                                User image
                            </div>
                            <div className="badge-overlay">
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

        <div className="profile-compliments">
             <Tabs>
                <Tab label="Item One" >
                    <div>
                        <h2 className="tab">Tab One</h2>
                        <p>
                        Compliments received!
                        </p>
                    </div>
                    </Tab>
                    <Tab label="Item Two" >
                    <div>
                        <h2 className="tab">Tab Two</h2>
                        <p>
                        Compliments sent!
                        </p>
                    </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
} 