import './App.css';
import * as mui from '@mui/material'
import * as Icons from '@mui/icons-material'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="price-table">
          <div className="title">
            <h2>Free</h2>
            <b>$0/month</b>
          </div>
          <div className="content">
            <div className="line"> <Icons.Done /><p>Single User</p></div>
            <div className="line"> <Icons.Done /><p>5GB Storage</p></div>
            <div className="line"> <Icons.Done /><p>Unlimited Public Projects</p></div>
            <div className="line"> <Icons.Done /><p>Community Access</p></div>
            <div className="muted-line"> <Icons.Close /><p>Unlimited Private Projects</p></div>
            <div className="muted-line"> <Icons.Close /><p>Dedicated Phone Support</p></div>
            <div className="muted-line"> <Icons.Close /><p>Free Subdomain</p></div>
            <div className="muted-line"> <Icons.Close /><p>Monthly Status Reports</p></div>
          </div>
          <mui.Button href="#" sx={{width:"100%", minHeight:"50px", borderRadius:"0px"}} color="primary" variant="contained">Buy</mui.Button>  
        </div>
        <div className="price-table">
        <div className="title" style={{backgroundColor:'#ffeebb'}}>
            <h2>Plus</h2>
            <b>$9/month</b>
          </div>
          <div className="content">
            <div className="line"> <Icons.Done /><p>5 User</p></div>
            <div className="line"> <Icons.Done /><p>50GB Storage</p></div>
            <div className="line"> <Icons.Done /><p>Unlimited Public Projects</p></div>
            <div className="line"> <Icons.Done /><p>Community Access</p></div>
            <div className="line"> <Icons.Done /><p>Unlimited Private Projects</p></div>
            <div className="line"> <Icons.Done /><p>Dedicated Phone Support</p></div>
            <div className="line"> <Icons.Done /><p>Free Subdomain</p></div>
            <div className="muted-line"> <Icons.Close /><p>Monthly Status Reports</p></div>
          </div>
          <mui.Button href="#" sx={{width:"100%", minHeight:"50px", borderRadius:"0px"}} color="primary" variant="contained">Buy</mui.Button>
        </div>
        <div className="price-table">
        <div className="title" style={{backgroundColor:'gold'}}>
            <h2>Pro</h2>
            <b>$49/month</b>
          </div>
          <div className="content">
            <div className="line"> <Icons.Done /><p><b>Unlimited User</b></p></div>
            <div className="line"> <Icons.Done /><p>150GB Storage</p></div>
            <div className="line"> <Icons.Done /><p>Unlimited Public Projects</p></div>
            <div className="line"> <Icons.Done /><p>Community Access</p></div>
            <div className="line"> <Icons.Done /><p>Unlimited Private Projects</p></div>
            <div className="line"> <Icons.Done /><p>Dedicated Phone Support</p></div>
            <div className="line"> <Icons.Done /><p><b>Unlimited</b> Free Subdomain</p></div>
            <div className="line"> <Icons.Done /><p>Monthly Status Reports</p></div>
          </div>
          <mui.Button href="#" sx={{width:"100%", minHeight:"50px", borderRadius:"0px"}} color="primary" variant="contained">Buy</mui.Button>
        </div>
      </div>
    </div>
  );
}

export default App;
