import { ArrowLeftOutlined } from '@ant-design/icons';
import {Button} from "antd"
import { useNavigate } from 'react-router-dom';

export default function SuccesfullPayment() {
    const navigate = useNavigate()
  return (
    <div>
        <div style={{width:"100%", marginLeft:"25%"}}>
        <img
              src="https://ruperhat.com/wp-content/uploads/2020/06/Paymentsuccessful21.png"
              alt="Example"
            />
        </div>
        <div style={{marginLeft:"42%"}}>
        <ArrowLeftOutlined />
        <Button type="link" style={{color:"black", fontSize:"25px"}} onClick={()=>navigate("/user")}>Go Back to shopping</Button>
        </div>
    </div>
  )
}
