import React from 'react';
import {Badge} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


const NotificationBell = ({iconColor, badgeContent}) => {
  const newNotificationMessage = `You have ${badgeContent} message`;
  const noNotNotifications = 'No new notifications';

  return (
    <Tooltip title={badgeContent ? newNotificationMessage : noNotNotifications}>
      <IconButton color={iconColor}>
        <Badge color="error" badgeContent={badgeContent}>
          <NotificationsIcon/>
        </Badge>
      </IconButton>
    </Tooltip>
  )
};

export default NotificationBell;
