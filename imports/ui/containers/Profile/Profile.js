import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Card, CardTitle} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';

import './styles.css';

const styles = {
  tab: {
    fontSize: 36,
    paddingTop: 24,
    marginBottom: 20,
    fontWeight: 400,
  },
  name: {
    fontSize: 36,
    padding: 15
  },
  stats: {
    fontSize: 30,
    padding: 5
  }
};

export const Profile = () => {
    return (
        <div> 
            <div className="profile-card">
                <Card>
                    <div className="card-structure">
                        <div className="card-left">
                            <div className="profile-name">
                                <CardTitle 
                                    titleStyle={styles.name} 
                                    title="Mandi Wise" 
                                />
                            </div>
                            <div className="stats">
                                <div className="compliments-given">
                                    <CardTitle 
                                        titleStyle={styles.stats} 
                                        title="Compliments received: " 
                                        subtitle="2" 
                                    />
                                </div>
                                <div className="compliments-received">
                                    <CardTitle 
                                        titleStyle={styles.stats} 
                                        title="Compliments given: " 
                                        subtitle="3" 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="card-right">
                            <div className="user-image-and-badge">
                                <div className="user-image">
                                    User image
                                </div>
                                <div className="badge-overlay">
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="profile-compliments">
                <div className="tab-container">
                    <Tabs 
                        tabItemContainerStyle={{backgroundColor: 'lavender'}} 
                        inkBarStyle={{background: 'darkblue'}}
                    >
                        <Tab 
                            style={styles.tab} 
                            label="Compliments Received"
                        >
                            <div>
                                <h2 className="tab">You're popular! You've received X compliments: </h2>
                                <p>
                                Here are the compliments
                                </p>
                            </div>
                            </Tab>
                            <Tab 
                                style={styles.tab} 
                                label="Compliments Sent" 
                            >
                            <div>
                                <h2 className="tab">So generous. Much kind. You've sent X compliments:</h2>
                                <p>
                                Here are the compliments
                                </p>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
} 