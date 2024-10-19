import React from 'react';
import Tooltip from '@mui/material/Tooltip';

interface CustomTooltipProps {
    title: any;
    children: any;
    width?: string | number;
}
const CustomTooltip: React.FC<CustomTooltipProps> = ({ title, children, width }) => {
    return (
        <Tooltip
            title={title}
            PopperProps={{
                sx: {
                    "& .MuiTooltip-tooltip": {
                        padding: '10px',
                        maxWidth: width,
                        backgroundColor: 'white',
                        color: 'black',
                        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
                    },
                },
            }}
        >
            {children}
        </Tooltip>
    );
};

export default CustomTooltip;
