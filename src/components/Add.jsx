import { 
    Avatar, 
    Button, 
    ButtonGroup, 
    Fab, 
    Modal, 
    Stack, 
    TextField, 
    Tooltip, 
    Typography 
} from '@mui/material'

import { Add as AddIcon } from '@mui/icons-material'
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';
import VideoCameraBack from '@mui/icons-material/VideoCameraBack';
import PersonAdd from '@mui/icons-material/PersonAdd';
import DateRange from '@mui/icons-material/DateRange';

import { Box } from '@mui/system'
import styled from '@emotion/styled'

import { useState } from 'react'

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
})

const Add = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Tooltip
                onClick={e=> setOpen(true)}
                title="Add"
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 30 }
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={e=> setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    width={400}
                    height={280}
                    bgcolor='white'
                    p={3}
                    borderRadius={5}
                >
                    <Typography 
                        variant='h6' 
                        color='gray' 
                        textAlign='center'
                    >Create Post</Typography>

                    <UserBox>
                        <Avatar
                            src='https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt='Remy Sharp'
                            sx={{width: 30, height: 30}}
                        />
                        <Typography 
                            fontWeight={500}
                            variant='span'
                        >Remy Sharp</Typography>
                    </UserBox>

                    <TextField
                        id="standard-multiline-static"
                        sx={{width: '100%', marginTop: 1}}
                        multiline
                        rows={4}
                        placeholder = "What's on your mind"
                        variant='standard'
                    />
                    <Stack direction='row' gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='secondary'/>
                        <VideoCameraBack color='success'/>
                        <PersonAdd color='primary'/>
                    </Stack>

                    <ButtonGroup 
                        variant="contained" 
                        fullWidth
                        aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width: '100px'}}> 
                            <DateRange/> 
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add