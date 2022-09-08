import ProductCard from "./components/ProductCard";
import { Container, Grid } from "@mui/material";

const App = () => (
    <div>
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    <ProductCard />
                </Grid>
                <Grid item xs={4}>
                    <ProductCard />
                </Grid>
                <Grid item xs={4}>
                    <ProductCard />
                </Grid>
                <Grid item xs={4}>
                    <ProductCard />
                </Grid>
                <Grid item xs={4}>
                    <ProductCard />
                </Grid>
            </Grid>
        </Container>
    </div>
);
export default App;
