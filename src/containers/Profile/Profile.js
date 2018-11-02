// @flow

import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/es/TextField/TextField';
import Avatar from '../../components/Avatar/Avatar';
import './Profile.css';

const getFriends = e => (
  <Avatar cN="friendAvatar" user={e.name} img={e.picture} />
);

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      name: 'Henry Jesaispas',
      mail: 'adresse@email.com',
      langue: 'Français',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      name: event.target[0].value,
      mail: event.target[1].value,
      langue: event.target[2].value,
      edit: false,
    });
  };

  editInfo = (event) => {
    event.preventDefault();
    this.setState({ edit: !this.state.edit });
  }

  render() {
    const friends = [];
    const A = {
      name: 'Alexy',
      picture: 'https://plus.google.com/_/focus/photos/public/AIbEiAIAAABECNSO1p37ltq_sgEiC3ZjYXJkX3Bob3RvKigwYWE4OTdmMmQ0YzY0ZGIwMzBjODA5ZTBlYjEwMjdiZGM3ZmRhZjU1MAFYiqakLZLDZhMRMBIuB4aOWGcEeA?sz=128',
    };
    const B = {
      name: 'William',
      picture: 'https://media.licdn.com/dms/image/C4D03AQFAoQ3sJtKOuQ/profile-displayphoto-shrink_200_200/0?e=1544659200&v=beta&t=NgnCpYLgMHAPTzWRJWVmQ1_-VBaZbk6a0-8--HyyYQc',
    };
    const C = {
      name: 'Julien',
      picture: 'https://wawrzy.github.io/img/wawrzy.JPG',
    };
    const D = {
      name: 'Mohammed',
      picture: 'https://wawrzy.github.io/img/wawrzy.JPG',
    };
    friends.push(A);
    friends.push(B);
    friends.push(C);

    return (
      <div className="profileComponent">
        <form onSubmit={this.onSubmit} className="all">
          <Paper className="paper" elevation={2}>
            <Avatar cN="avatar" user="me" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4HnS1e8I3coO-06RSBo_il9PbjHX9d7I9bG2MDFqMRHwIhvWcg" />
            <div className="editBtnPosition">
              <Button variant="fab" color="primary" aria-label="Edit" className="editBtn" onClick={e => this.editInfo(e)}>
                <EditIcon />
              </Button>
            </div>
            {this.state.edit === false
              ? (
                <div className="infoTxt">
                  <div className="infoTxtName">
                    {this.state.name}
                  </div>
                  <div className="infoTxtMail">
                    {this.state.mail}
                  </div>
                  <div className="infoTxtLangue">
                    {this.state.langue}
                  </div>
                </div>
              )
              : (
                <div className="infoTxt">
                  <div className="infoTxtName">
                    <TextField defaultValue={this.state.name}>
                      {this.state.name}
                    </TextField>
                  </div>
                  <div className="infoTxtMail">
                    <TextField defaultValue={this.state.mail}>
                      {this.state.mail}
                    </TextField>
                  </div>
                  <div className="infoTxtLangue">
                    <TextField defaultValue={this.state.langue}>
                      {this.state.langue}
                    </TextField>
                  </div>
                  <Button type="submit" className="validateBtn">
                     Valider
                  </Button>
                </div>
              )
            }
            <div className="list">
              <div className="listAvatar">
                {friends.map(e => getFriends(e))}
              </div>
            </div>
          </Paper>
        </form>
      </div>
    );
  }
}

export default Profile;
