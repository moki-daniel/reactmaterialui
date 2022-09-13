
import React from 'react'
import { AppBar, Badge, Grid, IconButton, InputBase, ThemeProvider, Toolbar} from '@mui/material'
import { makeStyles } from '@mui/styles'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles(theme => ({
    root: {
    backgroundColor: '#fff',
    },
    searchInput: {
        opacity:'0.6',
        padding: `0px &{theme.spacing(1)px}`,
        fontSize: '2rem',
        '&:hover': {
            backgroundColor:'red'

        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }
}))

const Header = () => {
     const classes = useStyles();
  return (
    <div>
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container>
                    <Grid>
                        <InputBase
                        placeholder='Search Topics'
                        className={classes.searchInput}
                        startAdornment={<SearchIcon fontSize='small'/>}

                         />
                    </Grid>
                    <Grid item sm >

                    </Grid>
                    <Grid>
                        <IconButton>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color='primary'>
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                                <PowerSettingsNewIcon />
                        </IconButton>

                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header