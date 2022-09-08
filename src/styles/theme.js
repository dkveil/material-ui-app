import { createTheme } from "@mui/material"

export const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "caption"
                    },
                    style: {
                        fontSize: 11
                    }
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 50
                    }
                }
            ]
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1280
        }
    }
})