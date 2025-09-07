import { useState, useEffect, useCallback } from 'react';
import { allMatchesAPI } from 'app/api/Knockouts';
import Knockouts from './views/Knockouts';

const KnockoutsContainer = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMatches = useCallback(async () => {
        try {
            setLoading(true);
            const formattedMatchesResponse = await allMatchesAPI();
            setMatches(formattedMatchesResponse);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError('Failed to fetch data');
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchMatches();
      }, [fetchMatches]);

    return <Knockouts matches={matches} error={error} loading={loading} onRefresh={fetchMatches} />
};

export default KnockoutsContainer;