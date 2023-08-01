import React, { useState } from "react";
import { Facebook, Fullscreen, Instagram, Telegram, WhatsApp } from "@mui/icons-material";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
interface ProfileCardProps {
  name: string;
  lastname: string;
  phone: string;
  email: string;
  socialMedia: React.ReactNode[];
}


const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  lastname,
  phone,
  email,
  socialMedia,
}) => {
  const [socialMediaLinks, setSocialMediaLinks] = useState<React.ReactNode[]>([]);
  const handleSocialMediaClick = (icon: React.ReactNode) => {
    setSocialMediaLinks((prevLinks) => {
      if (prevLinks.includes(icon)) {
        return prevLinks.filter((link) => link !== icon);
      } else {
        return [...prevLinks, icon];
      }
    });
  };
  return (
    <Box sx={{ width: "100%", border: "solid 1px red", display: "flex", justifyContent: "center" }} >
      <Avatar src="https://i.pravatar.cc/120?img=1" sx={{ width: 76, height: 76 }} alt="Remy Sharp" />
      <Typography variant="h5">
        {name} {lastname}
      </Typography>
      <Typography variant="body1">{phone}</Typography>
      <Typography variant="body1">{email}</Typography>
      <div>
        {socialMedia.map((icon, index) => (
          <IconButton
            key={index}
            onClick={() => handleSocialMediaClick(icon)}
          >
            {icon}
          </IconButton>
        ))}
      </div>
    </Box>
  );
};
export default ProfileCard;