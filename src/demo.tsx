import React, { Component } from "react";

import {
  Button,
  Card,
  CardHeader,
  CardContent,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  Paper
} from "@material-ui/core";
interface SampleProps {
  account: {};
}
export default class DemoKick extends Component<SampleProps> {
  render() {
    if (!this.props.account) {
      return "";
    }
    return (
      <Paper square={false}>
        <Card>
          <CardHeader title="Site details Details" />
          <CardContent>
            <FormControl>
              <TextField
                id="outlined-name"
                label="Name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-Code"
                label="Code"
                margin="normal"
                variant="outlined"
              />
              <FormControlLabel
                control={<Checkbox defaultValue="checkedB" color="primary" />}
                label="Primary"
              />
              <FormControl>
                <Button variant="contained" color="primary">
                  Set as Default
                </Button>
                <Button variant="contained" color="primary">
                  Edit
                </Button>
              </FormControl>
            </FormControl>
          </CardContent>
        </Card>
      </Paper>
    );
  }
}
