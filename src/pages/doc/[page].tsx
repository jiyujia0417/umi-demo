import React from 'react'
const page = (props) => {
    console.log(props.match);
    return (
        <div>
            动态路由
            {props.match.params.page}
        </div>
    )
}
export default page
