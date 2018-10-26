import React from 'react';
import TeamMember from './TeamMember';

export default class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Team</p>
        <TeamMember />
      </div>
    );
  }
}
