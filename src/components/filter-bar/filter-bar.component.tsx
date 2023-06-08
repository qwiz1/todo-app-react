import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { COLORS } from 'src/theme';

type Props = {
  value: string;
  onChange: (filter: string) => void;
};

const FilterBar: React.FC<Props> = ({ value, onChange }) => {
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newFilter: string,
  ) => {
    if (newFilter) {
      onChange(newFilter);
    }
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="Filter"
      sx={{
        borderRadius: 0,
        boxShadow: '3px 2px',
        height: '30px',
        width: '272px',
        '& .toggleBtn': {
          border: `2px solid ${COLORS.DARK}`,
          color: COLORS.DARK,
          borderRadius: 0,
          textTransform: 'none',
        },
      }}
      size="medium"
    >
      <ToggleButton className="toggleBtn" value="all">
        All
      </ToggleButton>
      <ToggleButton className="toggleBtn" value="private">
        Private
      </ToggleButton>
      <ToggleButton className="toggleBtn" value="public">
        Public
      </ToggleButton>
      <ToggleButton className="toggleBtn" value="completed">
        Completed
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export { FilterBar };
