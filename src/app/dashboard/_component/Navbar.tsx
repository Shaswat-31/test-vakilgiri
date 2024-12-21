'use client'
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import { CiCirclePlus, CiMenuBurger } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { TbUserSquare } from "react-icons/tb";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { DialogDemo } from "./WalletBalanceDialog";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);

  const handleDashboardClick = () => {
    setPopoverOpen(false);
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="w-full p-3 sticky top-0 bg-white shadow-lg border-black flex items-center justify-between h-12 z-50">
        <div className="flex justify-center gap-2 items-center">
          <SidebarTrigger>
            <CiMenuBurger />
          </SidebarTrigger>
          <Image src={logo} alt="logo_vakilgiri" height={125} width={125} />
        </div>

        <div className="flex gap-1 justify-center items-center">
          <div className="bg-[#EEEEEE] flex gap-7 text-left py-1 items-center px-2 rounded-sm">
            <div className="flex flex-col h-8">
              <span className="text-[9px] text-[#F20101] font-medium">Wallet Balance</span>
              <span className="text-[14px] font-medium">&#8377; 0.00</span>
            </div>
            <DialogTrigger>
              <FaCirclePlus size={"20"} className="text-[#F20101] text-bold" />
            </DialogTrigger>
            <DialogDemo onClose={() => setOpen(false)} />
          </div>
          <div>
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
              <PopoverTrigger>
                <FaRegCircleUser size={40} className="text-slate-700 shadow-sm shadoe-slate-300 rounded-full mt-1 cursor-pointer" />
              </PopoverTrigger>
              <PopoverContent className="w-full px-[10px] py-[15px] bg-[#ffffff] rounded-[10px] mt-2 ml-2">
                <div className="flex flex-col gap-1 items-start justify-center">
                  <div className="w-full flex gap-1 items-start justify-start">
                    <TbUserSquare size={60} className="mt-2 text-slate-700 shadow-sm shadoe-slate-300" />
                    <div className="flex flex-col">
                      <p className="text-[16px] font-bold text-[#F20101]">Nahar Singh</p>
                      <div className="flex items-center gap-1 m-0">
                        <span className="text-[#F20101] text-[13px] font-bold">[E]:</span>
                        <p className="text-[13px] break-all font-medium">naharsingh151299@gmail.com</p>
                      </div>
                      <div className="flex items-center gap-1 m-0">
                        <span className="text-[#F20101] text-[13px] font-bold">[P]:</span>
                        <p className="text-[13px] font-medium">775533664411</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-2 gap-4 justify-around items-center">
                    <Button 
                      className="w-[150px] text-[15px] font-[600] bg-[#F20101] hover:bg-[#F20101]/70 text-white"
                      onClick={handleDashboardClick}
                    >
                      <Link href="/dashboard">Dashboard</Link>
                    </Button>
                    <Button className="w-[150px] text-[15px] font-[600] bg-[#091747] hover:bg-[#F20101] text-white">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Navbar;

