import React, { Component } from 'react';

class NavigationBar extends Component {
   render() {

     const navBarHeader = (
       <div className="navbar-header">
           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
               <span className="sr-only">Toggle navigation</span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
           </button>
           <a className="navbar-brand page-scroll" href="#page-header">Hospitals City</a>
       </div>
     );

     var menuItems = [
       {link:"#page-header", name:"Home"},
       {link:"#about", name:"About"},
       {link:"#services", name:"Services"},
       {link:"#hospitals", name:"Hospitals"},
       {link:"#contact", name:"Contact"}
     ];

     const menuItemList = menuItems.map(menuItem =>
       <li key={"menuitem_" + menuItem.name}>
           <a className="page-scroll" href={menuItem.link}>{menuItem.name}</a>
       </li>
     );

     const menuItemsInNavbar = (
       <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
           <ul className="nav navbar-nav navbar-right">
              {menuItemList}
           </ul>
       </div>
     );

     return (
       <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
         <div className="container-fluid">
             <div>
                {navBarHeader}
             </div>
             <div>
                {menuItemsInNavbar}
             </div>
         </div>
       </nav>
     );
   }
}

export default NavigationBar;
