import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useIntl } from 'react-intl';

//interface, props
interface MediaCardProps {
  image: string;
  intlKey: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ image, intlKey }) => {
  const intl = useIntl();
  return (
    <Card sx={{ maxWidth: 345, mr: 1, mb: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={intl.formatMessage({
          id: `${intlKey}-image`,
        })}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {intl.formatMessage({
            id: intlKey,
          })}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {intl.formatMessage({
            id: `${intlKey}-text`,
          })}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
