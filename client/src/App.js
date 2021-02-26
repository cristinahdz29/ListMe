import React from "react";
import {Box, grommet, Grommet, Button } from "grommet";


function App(props) {
  // adding state within our app
  // need to make a call to the backend to register a user
  

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="medium">
        <Button primary label="Register" size="large" onClick={() => {}} {...props} />
      </Box>
      
    </Grommet>
  );
}

export default App;
