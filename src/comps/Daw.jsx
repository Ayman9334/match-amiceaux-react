import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import Home from './Home';
import Users from './Users';
import Clubs from './Clubs';

export default function Daw(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        { label: 'Home', icon: 'fa fa-home'},
        { label: 'Membres', icon: 'fa fa-users'},
        { label: 'Clubs', icon: 'fa fa-cc-diners-club '},
        { label: 'Matchs', icon: 'fa fa-futbol-o' },
        { label: 'Acceuil', icon: 'fa fa-edit' },
        { label: 'Settings', icon: 'fa fa-cog' }
    ];

    const renderContent = () => {
        const activeItem = items[activeIndex];
        if (activeItem) {
            return (
                <div>
                    {activeItem.label === 'Home' && <Home users={props.userInfos} clubs={props.clubInfos}/> }
                    {activeItem.label === 'Membres' && <Users users={props.userInfos}/> }
                    {activeItem.label === 'Clubs' && <Clubs clubs={props.clubInfos}/> }
                </div>
            );
        }
        return null;
    };


    return (
        <div className="card">
            <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            {renderContent()}
        </div>
    );
}
