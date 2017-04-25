import * as React from 'react';
import Profile from './Profile';

export const HomePage = () => (
  <div>
    <h1>Home</h1>
    <p>Test home page!</p>
    <HomeGreeting/>
    <HomeGreeting2/>
    <HomeGreeting3 name={"Pepo"} greetTimes={4}/>
    <Profile name={"John Doe"} position={"Backend engineer"} like_count={999} />
    <Profile name={"Jane Doe"} position={"Frontend engineer"} like_count={0} />
  </div>
);

interface HomeProps{
  name : string,
  greetTimes? : number
}



export class HomeGreeting3 extends React.Component<HomeProps, any> {
  render() {
    let otherName = this.props.name;
    return (
    <div>
      Ahoj {this.props.name} {this.props.greetTimes}x!
    </div>)
  }
}

export const HomeGreeting = () => (
  <div>
    Ahoj lidi!
  </div>
)


export const HomeGreeting2 = () => {
  return (
    <div>
      Ahoj lidi!
    </div>
  )
}
