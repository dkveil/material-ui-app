import { Paper, Skeleton } from '@mui/material'

const LoadingCard = () => {
    return (
        <Paper elevation={8} ssx={{height: 10}}>
            <Skeleton animation="wave" height="21.75rem" width="100%" ssx={{
                marginTop: 0, marginBottom: 'auto'
            }}/>
        </Paper>
    )
}

export default LoadingCard