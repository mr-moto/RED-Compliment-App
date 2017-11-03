import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Card, CardTitle} from 'material-ui/Card';

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
                        <div className="profile-item-data">
                            <CardTitle title="2" subtitle="Items shared" />
                            <CardTitle title="2" subtitle="Items borrowed" />
                        </div>
                        {/*<div className="profile-gravatar">
                            <Gravatar size={150} email={singleUserData.email} className="gravatar-image"/>
                        </div>*/}
                    </div>
                </Card>
            </div>
        </div>
    )
} 