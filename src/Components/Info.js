import React from "react";
import "../css/main.css";

export default class Info extends React.Component {
  state = {
    covid: null,
    recoverd: null,
    deaths: null,
  };

  async componentDidMount() {
    const url = "https://disease.sh/v3/covid-19/all";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ covid: data.cases });
    this.setState({ recovered: data.recovered });
    this.setState({ deaths: data.deaths });
  }

  render() {
    return (
      <div className="pb-3" id="Info">
        <div>
          <h1 className="text-4xl text-center pt-3 pb-3 font-bold">
            INFORMATION
          </h1>
        </div>
        <div className="">
          <div className="bg-gray-300">
            <p className="text-center  pt-8 p-3 text-4xl">Cases</p>
            <p className="text-center p-3 text-3xl  w-auto" id="cases">
              {this.state.covid}
            </p>
          </div>
          <div className="bg-green-400">
            <p className="text-center  pt-8 p-3 text-4xl">Recovered</p>
            <p className="text-center p-3 text-3xl k w-auto" id="recovered">
              {this.state.recovered}
            </p>
          </div>
          <div className="bg-red-600">
            <p className="text-center  pt-8 p-3 text-4xl">Deaths</p>
            <p className="text-center p-3 pb-4 text-3xl  w-auto" id="deaths">
              {this.state.deaths}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
