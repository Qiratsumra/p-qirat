import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import calculator from "../../../../public/calculator.jpg"
import todolist from "../../../../public/todolist.png"
import quiz from "../../../../public/bvt06d5d.png"
import advanture from "../../../../public/pngtree-adventure-game-in-3d-iconic-style-picture-image_4047388.jpg"
import countdown from "../../../../public/countdowntimer.png"
import Numberguessing from "../../../../public/images (1).jpeg"
import { title } from "process";


const data1 =[
    {
        title:"Calculator",
        contact:"npm i qs-calculator",
        image:calculator
    },
    {
        title:"TODO List",
        contact:"npm i todo-list-qs",
        image:todolist
    },
    {
        title:"Quiz APP",
        contact:"npm i ts-quiz-qs",
        image:quiz
    }
];

const data2 =[
    {
        title:"Countdowm Timer",
        contact :"npm i count-down-qs",
        image:countdown
    },
    {
        title:"Adventure Game",
        contact:"npm i adventure_game-qs",
        image:advanture
    },
    {
        title:"Number Guessing",
        contact:"",
        image:Numberguessing
    }
]


export default function Projects(){
    return(
        <div>
            <br className="md:hidden"/>
            <br className="md:hidden"/>
            <br className="md:hidden"/>
            <br className="md:hidden"/>
            <br className="md:hidden"/>
            <br className="md:hidden"/>
            <br className="md:hidden"/>
            <br className="md:hidden"/>
            <div >
           <div className="flex justify-evenly m-5 max-sm:block">
          {data1.map((data)=>(
             <Card className="shadow-drop-2-center max-sm:m-5 bounce-in-top">
             <Image src={data.image} alt="Calculator" className="h-[200px] w-[250px] rounded-md max-sm:w-[300px]"></Image> 
             <CardHeader>{data.title}</CardHeader>
             <CardContent className="flex ">{data.contact} </CardContent>
          </Card>
          ))}
            </div>
            <div className="flex justify-evenly m-5 max-sm:block">            
          {data2.map((data)=>(
              <Card className="shadow-drop-2-center max-sm:m-5 bounce-in-top">
              <Image src={data.image} alt="" className="h-[200px] w-[250px] rounded-md "></Image>
              <CardHeader>{data.title}</CardHeader>
              <CardContent>{data.contact}</CardContent>
          </Card>
          ))}
           </div>
           </div>
        </div>
    )
}