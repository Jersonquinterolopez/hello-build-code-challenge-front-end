import moment from 'moment';

const getUpcomingEvents = async (setUpcomingEvents, setLoading, setError) => {
  setLoading(true);
  const gapi = window.gapi;
  const {
    REACT_APP_CALENDAR_API_CLIENT_ID,
    REACT_APP_CALENDAR_API_KEY,
  } = process.env;
  const DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ];
  const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

  await gapi.load('client:auth2', async () => {
    console.log('loaded client');

    gapi.client.init({
      apiKey: REACT_APP_CALENDAR_API_KEY,
      clientId: REACT_APP_CALENDAR_API_CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    });

    await gapi.client.load('calendar', 'v3', () =>
      console.log('Loaded Calendar!')
    );
    await gapi.auth2.getAuthInstance().signIn();
    await gapi.client.calendar.events
      .list({
        calendarId: 'primary',
        timeMin: moment().format(),
        timeMax: moment().add(1, 'month').format(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 30,
        orderBy: 'startTime',
      })
      .then((response) => {
        const events = response.result.items;
        console.log('EVENTS: ', events);
        setUpcomingEvents(events);
        setLoading(false);
        setError(false);
      })
      .catch((error) => setError(error));
  });
};

export default getUpcomingEvents;
