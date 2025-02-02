import { useEffect, useState } from "react";
import Select from "./Select";


export default function Form() {

    const [selected, setSelected] = useState()
    useEffect(()=>{
        console.log("Selected", selected);
    },[selected])

    const handleChange = (e:any) => {
        const { name, value, checked, type } = e.target;
        setSelected(prevState => ({
          ...prevState,
          [name]: type === "checkbox" ? checked : value,
        }));
      };

    const options = [
        { label: 'AAAA', id: 1 },
        { label: 'BBBB', id: 2 },
        { label: 'CCCC', id: 3 },
        { label: 'DDDD', id: 4 },
      ];

      // or
    //const options = ['The Godfather', 'Pulp Fiction'];


    return (
        <div>
            {/* Select */}
            
            <Select options={options} onChange={handleChange}/>
        </div>
    )
}
