import React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import './Modal.css'
import { useState } from 'react';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
//   const DateTime =()=>{
//     var [date,setDate]=useState(new Date());
//     useEffect(()=>{
//         var Timer= setinterval(()=> setDate(new Date()), 1000 )
//         return function cleanup(){
//             clearInterval(Timer)
//         }
//     });
// }
  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
      Add an Expense
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
      
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
            
            height:'30%'
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '1%',
              position:'absolute',
              justifyContent:'center',
              bgcolor: '#5BC5A7',
            }}      
          />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            color='#5BC5A7'
            fontWeight="lg"
            mb={1}
            

          >
           <a className='Expense'> Add an Expense </a>
          </Typography>
            
            <div className='with_1'>
             <label htmlFor="email">With You and :</label>
             <input className='with_2' id="email" type="text" />
            </div>
        

        <div>
        {/* function MyButton() {
        const [isOpen, setIsOpen] = useState(false);

  return (
        <>
         <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
        // <div>
        //   <p>This is the dialogue box</p>
        //   <button onClick={() => setIsOpen(false)}>Close Dialogue</button>
        // </div>
      ) : null} */}
         {/* <button type="home"onClick={() => setOpen(true)}>   
            <Sheet
            variant="outlined"
            sx={{
                maxWidth: 500,
                borderRadius: 'md',
                p: 3,
                boxShadow: 'lg',
            }}
            >
            <ModalClose
                variant="outlined"
                sx={{
                top: 'calc(-1/4 * var(--IconButton-size))',
                right: 'calc(-1/4 * var(--IconButton-size))',
                boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                borderRadius: '50%',
                bgcolor: 'background.body',
                }}      
            />
            <Typography
                component="h2"
                id="modal-title"
                level="h4"
                textColor="inherit"
                fontWeight="lg"
                mb={1}

            >
                <p>Choose Category</p>
                <div>
                    <ul>
                        <li data-id='1' className='selected'>
                            Entertainment 
                            <ul>
                                <li data-id='2' class > Games </li>
                                <li data-id='2' class > Games </li>
                                <li data-id='2' class > Games </li>
                            </ul>
                        </li>
                        <li data-id='3'className='selected'>
                            Food & Drink 
                            <ul>
                                <li data-id='2' class > Games </li>
                            </ul>
                        </li>
                        <li className='selected'>
                            Entertainment 
                            <ul>
                                <li data-id='2' class > Games </li>
                            </ul>
                        </li>
                        <li className='selected'>
                            Entertainment 
                            <ul>
                                <li data-id='2' class > Games </li>
                            </ul>
                        </li>
                        <li className='selected'>
                            Entertainment 
                            <ul>
                                <li data-id='2' class > Games </li>
                            </ul>
                        </li>
                        <li className='selected'>
                            Entertainment 
                            <ul>
                                <li data-id='2' class > Games </li>
                            </ul>
                        </li>
                    </ul>
                    
                </div>
            </Typography>
            <Typography id="modal-desc" textColor="text.tertiary">
                
            </Typography>
            </Sheet>
        
        </button>  */}
        {/* </> */}


        <div className='Home'> 
        <button>
            <img src ='https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/home/other@2x.png'></img>
        </button>
        <div className='description'>
             <label htmlFor="email"></label>
             <input  className='des_1'id="email" placeholder='Enter a description' />
             <label htmlFor="email"></label>
             <input  className='des_1' id="email" placeholder='0.00' />
            </div>
        
        </div>
        </div>
        <div>
            {/* <h2>paid by <button> you </button> and split <button>Equally</button>
            </h2> */}
        </div>
        <div>
            <button className='Button1'> Date</button>
            <button className='Button2'> Add Images/notes</button>
        </div>
          <Typography id="modal-desc" textColor="text.tertiary">
            {/* Make sure to use <code>aria-labelledby</code> on the modal dialog with an
            optional <code>aria-describedby</code> attribute. */}
          </Typography>
        </Sheet>
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
            
            height:'30%'
          }}
        >
        <p>hjbcjb</p>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}