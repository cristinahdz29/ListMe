import React from "react";
import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  Text,
  TextInput,
  Heading
} from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

const customTheme = deepMerge(grommet, {
  formField: {
    label: {
      requiredIndicator: true,
    },
  },
});

function Register() {
  return (
    <Grommet theme={customTheme}>
      <Box align="center" pad="large">
        <Heading color="brand">We'll need just a few things...</Heading>
        <Form>
          <FormField
            name="firstName"
            htmlFor="firstName"
            label="First Name"
            required
          >
            <TextInput id="firstName" name="firstName" />
          </FormField>
          <FormField
            name="lastName"
            htmlFor="lastName"
            label="Last Name"
            required
          >
            <TextInput id="lastName" name="lastName" />
          </FormField>
          <FormField name="email" htmlFor="email" label="Email" required>
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
          <Button type="submit" label="Register" primary />
          <Text margin={{ left: "small" }} size="small" color="status-critical">
            * Required Field
          </Text>
        </Form>
      </Box>
    </Grommet>
  );
}

export default Register;
