import WebContactHome from "../contact/WebContactHome"
import WebCommonBanner from "../WebCommonBanner"
import WebAll from "./WebAll"
import WebPlan from "./WebServices"

const WebSub = () =>{
    return(
        <>
            <WebCommonBanner />
            <WebAll />
            <WebPlan />
            <WebContactHome />
        </>
    )
}
export default WebSub