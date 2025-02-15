import React, { useState } from 'react';
import clsx from 'clsx';
import { SpeedDial as MUISpeedDial, SpeedDialProps, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import styles from './SpeedDial.module.scss';

export interface ISpeedDialAction {
  icon: React.ReactNode;
  name: string;
  onClick: () => void;
}

export interface ISpeedDialProps extends SpeedDialProps {
  actions: ISpeedDialAction[];
  className?: string;
}

export default function SpeedDial({ actions, className, ...props }: ISpeedDialProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.speedDial}>
      <MUISpeedDial
        ariaLabel="SpeedDial component"
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        className={styleClass}
        {...props}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              action.onClick();
              handleClose();
            }}
          />
        ))}
      </MUISpeedDial>
    </div>
  );
}