import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signup = () => {
    return (
        <div className="grid grid-cols-2">
            <div><Auth></Auth></div>
            <div className="hidden md:block"><Quote></Quote></div>
        </div>
    )
}
