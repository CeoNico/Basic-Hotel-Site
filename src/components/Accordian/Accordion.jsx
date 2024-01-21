"use client";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { HiArrowNarrowDown } from "react-icons/hi";

const AccordianContext = createContext();


const Accordion = ({ children, value, onChange, ...props }) => {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
};

export default Accordion;

export function AccordianItem({ children, value, trigger, ...props }) {
  const {selected, setSelected} = useContext(AccordianContext)
  const open = selected === value;

  const ref = useRef(null)

  return (
    <li className="border-b border-slate-900" {...props}>
      <header
        className="flex justify-between items-center p-4 font-medium text-xl"
        role="button "
        onClick={() => setSelected(open ? null : value)}
      >
        {trigger}
        <HiArrowNarrowDown size={15} className={`transition-transform ${open ? " rotate-180" : ""}`} />
      </header>
      <div className="overflow-y-hidden transition-all" style={{height: open ? ref.current?.offsetHeight || 0 : 0}}>
        <div className="pt-2 p-4" ref={ref}>{children}</div>
      </div>
    </li>
  );
}

