import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Card, CardTitle} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';

import './styles.css';

const styles = {
  tab: {
    fontSize: 12,
    paddingTop: 12,
    marginBottom: 10,
    fontWeight: 400,
  },
  name: {
    fontSize: 14,
    padding: 5
  },
  stats: {
    fontSize: 12,
    padding: 5,
    lineHeight: 1.2
  },
  subtitle: {
    marginLeft: 40
  }
};

export const Profile = ({currentUser, posts}) => {

    if (posts.length > 0 && currentUser) {

        //All sent posts from this user
        const sentPosts = posts.filter(post => post.from._id === currentUser._id)

        //All received posts from this user
        const receivedPosts = posts.filter(post => post.to._id === currentUser._id)
        console.log(receivedPosts);
    }
    
    if (currentUser) {

        return (
            <div> 
                <div className="profile-card">
                    <Card>
                        <div className="card-structure">
                            <div className="card-left">
                                <div className="profile-name">
                                    <CardTitle 
                                        titleStyle={styles.name} 
                                        title={`${currentUser.profile.firstName} ${currentUser.profile.lastName}`}
                                    />
                                </div>
                                <div className="stats">
                                    <div className="compliments-given">
                                        <CardTitle 
                                            titleStyle={styles.stats} 
                                            title="Compliments received: " 
                                            subtitle="2" 
                                            subtitleStyle={styles.subtitle}
                                        />
                                    </div>
                                    <div className="compliments-received">
                                        <CardTitle 
                                            titleStyle={styles.stats} 
                                            title="Compliments given: " 
                                            subtitle="3" 
                                            subtitleStyle={styles.subtitle}
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
                            tabItemContainerStyle={{backgroundColor: 'darkgray'}} 
                            inkBarStyle={{background: 'red'}}
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
    return <div> Is Loading... </div>;
} 