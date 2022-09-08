import { Container, Typography, Box, Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Accordian, ImageCollage, Modal } from "../components";

const itemData = [
    {
        img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
        title: "Bed",
    },
    {
        img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
        title: "Books",
    },
    {
        img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
        title: "Sink",
    },
    {
        img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
        title: "Kitchen",
    },
    {
        img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
        title: "Blinds",
    },
    {
        img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
        title: "Chairs",
    },
    {
        img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
        title: "Laptop",
    },
    {
        img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
        title: "Doors",
    },
    {
        img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
        title: "Coffee",
    },
    {
        img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
        title: "Storage",
    },
    {
        img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
        title: "Candle",
    },
    {
        img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
        title: "Coffee table",
    },
];


const Product = () => {
    return (
        <Container maxWidth="laptop">
            <Typography variant="h3" component="h1" marginTop={3}>
                Product name
            </Typography>
            <Box marginTop={3} sx={{ display: "flex", gap: 1 }}>
                <img
                    src="https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="product name"
                    height={325}
                />
                <ImageCollage itemData={itemData} />
            </Box>
            <Box mt={3}>
                <Typography variant="h6" component="h4">
                    About this product:
                </Typography>
                <Typography variant="paragraph" component="p" mt={3}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Obcaecati quam dolorum, sunt in consectetur nemo similique,
                    facere corporis officiis earum autem consequatur odio
                    nesciunt deleniti dolorem. Vitae excepturi saepe vero
                    temporibus, odio possimus aliquid recusandae maxime laborum
                    pariatur, consectetur tempore?
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
                sx={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 60 }}
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
        </Container>
    );
}

export default Product;