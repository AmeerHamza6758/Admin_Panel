// import React, { useState, } from "react";
// import "./Card.css";
// import { color, motion, useAnimation } from 'framer-motion';
// // react progress bar.
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import Charts from "react-apexcharts";

// function CustomCard(props)=> {
//   const [expanded, setExpanded] = useState(false);
//   const controls = useAnimation();

//   // useEffect(() => {
//   //   if (expanded) {
//   //     controls.start({ width: "100%" }); // Define your expanded animation
//   //   } else {
//   //     // controls.start({ width: "50%" }); // Define your compact animation
//   //   }
//   // }, [expanded, controls]);

//   // const toggleExpanded = () => {
//   //   setExpanded(!expanded);

//   //};

//   return (

//     <>
// epanded ? <ExpandedCard param={props} setExpanded ={ ()=> setExpanded(false)}/>: <CompactCard param = {props} setExpanded ={ ()=> setExpanded(true)}/>
//   )}

//     //<motion.div
//       // className="custom-card"
//       // layout
//       // initial={false}
//       // animate={controls}
//       // onClick={toggleExpanded}>
    
      
//        {/* <h3>{props.title}</h3>
//       <p>Bar Value: {props.barValue}</p>  */}
//       function CompactCard({props, setExpanded}){
//   return(
//     <>
//       <div className="compactCard"
//         style={{
//           background: props.color.backGround, //help
//           boxShadow: props.color.boxShadow
//                   }}
//         onClick ={setExpanded}
//         >
//         {/* //circles values */}

//         <div className="radialBar">
//           <CircularProgressbar
//             value={props.barValue}
//             text={`$${props.barValue}%`}
//           /><span>{props.title}</span> </div>
//         <div className="detail">
//           {props.png && <props.png />}
//           <span>${props.value}</span>
//                   <span>Last 24 hours</span>
//         </div> </div>
//     </>
//     //</motion.div>
    
//   )
// };
//ExpandedCard
// function ExpandedCard({param, setExpanded}){
//   const data = {
//     options:{
//       type:"area",
//       height: "auto"
//     },
//     dropShadow:{
//       enabled : false,
//       enabledOnSeries: undefined,
// top:0,
// left:0,
// blur 3,
// color: "#000"
// opacity: 0.35,

//     },
//     fill:{
//       color: ["#fff"],
//       type: "gradient",

//     },
//     stroke:{
//       curve: "smooth",
//       color: ["white"]
//     },
//     grid:{show: true},

//   }
//   return(
//     <>
//     <div className="ExpandedCard"
//     style={{background:param.color.backGround,
//     boxShadow: param.color.boxShadow }}>
//       <div><UiTimes onClick={setExpanded}/>
//       <span>
//         {param.title}
//       </span>

//       <div className="chatContaier"> <Chart series={param.series} type='area'options={DataTransfer.options}/></div>
//       <span>Last 24 hours</span>
//       </div>
//     </div>
//     </>
//   )
// }
// export default CustomCard;


import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from "react-apexcharts";
import { UilClipboardAlt, UilTimes} from '@iconscout/react-unicons';
// import { color, motion, useAnimation } from 'framer-motion';


function CustomCard(props) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={toggleExpanded} />
      ) : (
        <CompactCard param={props} setExpanded={toggleExpanded} />
      )}
    </>
  );
}

function CompactCard({ param, setExpanded }) {
  return (
    <>
          <div
        className="compactCard"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
        onClick={setExpanded}
              >
        <div className="radialBar">
          <CircularProgressbar
            value={param.barValue}
            text={`${param.barValue}%`}
          />
          <span>{param.title}</span>
        </div>
        <div className="detail">
          {param.png && <param.png />}
          <span>${param.value}</span>
          <span> Last 24 hours</span>
        </div>
      </div>
    </>
  );
}

function ExpandedCard({ param, setExpanded }) {
  const data = {
  
    options: {
      chart:{
      type: "area",
      height: "auto"
    },
    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: 'white',
      opacity: 0.35,
    },
    fill: {
      color: "#696969",
      type: "gradient",
    },
    stroke: {
      curve: "smooth",
      color: ["#FFFFFF"],
    },
    grid: { show: true },
  },
  };
  return (
    <>
      <div
        className="ExpandedCard"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
              >
        <div>
          <UilTimes onClick={setExpanded} />
          </div>
          <span>{param.title}</span>

          <div className="chartContainer">
            <Chart series={param.series} type='area' options={data.options} />
          </div>
          <span>Last 24 hours</span>
        </div>
          </>
  );
}

export default CustomCard;
