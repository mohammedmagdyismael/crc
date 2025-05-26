export const getTabs = role => {

    const isAdmin = role === 'Admin';
    const isTeam = role === 'Team';

    const tabs = [
        {
            label: 'Groups',
            route: '/groups'
        },
        {
            label: 'Schedule',
            route: '/schedule'
        },
        {
            label: 'Knockouts',
            route: '/knockouts'
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