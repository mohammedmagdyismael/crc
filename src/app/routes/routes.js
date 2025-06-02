export const getTabs = role => {

    const isAdmin = role === 'Admin';
    const isTeam = role === 'Team';

    const tabs = [
        {
            label: 'Knockouts',
            route: '/knockouts'
        },
        {
            label: 'Schedule',
            route: '/schedule'
        }
    ];

    if (isAdmin) {
        tabs.push(
            {
                label: 'Moderator',
                route: '/matchmoderator'
            },
        );
    };

    if (isTeam) {
        tabs.push(
            {
                label: 'Your Match',
                route: '/yourmatch'
            },
        );
    }

    return tabs;
}