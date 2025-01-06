// import { createContext, useEffect, useState } from "react";

// const AccordionContext = createContext();

// export default function Accordion({ children, value, onChange, ...props }) {
//   const [selected, setSelected] = useState(value);

//   useEffect(() => {
//     onChange?.(selected);
//   }, [selected]);

//   return (
//     <ul {...props}>
//       <AccordionContext.Provider value={{ selected, setSelected }}>
//         {children}
//       </AccordionContext.Provider>
//     </ul>
//   );
// }

// export function AccordionItem({ children, value, trigger, ...props }) {}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
