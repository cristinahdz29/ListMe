import React from "react";

import {
  Box,
  Button,
  Grommet,
  Form,
  FormField,
  Text,
  TextInput,
} from "grommet";
import { grommet } from "grommet/themes";

function Login() {
  return (
    <Grommet full theme={grommet}>
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            validate="blur"
            onReset={(event) => console.log(event)}
            onValidate={(event) => console.log("Validate", event)}
            onSubmit={({ value }) => console.log("Submit", value)}
          >
            <FormField name="email" htmlFor="email" label="Email" required >
              <TextInput id="email" name="email" type="email" />
            </FormField>
            <FormField
              name="password"
              htmlFor="password"
              label="Password"
              required
            >
              <TextInput id="password" name="password" type="password" />
            </FormField>
            <Box direction="row" justify="between" margin={{ top: "medium" }}>
              <Button type="reset" label="Reset" />
              <Button type="submit" label="Update" primary />
            </Box>
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
}

export default Login;
