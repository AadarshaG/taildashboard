
import Logo from '../../../img/react2.png'
import {AiFillDashboard} from 'react-icons/ai'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import {FaHome} from 'react-icons/fa'
import { useState } from 'react'

export function AdminSidebar(){

    const [open, setOpen] = useState(true)

    return(
        <div className={`${open ? 'w-60' : 'w-20'} duration-300 h-screen bg-gray-300 relative`}>
            <IoArrowBackCircleOutline size={20} 
            className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 ${open ? 'rotate-0 ': 'rotate-180'}`} alt='' onClick={()=>setOpen(!open)} /> 
             <div className="flex flex-col ml-5">
                <div className={`duration-300 mt-5 flex gap-x-4`}>
                    <img src={Logo} className={`${open ? 'w-[50px] h-[50px] origin-left' : 'w-[50px] h-[50px] items-center justify-center'} objrct-fit`} alt=""></img>
                    <p className={`${!open && 'hidden'} origin-left`}>React Admin Dashboard</p>
                </div>
                <hr className="border-2 w-full mt-5" />
                {/* <div className="flex flex-col items-left"> */}
                    <ul className=''>
                        <li className="flex items-center gap-x-4 cursor-pointer p-2 hover:bg-red-300 hover:rounded-md"> <AiFillDashboard size={20} /> <p className={`${!open && 'hidden'} origin-left`}>Dashboard</p></li>
                        <li className="flex items-center gap-x-4 cursor-pointer p-2 hover:bg-red-300 hover:rounded-md"> <FaHome size={20} /> <p className={`${!open && 'hidden'} origin-left`}>Home</p></li>
                    </ul>
                {/* </div> */}
            </div>
        </div>
    )
}