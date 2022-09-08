import ProductCard from "./components/ProductCard";
import MainTemplate from "./template/MainTemplate";
import { Container, Grid } from "@mui/material";

const App = () => (
    <>
        <MainTemplate>
            <Container>
                <Grid container spacing={{mobile: 1, tablet: 4}}>
                    <Grid item mobile={12} tablet={8}>
                        <ProductCard />
                    </Grid>
                    <Grid item mobile={6} tablet={4}>
                        <ProductCard />
                    </Grid>
                    <Grid item mobile={6} tablet={4}>
                        <ProductCard />
                    </Grid>
                    <Grid item mobile={6} tablet={4}>
                        <ProductCard />
                    </Grid>
                    <Grid item mobile={6} tablet={4}>
                        <ProductCard />
                    </Grid>
                </Grid>
            </Container>
        </MainTemplate>
    </>
);
export default App;
