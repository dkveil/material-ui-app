import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import productsList from '../data/items.json'
import { LoadingCard, ProductCard } from "../components";

const Home = () => {

    const [products, setProducts] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        const abortCont = new AbortController()

        setTimeout(() => {
            fetch('./data/items.json', {
                signal: abortCont.signal
            })
            .then(res => {
                if(!res.ok) {
                    throw Error('error')
                }
                return res.json()
            })
            .then(data => {
                setProducts(data)
                setLoading(false)
                setError(null)
            })
            .catch(error => {
                if(!error.name === 'AbortError'){
                    setLoading(false)
                    setError(error.message)
                }
            })
        }, 1000)

        return () => abortCont.abort()
    }, [])

    return (
        <Container maxWidth="lg">
            <Grid container spacing={{ mobile: 1, tablet: 4 }}>
                <Grid item mobile={12} tablet={8}>
                    {loading && <LoadingCard /> }
                    {(!loading && !error) && (
                        <ProductCard
                            name={products[0].name}
                            image={products[0].image}
                            category={products[0].category}
                            rate={products[0].rate}
                            opinions={products[0].opinions}
                            price={products[0].price}
                        />
                    )}
                    {error && <Typography variant="h1">{error}</Typography>}
                </Grid>
                {loading && (
                    <Grid item mobile={12} tablet={4}>
                        <LoadingCard />
                    </Grid>
                )}
                {(!loading && !error) && (
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