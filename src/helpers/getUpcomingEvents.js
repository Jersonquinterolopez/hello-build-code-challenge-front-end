import moment from 'moment';

const getUpcomingEvents = async () => {
  const gapi = window.gapi;
  const {
    REACT_APP_CALENDAR_API_CLIENT_ID,
    REACT_APP_CALENDAR_API_KEY,
  } = process.env;
  const DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ];
  const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

  const authAndGet = await gapi.load('client:auth2', () => {
    console.log('loaded client');

    gapi.client.init({
      apiKey: REACT_APP_CALENDAR_API_KEY,
      clientId: REACT_APP_CALENDAR_API_CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    });

    gapi.client.load('calendar', 'v3', () => console.log('Loaded Calendar!'));

    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        gapi.client.calendar.events
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
            return events;
          });
      });
  });

  return authAndGet;
};

export default getUpcomingEvents;
