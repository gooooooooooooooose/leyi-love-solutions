import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Dropdown,
  FormControl,
  FormLabel,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  ToggleButtonGroup,
  Typography,
} from "@mui/joy";

function App() {
  const [dude, setDude] = useState("Reid");
  const [color, setColor] = useState("");
  const [number, setNumber] = useState("-1");
  const [like, setLike] = useState("");
  const [result, setResult] = useState<boolean | undefined>(undefined);

  const handleReady = () => {
    let res = Boolean(Math.round(Math.random()));
    if (dude === "Nassim" || dude === "Brian") {
      res = true;
    }
    setResult(res);
  };

  const renderForm = () => {
    return (
      <Stack mt={3} spacing={2}>
        <FormControl>
          <FormLabel>Pick a color</FormLabel>
          <ToggleButtonGroup
            spacing="0.5rem"
            aria-label="spacing button group"
            value={color}
            onChange={(event, newValue) => {
              setColor(newValue ?? "");
            }}
            variant="soft"
          >
            <Button color="success" value="green">
              Green
            </Button>
            <Button color="warning" value="yellow">
              Yellow
            </Button>
            <Button color="primary" value="blue">
              Blue
            </Button>
          </ToggleButtonGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Pick a number</FormLabel>
          <ToggleButtonGroup
            spacing="0.5rem"
            value={number}
            onChange={(event, newValue) => {
              setNumber(newValue ?? "");
            }}
            variant="soft"
          >
            <Button value="3">3</Button>
            <Button value="25">25</Button>
            <Button value="1">1</Button>
          </ToggleButtonGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Do you like them?</FormLabel>
          <RadioGroup
            defaultValue={like}
            name="radio-buttons-group"
            onChange={(event) => setLike(event.target.value)}
          >
            <Radio value="yes" label="Yes" variant="soft" />
            <Radio value="no" label="No" variant="soft" />
          </RadioGroup>
        </FormControl>
      </Stack>
    );
  };

  const renderResult = () => {
    if (result === true) {
      return <Typography level="h2">Yes!!!!!!!!!</Typography>;
    }

    return <Typography level="h2">No! Hang in there!</Typography>;
  };

  return (
    <Box width="100vw" height="100vh" display="flex" justifyContent="center">
      <Stack justifyContent="center">
        <Box display="flex" alignItems="center">
          <Typography level="h1">Should Leyi break up with</Typography>
          <Dropdown>
            <MenuButton
              size="sm"
              variant="plain"
              sx={{
                fontSize: "32px",
                color: "black",
                fontWeight: 700,
                mt: 0.25,
                p: 1,
                textDecoration: "underline",
              }}
            >
              {dude}
            </MenuButton>
            <Menu>
              <MenuItem selected={dude === "AJ"} onClick={() => setDude("AJ")}>
                AJ
              </MenuItem>
              <MenuItem
                selected={dude === "Brian"}
                onClick={() => setDude("Brian")}
              >
                Brian
              </MenuItem>
              <MenuItem
                selected={dude === "Nassim"}
                onClick={() => setDude("Nassim")}
              >
                Nassim
              </MenuItem>
              <MenuItem
                selected={dude === "Reid"}
                onClick={() => setDude("Reid")}
              >
                Reid
              </MenuItem>
            </Menu>
          </Dropdown>
        </Box>
        {result === undefined ? renderForm() : renderResult()}
        {result === undefined ? (
          <Button
            sx={{ mt: 3 }}
            variant="soft"
            onClick={handleReady}
            disabled={!number || !color || !like}
          >
            I'm ready
          </Button>
        ) : (
          <Button
            variant="soft"
            onClick={() => {
              setColor("");
              setNumber("");
              setLike("");
              setResult(undefined);
            }}
            sx={{ mt: 3 }}
          >
            Start over
          </Button>
        )}
      </Stack>
    </Box>
  );
}

export default App;
