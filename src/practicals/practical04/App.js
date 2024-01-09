// import React, { useState } from 'react';
// import './Style.css'; // Import the CSS file

// const Accordion = () => {
//   const [isAccordionOpen, setAccordionOpen] = useState(false);

//   const toggleAccordion = () => {
//     setAccordionOpen(!isAccordionOpen);
//   };

//   return (
//     <div className={`accordion ${isAccordionOpen ? 'open' : ''}`}>
//       <h1>Practical 4 Accordition</h1>
//       <div className="accordion-header" onClick={toggleAccordion}>
//         <h3>Accordion Header</h3>
//       </div>
//       {isAccordionOpen && (
//         <div className="accordion-content">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
//             tellus nec nulla suscipit volutpat in eget elit.
//           </p>
//         </div>
        
//       )}

      

      
//     </div>
//   );
// };

// export default Accordion;



import React from 'react';
import Accordion from './Accordion';
import './Style.css'; // Import the CSS file
import { accordionData } from './content';

const App = () => {
  return (
    <div>
      <h1>React Accordion</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;