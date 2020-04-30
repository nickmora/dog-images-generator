import { makeStyles } from "@material-ui/styles";


const mainStyle = makeStyles(() => ({
    Footer: {
        marginTop: 200,
        backgroundColor: "#3f51b5",
        position: "static",
        "& p": {
            color: "#fff"
        },
        "& a:link": {
            color: "pink",
            textDecoration: "none",
            cursor: "auto",
        },
        "& a:visited": {
            color: "red",
            cursor: "auto",
        },
        "& a:link:active": {
            color: "black",
        },
        "& a:visited:active": {
            color: "black",
        }
    },
    
}))

export default mainStyle