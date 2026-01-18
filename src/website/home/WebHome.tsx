import WebAboutHome from "../about/WebAboutHome"
import WebContactHome from "../contact/WebContactHome"
import WebMap from "../contact/WebMap"
import WebPlan from "../plan/WebServices"
import WebBanner from "./WebBanner"
import WebJoin from "./WebJoin"
import WebTestiMobile from "./WebTestiMobile"
import WebTesti from "./WebTestimonal"
import WebTestiTab from "./WebTestiTab"

const WebHome = () =>{
    return(
        <>
            <WebBanner />
            <WebAboutHome />
            <WebPlan />
            <WebTesti />
            <WebTestiTab />
            <WebTestiMobile />
            <WebJoin />
            <WebMap />
            <WebContactHome />
        </>
    )
}
export default WebHome