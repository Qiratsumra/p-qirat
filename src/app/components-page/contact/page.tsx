import { Button } from "@/components/ui/button" 
 export default function ContactForm(){
    return(
        <>
        <br className="md:hidden"/>
        <br className="md:hidden"/>
        <br className="md:hidden"/>
        <div className="flex justify-evenly max-sm:block"> 
            <div className="mt-20 ml-20 font-serif text-violet-700">
                <h1 className="text-4xl font-bold leading-loose max-sm:text-2xl">Let's chat.
                    <br />
                    Tell me about your
                    <br />
                    project
                </h1>
            </div>
            <div className="h-[500px] w-[500px] mt-10 border-2 mr-9 rounded bounce-in-top card max-sm:h-[400px] max-sm:w-[300px] max-sm:mt-5 max-sm:ml-10">
                <form action="" className="">
                    <h1 className="text-4xl m-10 text-center font-serif text-violet-600 font-bold max-sm:text-2xl max-sm:m-5 max-sm:text-center">Send me a message</h1>
                    <input type="text" placeholder="Enter your name" className="ml-20 border-2 h-[30px] w-[350px] m-3 p-3 rounded-md max-sm:ml-10 max-sm:p-2 max-sm:border-2 max-sm:h-[20px] max-sm:w-[200px]"/>
                    <br />
                    <input type="email" placeholder="Enter your email" className="ml-20 border-2 h-[30px] w-[350px] m-3 p-3 rounded-md max-sm:ml-10 max-sm:p-2 max-sm:border-2 max-sm:h-[20px] max-sm:w-[200px]"/>
                    <br />
                    <input type="tel" placeholder="Enter your number" className="ml-20 border-2 h-[30px] w-[350px] m-5 p-3 rounded-md max-sm:ml-10 max-sm:p-2 max-sm:border-2 max-sm:h-[20px] max-sm:w-[200px]"/>
                    <br />
                    <textarea name="question" id="question" placeholder="Any Questions?" className="ml-20 border-2 resize-none h-[40px] w-[350px] m-3 p-2 rounded-md max-sm:ml-10 max-sm:resize-none max-sm:h-[40px] max-sm:w-[200px]"></textarea>
                    <Button className="bg-violet-600 hover:bg-violet-800 ml-48 mt-3 max-sm:mt-3 max-sm:ml-16">Send Message</Button>
                </form>
            </div>
        </div>
        </>
    )
 }