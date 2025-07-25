import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';

const MAX = 1000000;
const MIN = 0;

export default function CustomMarks() {
  const [val, setVal] = React.useState<number>(MIN);

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value);
    if (!isNaN(inputValue)) {
      setVal(Math.min(Math.max(inputValue, MIN), MAX));
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Slider
        marks={[
          { value: MIN, label: '' },
          { value: MAX, label: '' },
        ]}
        step={10}
        value={val}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleSliderChange}
      />

      <TextField
        type="number"
        value={val}
        onChange={handleInputChange}
        size="small"
        variant="standard"
        InputProps={{
          inputProps: {
            min: MIN,
            max: MAX,
            step: 10,
            style: { textAlign: 'center' },
          },
        }}
        sx={{
          width: '100px',
          mt: 2,
          '& .MuiInputBase-root': {
            fontSize: 14,
          },
        }}
      />
    </Box>
  );
}
