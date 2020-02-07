import React from 'react';
import './App.css';
import {Submenu} from './components/Submenu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enableActiveFilter: true,
      menu:[
        {
          title: "requirements",
          list: [
            {
              name: 'Author',
              active: false
            },
            {
              name: 'Manager',
              active: true
            },
            {
              name: 'Tests',
              active: false
            }
          ]
        },
        {
          title: "backlog",
          list: [
            {
              name: 'Overview',
              active: true
            },
            {
              name: 'Epics',
              active: false
            },
            {
              name: 'Features',
              active: true
            },
            {
              name: 'Backlog Items',
              active: true
            },
            {
              name: 'Tests',
              active: false
            }
          ]
        },
        {
          title: "team backlog",
          list: [
            {
              name: 'Features',
              active: true
            },
            {
              name: 'Backlog Items',
              active: true
            },
            {
              name: 'Story Boards',
              active: false
            },
            {
              name: 'Tests',
              active: false
            },
            {
              name: 'Commits',
              active: false
            },
            {
              name: 'Task Board',
              active: false
            }
          ]
        },
        {
          title: "quality",
          list: [
            {
              name: 'Overview',
              active: true
            },
            {
              name: 'Tests',
              active: false
            },
            {
              name: 'Features',
              active: false
            },
            {
              name: 'Defects',
              active: false
            }
          ]
        },
      ]
    };

    this.toggleFilter = this.toggleFilter.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
  }

  toggleFilter() {
    this.setState({
      enableActiveFilter: !this.state.enableActiveFilter
    })
  }

  renderMenu(active) {
    if(active) {
      return (
        this.state.menu.map(m => (
          <Submenu
            key = {m.title}
            title = {m.title}
            names = {
              m.list.map(l => l.active ? l.name : null)
              .filter(v => v != null)} />
        ))
      )
    } else {
      return (
        this.state.menu.map(m => (
          <Submenu
            key = {m.title}
            title = {m.title}
            names = {
              m.list.map(l => l.name )
            } />
        ))
      )
    }
  }
  render() {
    return (
      <nav>
        <ul className="container ul-reset">
      <li><a href='#'>Home</a></li>
      <li className='droppable'>
        <a href='#'>Mega Menu</a>
        <div className='mega-menu'>
        <div onClick = {this.toggleFilter} className = {this.state.enableActiveFilter ? 'active' : 'inactive'}>
          <i className="fa fa-clock-o" aria-hidden="true" id="activeFilter"></i>
        </div>

          <div className="container cf">
            { this.renderMenu(this.state.enableActiveFilter) }
          </div>
        </div>
      </li>
    </ul>
    
  </nav>
    );
  }
  
}

export default App;
