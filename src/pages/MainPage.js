import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import {
  Clock,
  ControllPanel,
  CountList,
  SelectCount,
  SelectStorys,
} from '../components';

import {ButtonRemove, ButtonBack, ButtonEdit} from '../components/UI';


const Page = (props) =>{
  return (
    <div className="main-container">
      {props.children}
    </div>
  );
};

const Menu = (props) =>{
  return (
    <div className="menu">
      {/* <BackListBtn/> */}
      {props.children}
      <Clock/>
    </div>

  );
};

const Body = (props) =>{
  return (
    <div className='counters-container'>
      {props.children}
    </div>

  );
};
const Footer = (props) =>{
  return (
    <div>
      {props.children}
    </div>

  );
};

export const MainPage = () =>{
  return (

    <Switch>
      <Route path={'/:id'}>
        <Page>
          <Menu>
            <ButtonBack/>
            <ButtonEdit/>
            <ButtonRemove/>
          </Menu>
          <Body>
            <SelectCount/>
            <SelectStorys/>
            {/* <CountList counts={counts}/> */}
          </Body>
          <Footer>

          </Footer>
        </Page>
      </Route>
      <Route path="/">
        <Page>
          <Menu/>
          <Body>
            <CountList/>
          </Body>
          <Footer>
            <ControllPanel/>
          </Footer>
        </Page>
      </Route>
    </Switch>


  );
};
// const mapDispatchToProps = (dispatch) =>({
//   // printAll: ()=>{
//   //   dispatch(setShowAll());
//   // },
// });
// const mapStateToProps = (state) =>({
//   counts: state.сounters,
//   storys: state.story,
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(MainPage);