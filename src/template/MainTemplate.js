import { ThemeProvider } from "@emotion/react"
import { CssBaseline, Container } from "@mui/material"
import { theme } from './../styles/theme';
import { SearchAppBar } from "../components";

const MainTemplate = ({children}) => {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <SearchAppBar />
                <main>
                    <Container sx={{
                        paddingY: 10
                    }}>
                        {children}
                    </Container>
                </main>
            </ThemeProvider>
        </>
    )
}

export default MainTemplate