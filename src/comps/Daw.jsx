import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import Home from './Home';
import Users from './Users';

export default function Daw({userInfos}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        { label: 'Home', icon: 'fa fa-home', content: 'Welcome to the Home page!' },
        { label: 'Membres', icon: 'fa fa-users', content: 'This is the Membres page.' },
        { label: 'Clubs', icon: 'fa fa-cc-diners-club ', content: 'Here you can edit your profile.' },
        { label: 'Matchs', icon: 'fa fa-futbol-o', content: 'Check out our documentation.' },
        { label: 'Acceuil', icon: 'fa fa-edit', content: 'Check out our documentation.' },
        { label: 'Settings', icon: 'fa fa-cog', content: 'Configure your settings here.' }
    ];

    const renderContent = () => {
        const activeItem = items[activeIndex];
        if (activeItem) {
            return (
                <div>
                    {/* <h4>{activeItem.label}</h4>
                    <p>{activeItem.content}</p> */}
                    {activeItem.label === 'Edit' && renderUserTable()}
                    {activeItem.label === 'Home' && <Home users={userInfos}/> }
                    {activeItem.label === 'Membres' && <Users users={userInfos}/> }
                </div>
            );
        }
        return null;
    };

    const renderUserTable = () => {
        // Replace this with your actual logic to fetch and display user data
        // For demonstration purposes, a simple table is created here
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>john@example.com</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>jane@example.com</td>
                    </tr>
                </tbody>
            </table>
        );
    };

    return (
        <div className="card">
            {/* <Button onClick={() => setActiveIndex(0)} className="p-button-outlined mb-5" label="Activate 1st" /> */}
            <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            {renderContent()}
        </div>
    );
}
