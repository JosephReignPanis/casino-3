"use client";

import Image from "next/image";
import { useState } from "react";

export default function MiddleContent() {
  const [activeTab2, setActiveTab2] = useState("죽구");
  const tab2 = ["죽구", "농구", "야구", "배구", "아이스하키", "아이스"];

  const notices = [
    {
      type: "NOTICE",
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "NOTICE",
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "NOTICE",
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "NOTICE",
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
  ];

  const events = [
    {
      type: "EVENT",
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "EVENT",
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "EVENT",
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "EVENT",
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
  ];
  interface CardListProps {
    data: { type: string; title: string; date: string }[];
    badgeColor: string;
  }

  const CardList: React.FC<CardListProps> = ({ data, badgeColor }) => (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-row justify-between py-4 px-2 border-b border-zinc-600 hover:bg-zinc-800/50"
        >
          <div className="flex flex-row gap-2">
            <div
              className={`px-2 py-1 text-xs text-center font-bold items-center flex rounded-lg ${badgeColor}`}
            >
              {item.type}
            </div>
            <p className="truncate max-w-40 text-sm overflow-hidden whitespace-nowrap">
              {item.title}
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="truncate max-w-[100px] text-sm overflow-hidden whitespace-nowrap text-zinc-400">
              {item.date}
            </p>
            <Image
              src="/r-arrow.png"
              width={10}
              height={10}
              className="w-5 h-5 object-contain"
              alt="r-arrow"
            />
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <>
      <div className="block sm:hidden">
        <Image
          src="/placeholder1.png"
          width={500}
          height={300}
          alt="placeholder"
          className="w-full"
        />
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="col-span-1 flex flex-col gap-2">
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-lg items-center mt-3">
          <p>공지사항</p>
          <Image
            src="/plus_icon.png"
            width={10}
            height={10}
            className="w-5 h-5 object-contain"
            alt="plus"
          />
        </div>
        <CardList data={notices} badgeColor="bg-zinc-800 text-[#b8862f]" />{" "}
        <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-lg items-center mt-3">
          <p>이벤트</p>
          <Image
            src="/plus_icon.png"
            width={10}
            height={10}
            className="w-5 h-5 object-contain"
            alt="plus"
          />
        </div>
        <CardList data={events} badgeColor="bg-[#b8872b] text-black" />
      </div>

      <div className="col-span-3 hidden sm:block">
        {" "}
        <div className="col-span-4 flex flex-col gap-3">
          <div className="flex font-bold text-lg p-2 header rounded-lg">
            크로스&단폴
          </div>
          <div className="flex flex-row gap-2">
            <button className="active-btn ">전체</button>
            <button className="active-btn ">축구</button>
            <button className="active-btn ">야구</button>
            <button className="active-btn ">농구</button>
            <button className="active-btn ">배구</button>
            <button className="active-btn ">기타</button>
          </div>
          <table className="w-full mb-5 ">
            <thead className="rounded-lg">
              <tr className="header">
                <th>경기일시</th>
                <th>승</th>
                <th>무/핸디</th>
                <th>패</th>
                <th>상태</th>
              </tr>
              <tr>
                <th colSpan={5} className="bg-zinc-800 p-1 text-left">
                  프리메이라리가
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-zinc-900/90 p-4 text-center border ">
                <td className=" p-2">00/00(일) 00:00</td>
                <td className=" flex justify-between">
                  <p>CD 아베스</p>  
                  <p>0.55</p>
                </td>
                <td className="">9.99</td>
                <td className=" flex justify-between">
                  <p>0.66</p>
                  <p>허더즈필드 타우 FC</p>
                </td>
                <td className="">베팅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
