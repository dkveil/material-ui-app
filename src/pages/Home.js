import React from "react";
import { Container, Grid } from "@mui/material";
import productsList from '../data/items.json'
import { LoadingCard, ProductCard } from "../components";

const Home = () => {

    const [loading, setLoading] = React.useState(true)

    return (
        <Container maxWidth="lg">
            <Grid container spacing={{ mobile: 1, tablet: 4 }}>
                <Grid item mobile={12} tablet={8}>
                    {loading ? (
                        <LoadingCard />
                    ) : (
                        <ProductCard
                            name={productsList[0].name}
                            image={productsList[0].image}
                            category={productsList[0].category}
                            rate={productsList[0].rate}
                            opinions={productsList[0].opinions}
                            price={productsList[0].price}
                        />
                    )}
                </Grid>
                {loading ? (
                    <Grid item mobile={12} tablet={4}>
                        <LoadingCard />
                    </Grid>
                ) : (
                    <>
                        {productsList.slice(1, 5).map((product) => (
                            <Grid item mobile={6} tablet={4} key={product.id}>
                                <ProductCard
                                    name={product.name}
                                    image={product.image}
                                    category={product.category}
                                    rate={product.rate}
                                    opinions={product.opinions}
                                    price={product.price}
                                />
                            </Grid>
                        ))}
                    </>
                )}
            </Grid>
        </Container>
    );
};

export default Home;