import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    Collapse,
    IconButton,
    Typography
} from '@mui/material'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { userInfo } from '../constants/userInfo';

const Post = () => {
    return (
        userInfo.map(info => (
            <Card
                key={info.id}
                sx={{margin: 5}}
            >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                            {info.fistLetter}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title={info.title}
                    subheader={info.date}
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image={info.img}
                    alt={info.title}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {info.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite sx={{ color: 'red' }} />}
                        />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                </CardActions>
            </Card>
        ))

    )
}

export default Post