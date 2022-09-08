import React from "react";
import { useParams } from "react-router-dom";
import {
    Container,
    Typography,
    Box,
    Paper,
    BottomNavigation,
} from "@mui/material";
import { Accordian, ImageCollage, Modal } from "../components";
import LoadingCard from './../components/LoadingCard/index';

const itemData = [

];

const Product = () => {

    const { id } = useParams()

    const [product, setProduct] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch("./data/items.json", {
                signal: abortCont.signal,
            })
                .then((res) => {
                    if (!res.ok) {
                        throw Error("error");
                    }
                    return res.json();
                })
                .then((data) => {
                    setProduct(data?.find((item) => item.name === id));
                    setLoading(false);
                    setError(null)
                })
                .catch((error) => {
                    if (!error.name === "AbortError") {
                        setLoading(false);
                        setError(error.message);
                    }
                });
        }, 1000);

        return () => abortCont.abort();
    }, []);


    return (
        <Container maxWidth="laptop">
            {loading && <LoadingCard />}
            {(!loading && !error) && (
                <>
                    <Typography variant="h3" component="h1" marginTop={3}>
                        {product.name}
                    </Typography>
                    <Box marginTop={3} sx={{ display: "flex", gap: 1 }}>
                        <img
                            src={product.image}
                            alt={product.name}
                            height={325}
                        />
                        <ImageCollage
                            itemData={[
                                {
                                    img: product.image,
                                    title: `product.name 1`,
                                },
                                {
                                    img: product.image,
                                    title: `product.name 2`,
                                },
                                {
                                    img: product.image,
                                    title: `product.name 3`,
                                },
                                {
                                    img: product.image,
                                    title: `product.name 4`,
                                },
                                {
                                    img: product.image,
                                    title: `product.name 5`,
                                },
                                {
                                    img: product.image,
                                    title: `product.name 6`,
                                },
                                {
                                    img: product.image,
                                    title: `product.name 7`,
                                },
                                {
                                    img: product.image,
                                    title: `product.name 8`,
                                },
                            ]}
                        />
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6" component="h4">
                            About this product:
                        </Typography>
                        <Typography variant="paragraph" component="p" mt={3}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Obcaecati quam dolorum, sunt in consectetur
                            nemo similique, facere corporis officiis earum autem
                            consequatur odio nesciunt deleniti dolorem. Vitae
                            excepturi saepe vero temporibus, odio possimus
                            aliquid recusandae maxime laborum pariatur,
                            consectetur tempore?
                        </Typography>
                    </Box>
                    <Box mt={3} mb={10}>
                        <Typography variant="h6" component="h4" mb={3}>
                            FAQ
                        </Typography>
                        <Accordian />
                    </Box>
                    <Paper
                        elevation={12}
                        sx={{
                            position: "fixed",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: 60,
                        }}
                    >
                        <BottomNavigation
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                height: "100%",
                            }}
                        >
                            <Modal />
                        </BottomNavigation>
                    </Paper>
                </>
            )}
            {error && (
                <Typography variant="h2" textAlign="center">
                    Product not found
                </Typography>
            )}
        </Container>
    );
};

export default Product;
