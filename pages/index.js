import React from 'react';
import Header from '../components/Header';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Header />
      </main>
    );
  }
}
