import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import {Button} from "antd"
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate=useNavigate()
  return (
    <div style={{ display:"flex", position: 'fixed', left: 0, bottom: 0, width: '100%', backgroundColor: 'white', padding: '7px', boxShadow:"0 0 5px grey"}}>
      <div>
        <div>
          <div>
            <img src="https://static.vecteezy.com/system/resources/previews/015/394/307/original/medical-pharmacy-logo-design-vector.jpg"
            style={{ width: '200%', height: '120px', marginLeft:"20%" }}
            alt="Example"/>
          </div>
        </div>
      </div>
      <div style={{marginLeft:"20%"}}>
        <p style={{marginLeft:"27%"}}>Information</p>
        <Button type="link" onClick={()=>navigate('/information')}>Frequently asked questions</Button>
      </div>
      <div style={{marginLeft:"5%"}}>
        <p style={{marginLeft:"23%"}}>Useful links</p>
        <Button type="link" onClick={()=>navigate('/usefullinks')}>How to order online</Button>
      </div>
      <div style={{marginLeft:"5%"}}>
        <p style={{marginLeft:"10%"}} >Wholesale</p>
        <Button type="link" block  onClick={()=>navigate('/wholesaleprice')}>Price list</Button>
      </div>
      <div style={{marginLeft:"5%"}}>
      <div><p style={{fontSize:"20px", color:"grey"}}>The biggest chain of pharmacies locating  <br/> in many regions of Armenia.</p></div>
      <div style={{marginLeft:"40%"}}>
        <FacebookOutlined style={{ fontSize: "24px", marginRight: "10px" }} />
          <InstagramOutlined style={{ fontSize: "24px" }} />
          </div>
      </div>
    </div>
  )
}
