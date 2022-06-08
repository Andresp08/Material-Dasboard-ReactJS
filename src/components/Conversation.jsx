
import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from '@mui/material'
import React from 'react'
import { conversations } from '../constants/conversations'

const Conversation = () => {


    return (
        <List 
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
            {conversations.map(item => (
                <ListItem alignItems="flex-start" key={item.id}>
                    <ListItemAvatar>
                        <Avatar alt={item.alt} src={item.img} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {item.alt}
                                </Typography>
                                {`"${item.message}"`}
                            </React.Fragment>
                        }
                    />
                    <Divider variant="inset" component="li" />
                </ListItem>
            ))}
        </List>
    )
}

export default Conversation