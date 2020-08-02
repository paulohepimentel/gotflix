const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://gotflix-server.herokuapp.com';

// const URL_BACKEND = 'https://gotflix-server.herokuapp.com';

export default {
  URL_BACKEND,
};
