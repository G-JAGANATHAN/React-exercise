import { useState, useRef } from "react";

const FocusName = () => {
    const [name, setName] = useState('');
    const nameRef = useRef(null);
    

    const handleFocus = () => {
        nameRef.current.focus();
      };
    return(
        <div >
            <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(event) => setName(event.target.value)}
            ref={nameRef}
            />
            <button onClick={handleFocus}>Focus Input</button>
            <button>submit</button>
        </div>
    );
};

export default FocusName;