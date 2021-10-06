import { Menu, MenuItem } from '@mui/material';
import { FunctionComponent, MouseEvent, useState } from 'react';
import { DetailsButton } from '../deliveryRow/deliveryRowStyled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type ActionsDropdownProps = {
  onEdit(): void;
  onDelete(): void;
}

const ActionsDropdown: FunctionComponent<ActionsDropdownProps> = ({ onEdit, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <DetailsButton onClick={handleClick} id="actions" endIcon={<KeyboardArrowDownIcon htmlColor=" rgba(0, 0, 0, 0.25);" />}>Actions</DetailsButton>
      <Menu
        id="actions"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'actions-dropdown',
        }}
      >
        <MenuItem onClick={() => {
          onEdit();
          handleClose();
        }}>Edit</MenuItem>
        <MenuItem onClick={() => {
          onDelete();
          handleClose();
        }}>Remove</MenuItem>
      </Menu>
    </>
  );
};

export default ActionsDropdown;
