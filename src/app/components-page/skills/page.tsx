import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import Image from "next/image";
import html from "../../../../public/html-icon-3d-rendering-illustration-vector (1).jpg"
import css from "../../../../public/css.png"
import typescript from "../../../../public/typescript.png"
import next_js from "../../../../public/nextjs.png"


const Data  = [
    {
        title:"HTML",
        CardHeader:"HTML (HyperText Markup Language",
        image: html,
    },
    {
        title:"CSS",
        CardHeader :"CSS is used to define styles for your web pages,",
        image:css
    },
    {
        title:"Typescript",
        CardHeader:"TypeScript allows specifying the types of data being passed around within the code.",
        image:typescript
    },
    {
        title:"Next.js",
        CardHeader : "Next.js is a React framework that helps developers build web applications",
        image:next_js
    }
]



export default function Skills(){
    return(
        <main className=" ">
            <br className=" md:hidden"/>
            <br className=" md:hidden"/>
            <br className=" md:hidden"/>
            <br className=" md:hidden"/>
            <br className=" md:hidden"/>
            <br className=" md:hidden"/>
            <div className=" flex justify-evenly max-sm:block max-sm:h-fit  max-sm:w-[500px] ">
            {Data.map((data)=>(
                <Card className="card  bounce-in-top h-[400px] w-[500px] m-7 max-sm:block max-sm:h-[250px] max-sm:w-[250px] max-sm:ml-20">
                    <Image src={data.image} alt="image" className="h-[300px] w-[300px] mix-blend-plus-darker rounded max-sm:h-[200px] max-sm:w-[200px] max-sm:ml-5"></Image>
                    <CardHeader className="text-center font-bold text-black text-2xl max-sm:text-center max-sm:font-bold max-sm:text-xl max-sm:p-4">{data.title}</CardHeader>
                </Card>
            ))}
            <br className="md:hidden"/>
            <br className="md:hidden"/>
            <br className="md:hidden"/>
            </div>
        </main>
    )
}


