import React from 'react'
import {Link} from 'umi'
export default (props) => {
    return <div style={{ padding: 20 }}>
        <Link to='/'>首页</Link>
        <Link to='/cart'>购物车</Link>
        <Link to='/shoucang'>收藏</Link>
        { props.children }
    </div>;
}
