"use client";

import Image from "next/image";
import Link from "next/link";

export default function LeftContent() {
  const secondaryButtons = [
    { label: "스포츠 (해외)", path: "/categories/sports" },
    { label: "스포츠 (국내)", path: "/categories/sportscross" },
    { label: "스페셜", path: "/categories/sportsspecial" },
    { label: "인플레이", path: "/categories/inplay" },
    { label: "실시간", path: "/categories/sports-live-kor" },
    { label: "미니게임", path: "/categories/minigame" },
    { label: "벳365", path: "/categories/bet365" },
    { label: "토큰게임", path: "/categories/tokengame" },
    { label: "카지노", path: "/categories/livecasino" },
    { label: "슬롯", path: "/categories/slot" },
  ];
  const navbtn = [
    {
      label: "스포츠",
      path: "/categories/sports",
      icon: "/icon/5_icon.png",
    },
    {
      label: " 카지노",
      path: "/categories/livecasino",
      icon: "/icon/4_icon.png",
    },
    {
      label: "슬롯",
      path: "/categories/slot",
      icon: "/icon/3_icon.png",
    },
    { label: "벳365", path: "/categories/bet365", icon: "/icon/2_icon.png" },
    {
      label: "미니게임",
      path: "/categories/minigame",
      icon: "/icon/1_icon.png",
    },
  ];
  return (
    <>
    
      <div className="col-span-1">
        <div className="flex flex-col p-3 gap-2">
          <Image src={"/bank_logo.png"} width={300} height={300} alt="logo" />
          {navbtn.map((items, index) => (
            <Link
              key={index}
              href={items.path}
              className="btn-golden-gradient "
            >
              <Image
                src={items.icon}
                width={20}
                height={20}
                alt="kig"
                className="w-7 h-7"
              />
              {items.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 rounded-lg bg-zinc-950/60 p-3 px-4 items-start ">
            {secondaryButtons.map((items, index) => (
              <Link key={index} href={items.path} className="nav-btn-primary">
                {items.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
