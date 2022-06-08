import { 
    Avatar,
    AvatarGroup,
    Box, 
    ImageList, 
    ImageListItem, 
    Typography 
} from '@mui/material'
import React from 'react'
import { onlineFriends } from '../constants/onlineFriends'
import { listImage } from '../constants/listImage'
import Conversation from './Conversation'

const Rightbar = () => {

    return (
        <Box
            flex={2}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box position='fixed' width={300}>
                <Typography
                    variant='h6'
                    fontWeight={300}
                >
                    Online Friends
                </Typography>

                {/*Render online friends*/}
                <AvatarGroup max={6}>
                    {onlineFriends.map(friends => (
                        <Avatar
                            key={friends.id}
                            alt={friends.alt}
                            src={friends.img}
                        />
                    ))}
                </AvatarGroup>

                <Typography
                    sx={{ marginTop: 3, marginBottom: 1 }}
                    variant='h6'
                    fontWeight={300}
                >
                    Latest Photos
                </Typography>

                {/*Render listImage*/}
                <ImageList cols={2} rowHeight={100} gap={5}>
                    {listImage.map((item) => (
                        <ImageListItem key={item.id}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                alt={item.alt}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

                <Typography
                    sx={{ marginTop: 3, marginBottom: 1 }}
                    variant='h6'
                    fontWeight={300}
                >
                    Latest Conversations
                </Typography>

                {/*Render conversations*/}
                <Conversation />
            </Box>
        </Box>
    )
}

export default Rightbar