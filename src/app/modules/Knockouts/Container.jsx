import { useState, useEffect } from 'react';
import { allMatchesAPI } from 'app/api/Knockouts';
import Knockouts from './views/Knockouts';

const KnockoutsContainer = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch matches data from API
        const fetchMatches = async () => {
          try {
            const formattedMatchesResponse = await allMatchesAPI();
            setMatches(formattedMatchesResponse);
            setLoading(false);
          } catch (error) {
            console.log(error);
            setError('Failed to fetch data');
            setLoading(false);
          }
        };
    
        if(!(matches && matches?.length))fetchMatches();
    
        const interval = setInterval(fetchMatches, 15000);
    
        return () => clearInterval(interval);
      }, []);


    return <Knockouts matches={matches} error={error} loading={loading} />
};

export default KnockoutsContainer;