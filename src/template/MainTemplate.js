import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { theme } from './../styles/theme';

const MainTemplate = ({children}) => {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <main>
                    {children}
                </main>
            </ThemeProvider>
        </>
    )
}

export default MainTemplate