import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const primaryButtons = [
    { label: "입금신청", path: "/navigation/charge" },
    { label: "출금신청", path: "/navigation/exchange" },
    { label: "경기결과", path: "/navigation/result" },
    { label: "베팅내역", path: "/navigation/betlist" },
    { label: "공지사항", path: "/navigation/notice" },
    { label: "이벤트", path: "/navigation/event" },
    { label: "쪽지함", path: "/navigation/message" },
    { label: "고객센터", path: "/navigation/help" },
    { label: "마이페이", path: "/navigation/mypage" },
    { label: "출석체크", path: "/navigation/attendance" },
  ];

  return (
    <>
      <div className="hidden lg:block">
        <nav className="flex flex-row justify-between items-center py-2 bg-zinc-950/10 px-2">
          <div className="flex flex-row gap-3 items-center">
            <Image
              src={"/annouce.png"}
              width={20}
              height={20}
              alt="announcement"
            />
            <p className=" w-96 overflow-hidden text-ellipsis whitespace-nowrap block">
              공지사항 제목에 오신것을 환영합니다.공지사항 제목에 오신것을
              환영합니다. 공지사항 제목에 오신것을 환영합니다.공지사항 제목에
              오신것을 환영합니다. 공지사항 제목에 오신것을 환영합니다.공지사항
              제목에 오신것을 환영합니다.
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center align-middle">
            {primaryButtons.map((items, index) => (
              <Link key={index} href={items.path} className="nav-btn-primary">
                {items.label}
              </Link>
            ))}
            <button className="nav-btn-logout">로그아웃</button>
          </div>
        </nav>
        <nav className="flex flex-row justify-center items-center py-2 navgradient px-2 gap-5">
          <p>홍길동님</p>
          <span className="flex flex-row gap-2">
            <p>받은쪽지함:</p>
            <p className="text-yellow-400">(999)</p>
          </span>
          <span className="flex flex-row gap-2">
            <p>보유머니 :</p>
            <p className="text-yellow-400">140,295원</p>
          </span>
          <span className="flex flex-row gap-2">
            <p>베팅중인금액:</p>
            <p className="text-yellow-400">100,000원</p>
          </span>
          <span className="flex flex-row gap-2">
            <p>포인트:</p>
            <p className="text-yellow-400">56,000P</p>
          </span>
          <span className="flex flex-row gap-2">
            <p>가상머니:</p>
            <p className="text-yellow-400">500,000원</p>
          </span>
          <span className="flex flex-row gap-2">
            <p> 15%쿠폰 :</p>
            <p className="text-yellow-400">10개</p>
          </span>
          <span className="flex flex-row gap-2">
            <p>20%쿠폰:</p>
            <p className="text-yellow-400">(19)개</p>
          </span>
        </nav>
      </div>
    </>
  );
}
