import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function NavList() {

  const navList = [
    { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/' },
    { id: 2, name: 'Archives', icon: <Archive />, route: '/archive' },
    { id: 3, name: 'Trash', icon: <Delete />, route: '/delete' },
  ]

  return (
    <List>
      {navList.map((text) => (
            <ListItem key={text.id}>
              <Link to={`${text.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}>
                <ListItemIcon style={{ alignItems: 'center'}}>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.name} />
                </Link>
            </ListItem>
          ))}
    </List>
  )
}

export default NavList
