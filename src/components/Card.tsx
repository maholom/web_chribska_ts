import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useIntl } from 'react-intl';
import headliner_innen_1 from '../pages/homefoto/headliner_innen_1.jpg';

const MediaCard = () => {
  const intl = useIntl();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={headliner_innen_1}
        alt="photo-card"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {intl.formatMessage({
            id: 'contact-pricelist-weekend',
          })}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {intl.formatMessage({
            id: 'contact-pricelist-weekend-text',
          })}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
