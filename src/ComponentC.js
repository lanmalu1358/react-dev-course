import React from 'react'

const ComponentC = (props) => {
    const backpage = () => {
        props.history.push('/componentb')
    }
    return (
        <>
            <div>ComponentC</div>
            <button onClick={backpage}>ComponentBへ戻る</button>
        </>
    )
}

export default ComponentC;