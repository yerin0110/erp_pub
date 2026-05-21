'use client';

import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "lucide-react";

export default function Page(){

    const [date, setDate] = useState(new Date())

    return(

        <>
            <Calendar
                size={100}
                color="#0055ff"
            />
        </>

        // <div>
        //     <Popover>
        //         <PopoverTrigger asChild>
        //             <Button variant="outline">Open Popover</Button>
        //         </PopoverTrigger>
        //         <PopoverContent>
                    
        //             <Calendar
        //                 mode="single"
        //                 selected={date}
        //                 onSelect={setDate}
        //                 className="rounded-lg border"
        //                 captionLayout="dropdown"
        //             />

        //             {/* <PopoverHeader>
        //                 <PopoverTitle>Title</PopoverTitle>
        //                 <PopoverDescription>Description text here.</PopoverDescription>
        //             </PopoverHeader> */}

        //         </PopoverContent>
        //     </Popover>
        // </div>
    )
}