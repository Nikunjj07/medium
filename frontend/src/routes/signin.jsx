import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { Input } from "../components/Input"
import { SubHead } from "../components/SubHead"

export const Signin  = ()=>{
    return <div className="flex flex-row">
        
        <div className="w-2/4 h-screen flex flex-col items-center justify-center">
            <Heading label={"Sign In"}/>
            <SubHead label={"Don't have an account?"}/>
            <Input label={"Username"} placeholder={"Enter your username"}/>
            <Input label={"Password"} placeholder={""}/>
            <Button label={"SignIn"}/>
        </div>

        <div className="w-2/4 bg-slate-100 flex justify-center items-center">
            <div className="w-3/4">
                <Heading label={'"The customer service I received was exceptional. The support team went above and beyond to address my concerns."'}/>
                <div className="flex flex-col mt-4  ">
                    <span className="text-xl font-bold">Jules Winnfield</span>
                    <span className="text-gray-500">CEO, Acme Inc</span>
                </div>
            </div>
            
        </div>
    </div>
}
