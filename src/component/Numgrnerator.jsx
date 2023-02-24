import React from 'react'
import './Numgrnerator.css'
const Numgrnerator = () => {

    const checkprime=(n) =>{
        if (n <= 1)
        return false;
  
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
  
    return true;
        
    }

    return (
        <div className='Numgrnerator'>
            {
                Array(32).fill("").map((e, i) => {
                    return (
                        <div className='box' style={
                            {
                                border: "1px solid white",
                                height: "100px",
                                width: "100px",
                                backgroundColor: checkprime(i) ? "#fd5d52" : i % 2 == 0 ? "#21bf73" : "#fddb3a",
                            }
                        } >
                            {i}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Numgrnerator;