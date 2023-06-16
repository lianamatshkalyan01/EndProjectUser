import Category from '../../Components/Category/Category'
import { Calendar, theme } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { decodeToken } from 'react-jwt';
import { Space, Typography } from 'antd';

const { Text, Link } = Typography;

const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

export default function User() {
    const { token } = theme.useToken();
    const[user, setUser] = useState(localStorage.getItem('user') || null);
    const decoded: any = user && decodeToken(JSON.parse(user)?.jwt);

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    marginLeft:"17%",
    marginRight:"2%",
    marginTop:"2%",
    marginBottom:"2%",
  };


  return (
    <div >
      <div style={{display:'flex'}} >
      <div >
        <div><h1>Seasonal Offers</h1></div>
        <div style={{display:'flex', marginLeft:"10%", width:"1000px", height:"270px", marginTop:"3%"}}>
          <div style={{border:"2px solid grey", borderRadius:'10px', marginRight:'2%'}}>
          <img
              src="https://hihubpublicimages1.s3.eu-central-1.amazonaws.com/images2d/1525c452238a36c40505f72ec0037c42dd0af15095abf3f548dc29e606c7bc29.jpeg"
              style={{ width: '250px', height: '150px' }}
              alt="Example"
            />
            <p style={{fontSize:"20px", fontWeight:"bolder"}}>Rhinostop (0.1%/15ml)</p>
            <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ fontSize: "18px", marginBottom: "7%", marginRight: "10px" }}>
               650 AMD
            </p>
            <Text delete style={{ color: "red", fontSize: "18px", fontWeight: "bold" }}>
               680 AMD
            </Text>
            </div>
          </div>
          <div style={{border:"2px solid grey", borderRadius:'10px', marginRight:'2%'}}>
          <img
              src="https://hihubpublicimages1.s3.eu-central-1.amazonaws.com/images2d/55a55855d442cc66e3a6ba85aaf0f233d9b9808cbc2685d59c6a78f6197510fa.jpeg"
              style={{ width: '250px', height: '150px' }}
              alt="Example"
            />
            <p style={{fontSize:"20px", fontWeight:"bolder"}}>Nanoplast forte (7x9cm)</p>
            <div style={{display:"flex"}}>
            <p style={{ fontSize: "18px", marginBottom: "7%", marginRight: "10px" }}>1170 AMD</p>
            <Text delete style={{ color: "red", fontSize: "18px", fontWeight: "bold", marginTop:"5%" }}>1230</Text>
            </div>
          </div>
          <div style={{border:"2px solid grey", borderRadius:'10px', marginRight:'2%'}}>
          <img
              src="https://hihubpublicimages1.s3.eu-central-1.amazonaws.com/mainPictures/d9251a03c87a1677f10e28682d4024febc21f93ef516e61ad71b4303ba5e0e80.jpg"
              style={{ width: '250px', height: '150px' }}
              alt="Example"
            />
            <p style={{fontSize:"20px", fontWeight:"bolder"}}>Dexamethasone (4mg/1ml)</p>
            <div style={{display:"flex"}}>
            <p style={{ fontSize: "18px",  marginBottom: "7%", marginRight: "10px" }}>670 AMD</p>
            <Text delete style={{ color: "red", fontSize: "18px", fontWeight: "bold", marginTop:"5%" }}>710</Text>
            </div >
          </div>
          <div style={{border:"2px solid grey", borderRadius:'10px', marginRight:'2%'}}>
          <img
              src="https://hihubpublicimages1.s3.eu-central-1.amazonaws.com/mainPictures/249b4e66fe02562c65d4fdccd5e6c6ff98a3b06edda8b2e7293eb84c68d57616.png"
              style={{ width: '250px', height: '150px' }}
              alt="Example"
            />
            <p style={{fontSize:"20px", fontWeight:"bolder"}}>Supra VIT vitamic C</p>
            <div style={{display:"flex"}}>
            <p style={{ fontSize: "18px", marginBottom: "7%", marginRight: "10px" }}>2450 AMD</p>
            <Text delete style={{ color: "red", fontSize: "18px", fontWeight: "bold", marginTop:"5%" }}>2580</Text>
            </div>
          </div>
        </div>
      </div>
    <div style={wrapperStyle}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
    </div>
    <Category />
    </div>
  )
}

