import React from 'react';

function Home(props) {
    const name = props.name;
    return (
        <div>
            hello, {name}
        </div>
    );
}

export default Home;