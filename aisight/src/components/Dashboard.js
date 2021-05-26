import React, { Component } from "react";
// import bg3 from "./Images/bg3.jpg";
import {
  Bar,
  Line,
  Pie,
  Scatter,
  Doughnut,
  Radar,
  PolarArea,
} from "react-chartjs-2";
import {
  Row,
  Col,
  Image,
  Container,
  Card,
  CardDeck,
  Button,
} from "react-bootstrap";
// import pro1 from "./Images/pro1.jpg";
import Chart from "chart.js/auto";

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Vehicles",
            data: [5, 4, 8, 3, 6, 2, 4],
            backgroundColor: [
              "rgba(255,99,132,0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 205, 86, 0.6)",
              "rgba(255, 159, 64,0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(201, 203, 207,0.6)",
            ],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div>
        {/* <Nav></Nav> */}
        <div
          class="  p-3 mb-2  text-white "
          //   style={{ backgroundImage: `url(${bg3})` }}
        >
          <h1>Hello, Welcome Here,</h1>
          <br></br>

          <div
            class="container-xxl  shadow-lg p-3 mb-5  text-dark  "
            style={{ backgroundColor: "white" }}
          >
            <div
              class="container-lg    text-dark  "
              style={{ backgroundColor: "white" }}
            >
              <div class="col-md-16">
                <CardDeck>
                  <Card>
                    <Card.Header>
                      <p>
                        <b>Vehicles</b>
                      </p>
                    </Card.Header>

                    <Card.Body>
                      <div className="chart" style={{ marginTop: "9%" }}>
                        <Bar
                          data={this.state.chartData}
                          width={100}
                          height={50}
                          options={{ maintainAspectRation: false }}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Header>
                      <p>
                        <b>Fuel</b>
                      </p>
                    </Card.Header>

                    <Card.Body>
                      <Line
                        data={this.state.chartData}
                        width={100}
                        height={50}
                        options={{ maintainAspectRation: false }}
                      />
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Header>
                      <p>
                        <b>Tires</b>
                      </p>
                    </Card.Header>

                    <Card.Body>
                      <Pie
                        data={this.state.chartData}
                        width={100}
                        height={50}
                        options={{ maintainAspectRation: false }}
                      />
                    </Card.Body>
                  </Card>
                </CardDeck>
              </div>

              {/* ______________________________________________________________________________ */}
              <div class="col-md-16">
                <br></br>
                <CardDeck>
                  <Card>
                    <Card.Header>
                      <p>
                        <b>Doors</b>
                      </p>
                    </Card.Header>

                    <Card.Body>
                      <div className="chart" style={{ marginTop: "9%" }}>
                        <Doughnut
                          data={this.state.chartData}
                          width={100}
                          height={50}
                          options={{ maintainAspectRation: false }}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Header>
                      <p>
                        <b>Locations</b>
                      </p>
                    </Card.Header>
                    {/* <Card.Img variant="top" src={pic2} /> */}
                    <Card.Body>
                      <Radar
                        data={this.state.chartData}
                        width={100}
                        height={50}
                        options={{ maintainAspectRation: false }}
                      />
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Header>
                      <p>
                        <b>Odometer</b>
                      </p>
                    </Card.Header>

                    <Card.Body>
                      <PolarArea
                        data={this.state.chartData}
                        width={100}
                        height={50}
                        options={{ maintainAspectRation: false }}
                      />
                    </Card.Body>
                  </Card>
                </CardDeck>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
