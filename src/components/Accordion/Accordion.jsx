import React, { useMemo, useState } from "react";
import './Accordion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Accordion = () => {
    const [active, setActive] = useState(null);
    const accordionItems = useMemo(() => {
        return [
            {
                key: 'accordion1',
                title: "Accordion 1",
                value: "Accordion Value 1",
            },
            {
                key: 'accordion2',
                title: "Accordion 2",
                value: "Accordion Value 2",
            },
            {
                key: 'accordion3',
                title: "Accordion 3",
                value: "Accordion Value 3",
            },
            {
                key: 'accordion4',
                title: "Accordion 4",
                value: "Accordion Value 4",
            },
        ];
    }, []);
    return (
        <div >
            <h2>Accordion</h2>
            <div className="accordion-container">
                {accordionItems.length
                    ? accordionItems.map((item) => <div key={item.key}>
                        <div className="accordion-title" onClick={() => setActive(active === item.key ? null : item.key)}>
                            <span>{item.title}</span>
                            <FontAwesomeIcon icon={active === item.key ? faChevronUp : faChevronDown} />
                        </div>
                        {active === item.key && <div className="accordion-value">{item.value}</div>}
                    </div>)
                    : "No Item"}
            </div>
        </div>
    );
};

export default Accordion;
