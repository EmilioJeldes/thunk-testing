import React from 'react';
import logo from './logo.svg';
import './App.css';
import api from './redux/api';
import errors from './redux/api/errorMessages';

function App() {
  const [error, setError] = React.useState('');
  const [locale, setLocale] = React.useState('en');
  React.useEffect(() => {
    setError('Learning React');
    setLocale(navigator.language.split('-')[0]);
    console.log(locale);
  }, [locale]);

  const handleClick = async () => {
    const handleErrors = status => {
      return (
        errors.posts.create.error[locale === 'es' ? locale : 'en'][status] || 'Some error occurred'
      );
    };
    const res = await api.posts.create(1, 'Grinderman', 'Terrible brigido');

    if (res.error) {
      setError(handleErrors(res.status));
    } else {
      console.log('data', res.data);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {error}
        </a>
        <br />
        <button onClick={handleClick}>Test</button>
      </header>
    </div>
  );
}

export default App;
