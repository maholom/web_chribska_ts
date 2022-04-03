import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import React from 'react';
import { useIntl } from 'react-intl';

interface LanguageSwitcherNeuProps {
  onChangeLanguage: (locale: string) => void;
}

const LanguageSwitcherNeu: React.FC<LanguageSwitcherNeuProps> = ({
  onChangeLanguage,
}) => {
  const intl = useIntl();

  return (
    <>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab
          onClick={() => onChangeLanguage('cs')}
          value="cs"
          color="primary"
          aria-label="cesky"
        >
          <div>CZ</div>
        </Fab>
        <Fab
          onClick={() => onChangeLanguage('de')}
          value="de"
          color="primary"
          aria-label="deutch"
        >
          <div>DE</div>
        </Fab>
      </Box>
    </>
  );
};

export default LanguageSwitcherNeu;
