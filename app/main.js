var React = require('react'),
  mui = require('material-ui'),
  Toolbar = mui.Toolbar,
  DropDownMenu = mui.DropDownMenu,
  DropDownIcon = mui.DropDownIcon,
  ToolbarGroup = mui.ToolbarGroup,
  RaisedButton = mui.RaisedButton,
  IconButton = mui.IconButton,
  FlatButton = mui.FlatButton,
  DatePicker = mui.DatePicker,
  TextField = mui.TextField,
  MenuItem = mui.MenuItem,
  LeftNav = mui.LeftNav,
  Dialog = mui.Dialog,
  Snackbar = mui.Snackbar,
  Paper = mui.Paper,
  AppBar = mui.AppBar,
  AppCanvas = mui.AppCanvas,
  Icon = mui.Icon;

var injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


var filterOptions = [
  { payload: '1', text: 'All Broadcasts' },
  { payload: '2', text: 'All Voice' },
  { payload: '3', text: 'All Text' },
  { payload: '4', text: 'Complete Voice' },
  { payload: '5', text: 'Complete Text' },
  { payload: '6', text: 'Active Voice' },
  { payload: '7', text: 'Active Text' },
];
var iconMenuItems = [
  { payload: '1', text: 'Download' },
  { payload: '2', text: 'More Info' }
];


React.render(<div className="frame">

  <Paper zDepth={1} className="navbar" innerClassName="navbar-container">
    <IconButton icon="navigation-menu" tooltip="Navigation" className="nav-icon" />
    <h1 className="title">E-Prototype2</h1>
    <div className="right-menu">
      <FlatButton label="Settings" />
      <FlatButton label="Log out" />
    </div>
  </Paper>

  <div className="columns">
    <div className="entry-list">list</div>
    <div className="entry-edit active">edit</div>
    <div className="entry-display active">display</div>
  </div>

</div>, document.getElementById("des-react-app"));
