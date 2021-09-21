import React from "react";
import './App.css';
import Header from "./Components/Header";
import Messages from "./Components/Messages";
import Input from "./Components/InputQuery";
import Footer from "./Components/Footer";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      polaznik: "David Pokrajac",
      messages: [],
      user: {
        username: this.randomName(),
        color: this.randomColor()
      }
    }

    this.drone = new window.Scaledrone("lau2THw93CWZs6Tc", {
      data: this.state.user
    });

    this.room = this.drone.subscribe("observable-room");
  }

  componentDidMount() {
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.user};
      member.id = this.drone.clientId;
      this.setState({user: member});
    });
    this.room.on('data', (data, member) => {
      const messages = this.state.messages;
      let date = new Date();
      let hours = date.getHours();
      if(hours < 10) {
        hours = "0" + hours;
      }
      let minutes = date.getMinutes();
      if(minutes < 10) {
        minutes = "0" + minutes;
      }
      messages.push({user: member, text: data, date: hours + ":" + minutes});
      this.setState({messages});
    });
  }

  randomName() {
    const imena = ["Ivana", "Mato", "Miroslav", "Božidar", "Ivan", "Dinko", "Marko", "Slavko", "Vjenceslav", "August", "Ksaver", "Sanja", "Luko", "Vladimir", "Vesna", "Miro", "Tin", "Ante", "Dragutin", "Antun Branko"];
    const prezimena = ["Brlić Mažuranić", "Lovrak", "Krleža", "Prosenjak", "Mažuranić", "Šimunović", "Marulić", "Kolar", "Novak", "Šenoa", "Šandor Gjalski", "Pilić", "Paljetak", "Nazor", "Parun", "Gavran", "Ujević", "Kovačić", "Tadijanović", "Šimić"];
    const ime = Math.floor(Math.random() * imena.length);
    const prezime = Math.floor(Math.random() * prezimena.length);
    return imena[ime] + " " + prezimena[prezime];
  }

  randomColor() {
    return "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

  render() {
    return(
      <div className="App">
        <Header polaznik={this.state.polaznik} />
        <Messages 
          messages={this.state.messages}
          currentUser={this.state.user}
        />
        <Input onSendMessage={this.onSendMessage} />
        <Footer />
      </div>
    );
  }

}

export default App;
