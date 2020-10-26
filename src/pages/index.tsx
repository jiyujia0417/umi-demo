import React from 'react';
import styles from './index.less';
import {history,connect} from 'umi';

const Home = (props: { username: React.ReactNode; dispatch: (arg0: { type: string; username: string; }) => void; }) => {
  // fetch('/api/tags')
  // .then(res=>res.json())
  // .then(res=>console.log(res))
  return (
    <div>
      <h1 className={styles.title}>
        Page index
        <button onClick={
          ()=>history.push('/cart')
        }>to Cart</button>

        <h1>{props.username}</h1>
        <button
          onClick={()=>{
            props.dispatch({
              type:'index/save',
              username:'hello'
            })
          }}
        >更新Name</button>
      </h1>
    </div>
  );
}
const mapStateToProps = (state: { index: { name: any; }; })=>({
  username: state.index.name
})
export default connect(mapStateToProps)(Home);