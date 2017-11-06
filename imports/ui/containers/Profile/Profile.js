import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Card, CardTitle} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import PostItem from "../../components/Posts/PostItem/";
import PostAvatar from "../../components/Posts/PostAvatar/";

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
    
    if (currentUser) {
        console.log(currentUser);

        //All sent posts from this user
        const sentPosts = posts.filter(post => post.from._id === currentUser._id);

        //All received posts from this user
        const receivedPosts = posts.filter(post => post.to._id === currentUser._id);

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
                                            subtitle={receivedPosts.length} 
                                            subtitleStyle={styles.subtitle}
                                        />
                                    </div>
                                    <div className="compliments-received">
                                        <CardTitle 
                                            titleStyle={styles.stats} 
                                            title="Compliments given: " 
                                            subtitle={sentPosts.length} 
                                            subtitleStyle={styles.subtitle}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card-right">
                                <div className="user-image-and-badge">
                                    <div className="user-image">
                                        <PostAvatar src={currentUser.profile.photo} />
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
                                label={`Compliments Received (${receivedPosts.length})`}
                                style={{margin: '0px', padding: '0px'}}
                            >
                                <div>
                                    {receivedPosts.map(post => {
                                        return (
                                            <PostItem
                                            key={post._id}
                                            content={post.body}
                                            to={post.to}
                                            from={post.from}
                                            />
                                        );
                                    })}                                
                                </div>
                            </Tab>
                            <Tab 
                                style={styles.tab} 
                                label={`Compliments Sent (${sentPosts.length})`} 
                                style={{margin: '0px', padding: '0px'}}
                            >
                                <div>
                                    {sentPosts.map(post => {
                                        return (
                                            <PostItem
                                            key={post._id}
                                            content={post.body}
                                            to={post.to}
                                            from={post.from}
                                            />
                                        );
                                    })}   
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