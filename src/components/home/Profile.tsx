import * as React from 'react';

interface ProfileProps{
  name : string,
  position : string,
  like_count : number
}

export default class Profile extends React.Component<ProfileProps,any> {
  render() {
    return (
        <div className="todo">
        <div>{this.props.name}</div>
        <div>{this.props.position}</div>
        <div>Pocet likes: {this.props.like_count}</div>
        </div>
    )
  }
}