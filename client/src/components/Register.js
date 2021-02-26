import React, { useState } from "react";
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
import axios from "axios";

const customTheme = deepMerge(grommet, {
  formField: {
    label: {
      requiredIndicator: true,
    },
  },
});

function Register(props) {
  // need to set up a state to collect info from the input boxes
  const [registrationInfo, setRegistrationInfo] = useState({
    firstName: '',
    lastName:'',
    email: '',
    password: ''
  })

  // function to set state with user registration info
  const handleChange = (e) => {
    setRegistrationInfo({
      ...registrationInfo,
      [e.target.name]: e.target.value,
    });
      
  }

  // function to handleSubmit of infor once button is clicked
  const handleSubmit = async () => {
    await axios.post('http://localhost:3001/register/user', {
      first_name: registrationInfo.firstName,
      last_name: registrationInfo.lastName,
      email: registrationInfo.email,
      password: registrationInfo.password
    })

    props.history.push('/login')
  }



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
            <TextInput
              id="firstName"
              name="firstName"
              onChange={handleChange}
            />
          </FormField>
          <FormField
            name="lastName"
            htmlFor="lastName"
            label="Last Name"
            required
          >
            <TextInput id="lastName" name="lastName" onChange={handleChange} />
          </FormField>
          <FormField name="email" htmlFor="email" label="Email" required>
            <TextInput
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
            />
          </FormField>
          <FormField
            name="password"
            htmlFor="password"
            label="Password"
            required
          >
            <TextInput
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </FormField>
          <Button
            type="submit"
            label="Register"
            onClick={handleSubmit}
            primary
          />
          <Text margin={{ left: "small" }} size="small" color="status-critical">
            * Required Field
          </Text>
        </Form>
      </Box>
    </Grommet>
  );
}

export default Register;
