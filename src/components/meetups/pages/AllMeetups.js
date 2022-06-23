import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://meetups-f3ba8-default-rtdb.firebaseio.com/meetups.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      })
      .catch((error) => {
        console.error('error', error);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>loading..</p>
      </section>
    );
  }

  return (
    <section className="allMeetups">
      <h1>all meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetups;
