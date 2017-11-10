import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Card, CardTitle} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import PropTypes from "prop-types";

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
    fontSize: 16,
    padding: 5
  },
  stats: {
    fontSize: 12,
    lineHeight: 1.2
  },
  card: {
    padding: 10
  }
};

export const Profile = ({currentUser, posts}) => {
    
    if (currentUser) {
        console.log(currentUser);

        //All sent posts from this user
        const sentPosts = posts.filter(post => post.from._id === currentUser._id);

        //All received posts from this user
        const receivedPosts = posts.filter(post => post.to._id === currentUser._id);

        badgePicker = numberOfSends => { 
            if (numberOfSends < 5) {
            return "Badge1";
            } else if (numberOfSends < 10) {
            return "Badge2";
            } else if (numberOfSends < 20) {
            return "Badge3";
            } else if (numberOfSends < 30) {
            return "Badge4";
            } else {
            return "Badge5";
        }
    }

        badgeUpgrade = numberOfSends => {
            if (numberOfSends < 5) {
            return 5 - numberOfSends; 
            } else if (numberOfSends < 10) {
            return 10 - numberOfSends;
            } else if (numberOfSends < 20) {
            return 20 - numberOfSends;
            } else if (numberOfSends < 30) {
            return 30 - numberOfSends;
            } else {
            return "";
                }
        }
    

        badgeUpgrade = numberOfSends => {
            if (numberOfSends < 5) {
            return 5 - numberOfSends; 
            } else if (numberOfSends < 10) {
            return 10 - numberOfSends;
            } else if (numberOfSends < 20) {
            return 20 - numberOfSends;
            } else if (numberOfSends < 30) {
            return 30 - numberOfSends;
            } else {
            return "";
                }
        }

        return (
            <div> 
                <div className="profile-card">
                    <Card>
                        <div className="card-structure">
                            <div className="card-left">
                                <div className="profile-name">
                                    <CardTitle 
                                        titleStyle={styles.name}
                                        style={styles.card}
                                        title={`Welcome ${currentUser.profile.firstName} ${currentUser.profile.lastName}!`}
                                    />
                                </div>
                                <div className="stats">
                                    <div className="compliments-given">
                                        <CardTitle 
                                            titleStyle={styles.stats} 
                                            style={styles.card}
                                            title={`You've received ${receivedPosts.length} and sent ${sentPosts.length} compliments.`}
                                        />
                                    </div>
                                    <div className="compliments-received">
                                        <CardTitle 
                                            titleStyle={styles.stats} 
                                            style={styles.card}
                                            title={sentPosts.length < 30 ? 
                                            `Send ${badgeUpgrade(sentPosts.length)} more compliment(s) to upgrade your profile badge!`
                                            : `Great job, you're legitimately a good person!`}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card-right">
                                <div style={{backgroundImage: `url(/images/${badgePicker(sentPosts.length)}.jpg)`, backgroundSize: 'cover' }} className="user-image-and-badge">
                                    <div className="user-image">
                                        <PostAvatar avatarSize={75} src={currentUser.profile.photo} />
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
                                style={{margin: '0px', padding: '0px', fontSize: '12px'}}
                            >
                                <div className="profile-posts-list">
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
                                style={{margin: '0px', padding: '0px', fontSize: '12px'}}
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

Profile.propTypes = {
  currentUser: PropTypes.object,
  posts: PropTypes.arrayOf(PropTypes.object),
};