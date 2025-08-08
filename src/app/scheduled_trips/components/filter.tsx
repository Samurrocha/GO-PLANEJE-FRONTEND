'use client';

import React, { useState, useEffect, JSX } from "react";
import {
  Box,
  Autocomplete,
  TextField,
  Slider,
  Typography,
  Button,
  Stack,
} from "@mui/material";

interface Pais {
  code: string;
  label: string;
}

// Opções de países (exemplo)
const paises: Pais[] = [
  { code: "BR", label: "Brasil" },
  { code: "FR", label: "França" },
  { code: "US", label: "Estados Unidos" },
  { code: "JP", label: "Japão" },
  { code: "IT", label: "Itália" },
  // adicione mais países aqui
];

export default function FiltroViagens(): JSX.Element {
  const [paisSelecionado, setPaisSelecionado] = useState<Pais | null>(null);
  const [orcamento, setOrcamento] = useState<[number, number]>([0, 10000]);
  const [inputInicial, setInputInicial] = useState<string>("0");
  const [inputFinal, setInputFinal] = useState<string>("10000");

  useEffect(() => {
    setInputInicial(orcamento[0].toString());
    setInputFinal(orcamento[1].toString());
  }, [orcamento]);

  const handleSliderChange = (
    event: Event,
    newValue: number | number[]
  ): void => {
    if (!Array.isArray(newValue)) return;
    setOrcamento(newValue as [number, number]);
  };

  const handleInputInicialChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    let valor = event.target.value;
    setInputInicial(valor);

    let numValor = valor === "" ? 0 : Number(valor);
    if (numValor < 0) numValor = 0;
    if (numValor > orcamento[1]) numValor = orcamento[1];

    setOrcamento([numValor, orcamento[1]]);
  };

  const handleInputFinalChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    let valor = event.target.value;
    setInputFinal(valor);

    let numValor = valor === "" ? orcamento[0] : Number(valor);
    if (numValor < orcamento[0]) numValor = orcamento[0];
    if (numValor > 10000) numValor = 10000;

    setOrcamento([orcamento[0], numValor]);
  };

  const resetFiltros = (): void => {
    setPaisSelecionado(null);
    setOrcamento([0, 10000]);
    setInputInicial("0");
    setInputFinal("10000");
  };

  return (
    <Box sx={{ maxWidth: 400, p: 2 }}>
      <Autocomplete
        options={paises}
        getOptionLabel={(option) => option.label}
        value={paisSelecionado}
        onChange={(event, newValue) => setPaisSelecionado(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Filtrar por País" variant="outlined" />
        )}
        sx={{ mb: 4 }}
      />

      <Typography gutterBottom>Orçamento (R$)</Typography>

      <Slider
        value={orcamento}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={20000}
        step={200}
        sx={{ mb: 2 }}
      />

      <Stack direction="row" spacing={2} mb={4}>
        <TextField
          label="Valor Inicial"
          variant="outlined"
          value={inputInicial}
          onChange={handleInputInicialChange}
          type="number"
          inputProps={{ min: 0, max: orcamento[1] }}
        />
        <TextField
          label="Valor Final"
          variant="outlined"
          value={inputFinal}
          onChange={handleInputFinalChange}
          type="number"
          inputProps={{ min: orcamento[0], max: 10000 }}
        />
      </Stack>

      <Button variant="outlined" fullWidth onClick={resetFiltros}>
        Limpar filtros
      </Button>
    </Box>
  );
}
