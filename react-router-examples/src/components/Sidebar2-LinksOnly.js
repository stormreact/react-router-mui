import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes1 = [
  { path: '/',
    exact: true,
    sidebar: () => <div>home1</div>,
    main: () => <h2>Home 1</h2>
  },
  { path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  { path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
]

const routes2 = [
  { path: '/two',
    exact: true,
    sidebar: () => <div>home2</div>,
    main: () => <h2>Home 2</h2>
  },
  { path: '/hb',
    sidebar: () => <div>hb!</div>,
    main: () => <h2>Honeybun</h2>
  },
  { path: '/michael',
    sidebar: () => <div>michael!</div>,
    main: () => <h2>Michael</h2>
  }
]


const SidebarExample = () => (
  <Router>
    <div style={{ display: 'flex' }}>


      <div style={{
        padding: '10px',
        width: '40%',
        background: '#f0f0f0'
      }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bubblegum">Bubblegum</Link></li>
          <li><Link to="/shoelaces">Shoelaces</Link></li>
        </ul>

      </div>

      <div style={{
        flex: 2,
        padding: '10px',
        width: '40%',
        background: '#f0f0f0'
      }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/two">Home</Link></li>
          <li><Link to="/hb">Hb</Link></li>
          <li><Link to="/michael">Michael</Link></li>
        </ul>

      </div>














    </div>
  </Router>
)

export default SidebarExample
