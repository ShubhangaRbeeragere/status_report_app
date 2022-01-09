import React,{useState,useEffect} from 'react';
import Alist from './Alist';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import './Achievements.css'


export default function AAccordion (props) {

function Atestt (props) {
    
  }
    const [loading,setLoading] = useState(true);
    const [loadedData,setLoadedData] = useState([]);
  
    useEffect(() => {
      setLoading(true);
  
      fetch('https://my-react-app-ef4bc-default-rtdb.firebaseio.com/testdata.json'
  ).then((response) => {
      return response.json();
  })
    .then((data)    => {

      const alists = [];
      for (const key in data){

          const alist = {

            id:key,
            ...data[key]

          };

          alists.push(alist);

      }


      setLoading(false);
      setLoadedData(alists);
  });
  
  
    },[]);

      if (loading) {
          <section>

              <p>Loading....</p>

          </section>

      }






        return (
            <div className='accordion'>
            <Accordion >

            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            >
            <Typography
            style={{
              fontWeight: 4,color:'black'
            }}
            >
            <Alist alists={loadedData}/>
            </Typography>
            </AccordionSummary> 
            <div className='Subaccordion'>
            <AccordionDetails>
         
            <Typography style={{color:'white'}}>Sub Achievement one </Typography>
          
            </AccordionDetails></div>
            </Accordion>
            </div>
  );

        };

