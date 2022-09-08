import './ProductCard.styles.css'
import { Paper, Typography } from '@mui/material'

const ProductCard = ({name, image}) => {
    return (
        <Paper elevation={8}>
            <img
                src={image}
                alt={name}
            />
            <Typography variant='h6' component='h2'>
                {name}
            </Typography>
        </Paper>
    )
}

export default ProductCard;