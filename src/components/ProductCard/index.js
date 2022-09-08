import React from 'react';
import { Link } from 'react-router-dom'
import { Paper, Typography, Box, Rating } from '@mui/material'
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import { formatCurrency } from '../../utils/formatCurrency';

const ProductCard = ({name, image, category, rate, opinions, price}) => {
    return (
        <Paper elevation={8}>
            <Link to={`/${name}`} style={{ all: "unset", cursor: "pointer" }}>
                <img className="productcard__img" src={image} alt={name} />
            </Link>
            <Box paddingX={1}>
                <Typography variant="h6" component="h2">
                    <Link
                        to={`/${name}`}
                        style={{ all: "unset", cursor: "pointer" }}
                    >
                        {name}
                    </Link>
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                    }}
                >
                    <ClassOutlinedIcon
                        sx={{
                            width: 16,
                        }}
                    />
                    <Typography variant="caption" component="p">
                        {category}
                    </Typography>
                </Box>
                <Box
                    mt={1}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Rating
                        size="small"
                        value={rate}
                        readOnly
                        precision={0.5}
                    />
                    <Typography variant="body2" component="p" ml={0.5}>
                        {rate}
                    </Typography>
                    <Typography variant="caption" component="p" ml={2}>
                        ({opinions} opinions)
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6" component="h3" mt={0}>
                        {formatCurrency(price, "EUR")}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
}

export default ProductCard;