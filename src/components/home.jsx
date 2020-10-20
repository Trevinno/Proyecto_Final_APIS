import React from 'react';




const Homepage = () => {

    console.log('this is a way too see how the website works')
    return (  
        <React.Fragment>
        <div className='first'>
            <p className='alert-primary'>This is a test to see if it works</p>

            <p className='badge'>This is a badge</p>

            <button className='btn btn-light'>This is a button</button>

            <container className='card'>Test 123 </container>

            <p>This is another tag</p>

            <container>This is the conitainer tag</container>

            <container></container>
        </div>
        </React.Fragment>
    );
}
 
export default Homepage;