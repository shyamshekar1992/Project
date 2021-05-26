import React, { Component } from "react";
import { Table, Button, ButtonGroup } from "react-bootstrap";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

class VehicleData extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <br></br>
            <div
              class="container-lg shadow p-3 mb-5 bg-body rounded text-dark "
              style={{ marginTop: "5%", backgroundColor: "white" }}
            >
              <h3 className="text-center">Vehicle Data</h3>
              <br></br>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Vehicle Name</th>
                    <th>Added Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Benz</td>
                    <td>Fri Oct 16 2020</td>
                    <td>
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        <Button className="btn btn-success" to="/edit-project">
                          <EditIcon />
                        </Button>
                        <Button className="btn btn-danger" to="#delete">
                          <DeleteIcon />
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>BMW</td>
                    <td>Tue Jan 05 2021</td>
                    <td>
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        <Button className="btn btn-success" to="/edit-project">
                          <EditIcon />
                        </Button>
                        <Button className="btn btn-danger" to="#delete">
                          <DeleteIcon />
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>SUBARU</td>
                    <td>Fri May 21 2021</td>
                    <td>
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        <Button className="btn btn-success" to="/edit-project">
                          <EditIcon />
                        </Button>
                        <Button className="btn btn-danger" to="#delete">
                          <DeleteIcon />
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>SUBARU</td>
                    <td>Fri May 21 2021</td>
                    <td>
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        <Button className="btn btn-success" to="/edit-project">
                          <EditIcon />
                        </Button>
                        <Button className="btn btn-danger" to="#delete">
                          <DeleteIcon />
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>SUBARU</td>
                    <td>Fri May 21 2021</td>
                    <td>
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        <Button className="btn btn-success" to="/edit-project">
                          <EditIcon />
                        </Button>
                        <Button className="btn btn-danger" to="#delete">
                          <DeleteIcon />
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>SUBARU</td>
                    <td>Fri May 21 2021</td>
                    <td>
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        <Button className="btn btn-success" to="/edit-project">
                          <EditIcon />
                        </Button>
                        <Button className="btn btn-danger" to="#delete">
                          <DeleteIcon />
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VehicleData;
