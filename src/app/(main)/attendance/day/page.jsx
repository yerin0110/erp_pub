"use client";
import { toast } from "sonner";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";
import {
  AlarmClock,
  BookOpen,
  Calendar,
  CalendarCheck,
  CheckCheck,
  Clock,
  FilePen,
  Info,
  ListChecks,
  LogOut,
  Paperclip,
  Plane,
  Plus,
  RotateCcw,
  Save,
  Search,
  ShieldCheck,
  SquareCheck,
  Trash2,
  UsersRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import TableFooter from "@/component/common/TableFooter";

export default function Page() {
  const [isOn, setIsOn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  // 날짜 조회하기
  const [selectedDate, setSelectedDate] = useState(new Date());

	const formatDate = (date) => {
		const week = ["일", "월", "화", "수", "목", "금", "토"];

		return `${date.getFullYear()}년 ${
			date.getMonth() + 1
		}월 ${date.getDate()}일 (${week[date.getDay()]})`;
	};

  const prevDate = () => {
		const date = new Date(selectedDate);
		date.setDate(date.getDate() - 1);
		setSelectedDate(date);
	};

	const nextDate = () => {
		const date = new Date(selectedDate);
		date.setDate(date.getDate() + 1);
		setSelectedDate(date);
	};

  const [isLoading, setIsLoading] = useState(false);

  // 아 이게 없네.. 조회 리스트
  const [attendanceList, setAttendanceList] = useState([]);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  // 근태조회, 검색
  const getAttendanceDaily = async () => {
    try {
      setIsLoading(true);

      // 1. 근태리스트를 조회합니다.
      const token = localStorage.getItem("accessToken");

      // YYYYMMDD 형식
      const now = selectedDate;
      const year = now.getFullYear();
      const month =
        now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1; // 10미만인경우 앞에 0 붙임
      const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate(); // 10미만인경우 앞에 0 붙임

      const findDate = `${year}${month}${day}`;
      const params = {
        findDate: findDate,
      };

      // useState 만들기
      // 검색 키워드 존재시 추가
      if (searchKeyword) {
        params.keyword = searchKeyword;
      }

      // useState 만들기
      // 검색할 부서 존재시 추가
      if (selectedDepartment) {
        params.departmentName = selectedDepartment;
      }

      const res = await baseApi.get("/api/v1/attendances/daily", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params,
      });

      // 2. 근태리스트를 세팅합니다.
      setAttendanceList(res?.data?.data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

	useEffect(() => {
    getAttendanceDaily();
  }, [selectedDate]);

  useEffect(() => {
    getAttendanceDaily();
  }, [selectedDepartment]);

  useEffect(() => {
    getAttendanceDaily();
  }, [searchKeyword]);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("사용자 정보 로드 실패:", error);
    }
  }, []);

  const 출근처리하기 = async () => {
    try {
      setIsLoading(true);

      const token = localStorage.getItem("accessToken");

      const now = new Date();
      const year = now.getFullYear();
      const month =
        now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1; // 10미만인경우 앞에 0 붙임
      const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate(); // 10미만인경우 앞에 0 붙임

      const workDate = `${year}-${month}-${day}`;

      const res = await baseApi.post(
        "/api/v1/attendances/checkin",
        {
          // 오늘날짜로 넣어야함. (YYYY-MM-DD) 이렇게
          // new Date로 얻을 수 있으니 gpt한테 물어가며 하시길...
          workDate: workDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      // 출근처리 후 재조회하기
      getAttendanceDaily();
    } catch (e) {
      // 에러가 발생하면 toast로 에러메세지 띄우기 ?? 뭐야개쩐다
      // 이렇게
      toast(e.response?.data?.message || "출근처리 실패", {
        position: "top-center",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const 퇴근처리하기 = async () => {
    try {
      setIsLoading(true);

      const token = localStorage.getItem("accessToken");

      const now = new Date();
      const year = now.getFullYear();
      const month =
        now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1; // 10미만인경우 앞에 0 붙임
      const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate(); // 10미만인경우 앞에 0 붙임

      const workDate = `${year}-${month}-${day}`;

      const res = await baseApi.post(
        "/api/v1/attendances/checkout",
        {
          workDate: workDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      // 퇴근처리 후 재조회하기
      getAttendanceDaily();
    } catch (e) {
      // 에러가 발생하면 toast로 에러메세지 띄우기 ?? 뭐야개쩐다
      // 이렇게
      toast(e.response?.data?.message || "퇴근처리 실패", {
        position: "top-center",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const [selectedTab, setSelectedTab] = useState("출근");

  const saveAttendance = () => {
    if (selectedTab === "퇴근") {
      퇴근처리하기();
    } else if (selectedTab === "출근") {
      출근처리하기();
    } else if (selectedTab === "조퇴") {
      조퇴처리하기();
    } else if (selectedTab === "연차") {
      연차처리하기();
    }
  };

  // 조퇴 처리하기
  const parsingDateTime = (time) => {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    const localDateTime = `${year}-${month}-${day}T${time}:00`;

    return localDateTime;
  };

  const [endTime, setEndTime] = useState("");
  const [selectedEarlyReason, setSelectedEarlyReason] = useState("개인 사정");

  const 조퇴처리하기 = async () => {
    const token = localStorage.getItem("accessToken");

    try {
      setIsLoading(true);
      let path = "/api/v1/attendances/early-leave";

      const param = {
        // endTime은 Input에서 가져온 데이터
        // selectedEalryReason은 선택한 조퇴사유
        earlyLeaveTime: parsingDateTime(endTime),
        reason: selectedEarlyReason,
      };

      const res = await baseApi.post(path, param, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast(`${selectedTab} 정상처리 되었습니다.`, { position: "top-center" });
      getAttendanceDaily();

      // console.log(attendanceList);

      setIsLoading(true);
    } catch (e) {
      console.error(e);
      toast(e?.response?.data?.message || "네트워크 에러", {
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // 연차 처리하기
  const [startHolidayDate, setStartHolidayDate] = useState("");
  const [endHolidayDate, setEndHolidayDate] = useState("");

  const 연차처리하기 = async () => {
    const token = localStorage.getItem("accessToken");

    try {
      setIsLoading(true);
      let path = "/api/v1/attendances/leave";

      const param = {
        // startHolidayDate는 달력 input에서 선택한 데이터입니다.
        startDate: startHolidayDate,
        endDate: endHolidayDate,
        leaveType: "연차",
      };

      const res = await baseApi.post(path, param, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast(`${selectedTab} 정상처리 되었습니다.`, { position: "top-center" });
      getAttendanceDaily();

      setIsLoading(true);
    } catch (e) {
      console.error(e);
      toast(e?.response?.data?.message || "네트워크 에러", {
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

	const getStatusClass = (status) => {
		switch (status) {
			case "출근", "퇴근":
				return c.statusWork;

			case "지각":
				return c.statusLate;

			case "연차":
				return c.statusLeave;
			
			case "반차":
				return c.statusEarlyLeave;

			case "출장":
				return c.statusoutWork;

			default:
				return c.notRegistered;
		}
	};

  return (
    <div className={c.wrap}>
      <Nav />

      <div className={c.continer}>
        <Aside
          dummy={[
            {
              titleInfo: {
                iconPath: "/images/Clock-blue.png",
                titleName: "근태관리",
              },
              submenuList: ["일일근태등록", "월근태현황"],
            },
            {
              titleInfo: {
                iconPath: "/images/Plane.png",
                titleName: "출장관리",
              },
              submenuList: ["출장신청", "출장정산", "출장사용현황"],
            },
            {
              titleInfo: {
                iconPath: "/images/Calendar.png",
                titleName: "휴가관리",
              },
              submenuList: [
                "휴가일수설정",
                "휴가일수계산",
                "휴가일수신청",
                "휴가사용현황",
              ],
            },
          ]}
        />

        <div className={c.main}>
          <PageTitle
            location={["근태관리", "근태관리", "일일근태등록"]}
            title="일일근태등록"
            subTitle="날짜별 직원 근태 현황을 등록하고 수정합니다."
            buttons={[
              {
                img: "/images/Download.png",
                text: "PDF 다운로드",
              },
              {
                img: "/images/Plus.png",
                text: "일괄저장",
              },
            ]}
          />

          <div className={c.search}>
            <div className={c.searchBox}>
              <div className={c.dateBox}>
                <button className={c.beforeBtn} onClick={prevDate}>&lt;</button>
                <div className={c.dateInput}>
                  <Calendar size={13} color="#1b3a6b" />
									{formatDate(selectedDate)}
                  {/* 2026년 7월 9일 (목) */}
                </div>
                <button className={c.nextBtn} onClick={nextDate}>&gt;</button>
              </div>
              <div className={c.today}>
                <CalendarCheck size={13} color="#2563eb" />
                오늘
              </div>
              <div className={c.teamBox}>
                <span>부서</span>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  <option value="">전체부서</option>
                  <option value="인사팀">인사팀</option>
                  <option value="경영지원본부">경영지원본부</option>
                  <option value="IT본부">IT본부</option>
                  <option value="ERP개발팀">ERP개발팀</option>
                </select>
              </div>
              <div className={c.nameBox}>
                <Search size={13} color="#9ca3af" />
                <input
                  type="text"
                  placeholder="사원명 검색"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
              </div>
            </div>

            <div className={c.searhResult}>
              <div className={c.total}>
                <span></span>
                전체 23명
              </div>
              <div className={c.work}>
                <span></span>
                출근 18
              </div>
              <div className={c.workLate}>
                <span></span>
                지각 2
              </div>
              <div className={c.absence}>
                <span></span>
                결근 1
              </div>
              <div className={c.dayoff}>
                <span></span>
                연차 2
              </div>
            </div>
          </div>

          <div className={c.attendanceBox}>
            <div className={c.register}>
              <div className={c.registerTitle}>
                <div className={c.titleBox}>
                  <FilePen size={16} color="#1b3a6b" />
                  근태등록
                </div>
                <span>7월 1일</span>
              </div>
              <div className={c.registerBox}>
                <div className={c.memberBox}>
                  <label>
                    사원선택<span className={c.necessary}>*</span>
                  </label>
                  <div className={c.member}>
                    <span>
                      {currentUser?.name ? currentUser.name.charAt(0) : "사"}
                    </span>
                    {currentUser
                      ? `${currentUser.name} · ${currentUser.departmentName}`
                      : "로그인 정보 없음"}
                  </div>
                </div>
                <div className={c.type}>
                  <label>
                    근태 유형<span className={c.necessary}>*</span>
                  </label>
                  <div className={c.typeBox}>
                    <button
                      className={`${c.type1} ${
                        selectedTab === "출근" ? c.active1 : ""
                      }`}
                      onClick={() => setSelectedTab("출근")}
                    >
                      <CheckCheck
                        size={12}
                        color={selectedTab === "출근" ? "#ffffff" : "#6b7280"}
                      />
                      출근
                    </button>
                    <button
                      className={`${c.type2} ${
                        selectedTab === "지각" ? c.active2 : ""
                      }`}
                      onClick={() => setSelectedTab("지각")}
                    >
                      <AlarmClock size={12} color="#ea580c" />
                      지각
                    </button>
                    <button
                      className={`${c.type3} ${
                        selectedTab === "조퇴" ? c.active3 : ""
                      }`}
                      onClick={() => setSelectedTab("조퇴")}
                    >
                      <LogOut
                        size={12}
                        color={selectedTab === "조퇴" ? "#374151" : "#6b7280"}
                      />
                      조퇴
                    </button>
                    <button
                      className={`${c.type4} ${
                        selectedTab === "결근" ? c.active4 : ""
                      }`}
                      onClick={() => setSelectedTab("결근")}
                    >
                      <X size={12} color="#e11d48" />
                      결근
                    </button>
                    <button
                      className={`${c.type5} ${
                        selectedTab === "연차" ? c.active5 : ""
                      }`}
                      onClick={() => setSelectedTab("연차")}
                    >
                      <CalendarCheck size={12} color="#16a34a" />
                      연차
                    </button>
                    <button
                      className={`${c.type6} ${
                        selectedTab === "반차" ? c.active6 : ""
                      }`}
                      onClick={() => setSelectedTab("반차")}
                    >
                      <Calendar size={12} color="#0284c7" />
                      반차
                    </button>
                    <button
                      className={`${c.type7} ${
                        selectedTab === "퇴근" ? c.active7 : ""
                      }`}
                      onClick={() => setSelectedTab("퇴근")}
                    >
                      <Plane size={12} color="#7c3aed" />
                      {/* 출장 */}퇴근
                    </button>
                    <button
                      className={`${c.type1} ${
                        selectedTab === "교육" ? c.active1 : ""
                      }`}
                      onClick={() => setSelectedTab("교육")}
                    >
                      <BookOpen
                        size={12}
                        color={selectedTab === "교육" ? "#ffffff" : "#6b7280"}
                      />
                      교육
                    </button>
                    <button
                      className={`${c.type1} ${
                        selectedTab === "공가" ? c.active1 : ""
                      }`}
                      onClick={() => setSelectedTab("공가")}
                    >
                      <ShieldCheck
                        size={12}
                        color={selectedTab === "공가" ? "#ffffff" : "#6b7280"}
                      />
                      공가
                    </button>
                  </div>
                </div>
                {selectedTab === "출근" && (
                  <>
                    <div className={c.time}>
                      <div className={c.timeBox}>
                        <label>출근 시간</label>
                        <div className={c.workTime}>
                          09:00
                          <Clock size={13} color="#9ca3af" />
                        </div>
                      </div>
                      <div className={c.timeBox}>
                        <label>퇴근 시간</label>
                        <div className={c.workTime}>
                          18:00
                          <Clock size={13} color="#9ca3af" />
                        </div>
                      </div>
                    </div>
                    <div className={c.over}>
                      <div className={c.overTitle}>
                        <label>초과근무&#40;OT&#41;</label>
                        <div className={c.switchContainer}>
                          <button
                            type="button"
                            className={`${c.switchBody} ${isOn ? c.switchOn : ""}`}
                            onClick={toggleHandler}
                          >
                            <div
                              className={`${c.switchBall} ${isOn ? c.ballOn : ""}`}
                            />
                          </button>
                          <span className={c.switchLabel}>적용</span>
                        </div>
                      </div>
                      <div className={c.overBox}>
                        <input type="time" />~<input type="time" />
                        <div className={c.hour}>2.5h</div>
                      </div>
                    </div>
                  </>
                )}

                {selectedTab === "지각" && (
                  <>
                    <div className={c.lateInfo}>
                      <Info size={14} color="#ea580c" />
                      지각 시간이 자동으로 계산됩니다.
                    </div>
                    <div className={c.time}>
                      <div className={c.timeBox}>
                        <label>
                          출근 시간 <span className={c.late}>지각</span>
                        </label>
                        <div className={c.lateTime}>
                          10:30
                          <Clock size={13} color="#ea580c" />
                        </div>
                      </div>
                      <div className={c.timeBox}>
                        <label>퇴근 시간</label>
                        <div className={c.workTime}>
                          09:00
                          <Clock size={13} color="#9ca3af" />
                        </div>
                      </div>
                    </div>
                    <div className={c.lateReason}>
                      <label>지각 사유</label>
                      <select name="" id="">
                        <option value="교통 지연">교통지연</option>
                        <option value="교통 지연">교통지연</option>
                        <option value="교통 지연">교통지연</option>
                        <option value="교통 지연">교통지연</option>
                        <option value="교통 지연">교통지연</option>
                      </select>
                    </div>
                  </>
                )}

                {selectedTab === "조퇴" && (
                  <>
                    <div className={c.leaveEarlyInfo}>
                      <Info size={14} color="#6b7280" />
                      조퇴 시간 이후는 결근으로 처리됩니다.
                    </div>
                    <div className={c.time}>
                      <div className={c.timeBox}>
                        <label>출근 시간</label>
                        <div className={c.workTime}>
                          09:00
                          <Clock size={13} color="#9ca3af" />
                        </div>
                      </div>
                      <div className={c.timeBox}>
                        <label>
                          조퇴 시간 <span className={c.leaveEarly}>필수</span>
                        </label>
                        <div className={c.leaveEarlyTime}>
                          <input
                            type="time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                          />
                          {/* <input
                            type="text"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                          />
                          <Clock size={13} color="#374151" /> */}
                        </div>
                      </div>
                    </div>
                    <div className={c.lateReason}>
                      <label>조퇴 사유</label>
                      <select
                        value={selectedEarlyReason}
                        onChange={(e) => setSelectedEarlyReason(e.target.value)}
                      >
                        <option value="개인 사정">개인 사정</option>
                        <option value="병원 진료">병원 진료</option>
                        <option value="가족 행사">가족 행사</option>
                        <option value="기타">기타</option>
                      </select>
                    </div>
                  </>
                )}

                {selectedTab === "연차" && (
                  <>
                    <div className={c.vactionSate}>
                      <div className={c.stateTitle}>
                        <div className={c.state}>
                          <Calendar size={13} color="#16a34a" />
                          연차 현황
                        </div>
                        <div className={c.standard}>2025년 기준</div>
                      </div>
                      <div className={c.days}>
                        <div className={c.daysBox}>
                          <div className={c.totalDays}>15일</div>
                          <span className={c.daysText}>총 부여</span>
                        </div>
                        <div className={c.line}></div>
                        <div className={c.daysBox}>
                          <div className={c.useDays}>8일</div>
                          <span className={c.daysText}>사용</span>
                        </div>
                        <div className={c.line}></div>
                        <div className={c.daysBox}>
                          <div className={c.remainDays}>7일</div>
                          <span className={c.daysText2}>잔여</span>
                        </div>
                        <div className={c.line}></div>
                        <div className={c.daysBox}>
                          <div className={c.applyDays}>2일</div>
                          <span className={c.daysText3}>이번 신청</span>
                        </div>
                      </div>
                    </div>
                    <div className={c.timeBox}>
                      <label>
                        연차 기간 <span className={c.necessary}>*</span>
                      </label>
                      <div className={c.vacationPeriod}>
                        <input
                          type="date"
                          value={startHolidayDate}
                          onChange={(e) => setStartHolidayDate(e.target.value)}
                        />
                        ~
                        <input
                          type="date"
                          value={endHolidayDate}
                          onChange={(e) => setEndHolidayDate(e.target.value)}
                        />
                      </div>
                      <div className={c.totalMinusPeriod}>
                        <div className={c.minusPeriod}>
                          <Clock size={12} color="#16a34a" />총 2일 차감
                        </div>
                        <div className={c.remainDaysInfo}>
                          <Info size={12} color="#9ca3af" />
                          신청 후 잔여 5일
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {selectedTab === "공가" && (
                  <>
                    <div className={c.officialLeaveType}>
                      <label>
                        공가 구분 <span className={c.necessary}>*</span>
                      </label>
                      <select name="" id="">
                        <option value="개인 사정">개인 사정</option>
                        <option value="개인 사정">개인 사정</option>
                        <option value="개인 사정">개인 사정</option>
                        <option value="개인 사정">개인 사정</option>
                        <option value="개인 사정">개인 사정</option>
                      </select>
                    </div>
                    <div className={c.timeBox}>
                      <label>
                        공가 기간 <span className={c.necessary}>*</span>
                      </label>
                      <div className={c.officialLeavePeriod}>
                        <input type="date" /> ~ <input type="date" />
                      </div>
                      <div className={c.totalPeriod}>
                        <Clock size={12} color="#1d4ed8" />총 2일
                      </div>
                    </div>
                    <div className={c.timeBox}>
                      <label>
                        증빙 서류
                        <span className={c.necessaryText}>(필수)</span>
                      </label>
                      <div className={c.evidential}>
                        <div className={c.document}>
                          <Paperclip size={14} color="#6b7280" />
                          훈련소집통지서.pdf
                        </div>
                        <div className={c.docBtn}>
                          <button className={c.docDelBtn}>
                            <Trash2 size={14} color="#ef4444" /> 삭제
                          </button>
                          <button className={c.docPulsBtn}>
                            <Plus size={16} color="#374151" /> 추가
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className={c.note}>
                  <label>{selectedTab === "연차" ? "연차 사유" : "비고"}</label>
                  <textarea
                    placeholder={
                      selectedTab === "연차"
                        ? "연차 사유를 입력하세요."
                        : "특이사항을 입력하세요."
                    }
                  />
                </div>
                <div className={c.btnBox}>
                  <button className={c.resetBtn}>
                    <RotateCcw size={12} color="#6b7280" />
                    초기화
                  </button>
                  <button
                    className={c.saveBtn}
                    onClick={() => saveAttendance()}
                  >
                    <Save size={12} color="#ffffff" />
                    저장
                  </button>
                </div>
              </div>
            </div>

            <div className={c.listBox}>
              <div className={c.table}>
                <div className={c.tableTitleBox}>
                  <div className={c.tableTitle}>
                    <ListChecks size={15} color="#1b3a6b" />
                    2025.07.01 근태 목록
                  </div>
                  <div className={c.tableSearch}>
                    <div className={c.tableLenght}>총 {10}명</div>
                    <div className={c.totalRegister}>
                      <UsersRound size={12} color="#16a34a" />
                      일괄등록
                    </div>
                  </div>
                </div>

                <table className={c.workTable}>
                  <thead>
                    <tr>
                      <th>
                        <SquareCheck size={16} color="#1b3a6b" />
                      </th>
                      <th>사원번호</th>
                      <th>성명</th>
                      <th>부서</th>
                      <th>직급</th>
                      <th>근태유형</th>
                      <th>출근시간</th>
                      <th>퇴근시간</th>
                      <th>OT</th>
                      <th>비고</th>
                      <th>관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceList.map((item, idx) => (
                      <tr key={idx}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{item?.employeeNo}</td>
                        <td>{item?.name}</td>
                        <td>{item?.departmentName}</td>
                        <td>{item?.positionName}</td>
                        <td>
                          <div className={getStatusClass(item?.attendanceStatusCode)}>
                            <span></span>
                            {item?.attendanceStatusCode
                              ? item?.attendanceStatusCode
                              : "미등록"}
                          </div>
                        </td>
                        <td>
                          {item?.checkInTime
                            ? `${new Date(item?.checkInTime).getHours()}:${new Date(item?.checkInTime).getMinutes()}`
                            : "-"}
                        </td>
                        <td>
                          {item?.checkOutTime
                            ? `${new Date(item?.checkOutTime).getHours()}:${new Date(item?.checkOutTime).getMinutes()}`
                            : "-"}
                        </td>
                        <td>-</td>
                        <td>{item?.comment || "-"}</td>
                        <td>
                          <button className={c.editBtn}>수정</button>
                          <button className={c.delBtn}>삭제</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={4} className={c.sum}>
                        합계
                      </td>
                      <td className={c.inquire}>{attendanceList.length}명 조회</td>
                      <td className={c.averageTime}>
                        평균<p>09:05</p>
                      </td>
                      <td className={c.averageTime}>
                        평균<p>18:09</p>
                      </td>
                      <td className={c.sumTime}>
                        합계<p>3.0h</p>
                      </td>
                      <td colSpan={3}></td>
                    </tr>
                  </tfoot>
                </table>
                {/* <TableFooter totalCount={length} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
