import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import React from 'react';

interface LanguageSwitcherProps {
  onChangeLanguage: (locale: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  onChangeLanguage,
}) => {
  return (
    <>
      <Box>
        <Fab
          onClick={() => onChangeLanguage('cs')}
          value="cs"
          color="primary"
          aria-label="cesky"
          size="small"
          style={{ margin: '0px' }}
          data-testid="translate-cs"
        >
          <div>CZ</div>
        </Fab>
        <Fab
          onClick={() => onChangeLanguage('de')}
          value="de"
          color="primary"
          aria-label="deutch"
          size="small"
          data-testid="translate-de"
        >
          <div>DE</div>
        </Fab>
      </Box>
    </>
  );
};

export default LanguageSwitcher;
