import ProductCard from "./components/ProductCard";
import MainTemplate from "./template/MainTemplate";
import { Container, Grid } from "@mui/material";

const App = () => (
    <>
        <MainTemplate>
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
        </MainTemplate>
    </>
);
export default App;
