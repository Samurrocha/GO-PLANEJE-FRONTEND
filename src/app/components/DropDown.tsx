'use client'

import React, { useState, ReactNode } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

interface OptionProps {
    label: string;
    onClick: () => void;
}

interface DropDownProps {
    options: OptionProps[];
    buttonLabel: ReactNode;
}

export function DropDown({ options, buttonLabel }: DropDownProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color="primary"
        onClick={handleClick}
        aria-controls={open ? "login-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
    
      >
        {buttonLabel}
      </Button>

      <Menu
        id="login-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "login-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        
        {options.map((option) => (
          <MenuItem key={option.label} onClick={option.onClick}>
            {option.label}
          </MenuItem>
        ))}

        {/* <MenuItem onClick={() => handleOptionClick("Google")}>Login com Google</MenuItem>
        <MenuItem onClick={() => handleOptionClick("GitHub")}>Login com GitHub</MenuItem>
        <MenuItem onClick={() => handleOptionClick("Sistema")}>Login com Sistema</MenuItem> */}
      </Menu>
    </>
  );
}
