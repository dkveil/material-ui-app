import { ProductCard } from "./components/";
import MainTemplate from "./template/MainTemplate";
import { Container, Grid } from "@mui/material";
import productsList from './data/items.json'

const App = () => (
    <>
        <MainTemplate>
            {console.log()}
            <Container>
                <Grid container spacing={{ mobile: 1, tablet: 4 }}>
                    <Grid item mobile={12} tablet={8}>
                        <ProductCard
                            name={productsList[0].name}
                            image={productsList[0].image}
                        />
                    </Grid>
                    {productsList.slice(1, 5).map((product) => (
                        <Grid item mobile={6} tablet={4} key={product.id}>
                            <ProductCard
                                name={product.name}
                                image={product.image}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </MainTemplate>
    </>
);
export default App;
