import { useState, useEffect } from 'react';
import Layout from 'app/components/Layout';
import { allMatchesAPI, matchDetailsAPI } from 'app/api/Matches';

import Matches from 'app/modules/common/Matches';

const MatchesContainer = () => {


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

    return (
        <Layout>
            <Matches
                matchDetailsAPI={matchDetailsAPI}
                matches={matches}
                error={error}
                loading={loading}
            />
        </Layout>
    );
};

export default MatchesContainer;