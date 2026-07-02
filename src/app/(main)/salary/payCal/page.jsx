"use client";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";
import {
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  RotateCcw,
  SlidersHorizontal,
  TableIcon,
} from "lucide-react";
import StateCard from "@/component/common/StateCard";
import PayCard from "@/component/common/PayCard";
import Table from "@/component/common/Table";

export default function Page() {
  return (
    <div className={c.wrap}>
      <Nav />

      <div className={c.continer}>
        <Aside
          dummy={[
            {
              titleInfo: {
                iconPath: "/images/Banknote-3.png",
                titleName: "급여관리",
              },
              submenuList: [
                "급여기본정보관리",
                "급여지급",
                "기본수당외수당관리",
                "급여계산",
                "급여조회",
              ],
            },
            {
              titleInfo: {
                iconPath: "/images/Shield Check-blue.png",
                titleName: "4대보험관리",
              },
              submenuList: [
                "4대보험요율표설정",
                "국민연금관리",
                "건강보험관리",
                "고용보험관리",
                "4대보험취득/상실",
              ],
            },
          ]}
        />

        <div className={c.main}>
          <PageTitle
            location={["급여관리", "급여계산"]}
            title="급여계산"
            subTitle="계산기준월을 선택하고 조건을 설정한 후 전 직원 급여를 자동 계산합니다."
            buttons={[
              {
                img: "/images/Download.png",
                text: "PDF 다운로드",
              },
              {
                img: "/images/Edit.png",
                text: "전직원 일괄계산",
                bgColor: "#2563eb",
                textColor: "#ffffff",
              },
              {
                img: "/images/Plus.png",
                text: "급여확정",
              },
            ]}
          />

          <div className={c.setting}>
            <div className={c.monthSelect}>
              <div className={c.selectBox}>
                <label>계산기준월</label>
                <div className={c.inputBoxs}>
                  <button className={c.prevBtn}>
                    <ChevronLeft size={13} color="#374151" />
                  </button>
                  <div className={c.monthBox}>
                    <Calendar size={13} color="#1b3a6b" />
                    <input type="text" />
                  </div>
                  <button className={c.nextBtn}>
                    <ChevronRight size={13} color="#374151" />
                  </button>
                </div>
              </div>
              <span></span>
              <div className={c.stateBox}>
                <div className={c.state}>
                  <label>계산상태</label>
                  <p className={c.before}>
                    <span></span>계산전
                  </p>
                </div>
                <div className={c.state}>
                  <label>확정상태</label>
                  <p className={c.decide}>
                    <span></span>미확정
                  </p>
                </div>
              </div>
            </div>

            <div className={c.condition}>
              <div className={c.conditionTitleBox}>
                <div className={c.conditionTitle}>
                  <SlidersHorizontal size={14} color="#1b3a6b" />
                  계산조건 설정
                </div>
                <button className={c.basic}>
                  <RotateCcw size={11} color="#6b7280" />
                  기본값
                </button>
              </div>
              <div className={c.conditionType}>
                <div className={c.type}>
                  <div className={c.typeName}>
                    <label htmlFor="">근태 데이터 연동</label>
                    <span>야근·지각 데이터 자동 반영</span>
                  </div>
                  <label className={c.switch}>
                    <input type="checkbox" className={c.checkbox} />
                    <span className={c.slider}></span>
                  </label>
                </div>
                <div className={c.type}>
                  <div className={c.typeName}>
                    <label htmlFor="">간이세액표 적용</label>
                    <span>국세청 간이세액 기준 소득세 계산</span>
                  </div>
                  <label className={c.switch}>
                    <input type="checkbox" className={c.checkbox} />
                    <span className={c.slider}></span>
                  </label>
                </div>
                <div className={c.type}>
                  <div className={c.typeName}>
                    <label htmlFor="">원 단위 반올림</label>
                    <span>1원 미만 반올림 처리</span>
                  </div>
                  <label className={c.switch}>
                    <input type="checkbox" className={c.checkbox} />
                    <span className={c.slider}></span>
                  </label>
                </div>
                <div className={c.type}>
                  <div className={c.typeName}>
                    <label htmlFor="">지방소득세 자동포함</label>
                    <span>소득세의 10% 자동 산출</span>
                  </div>
                  <label className={c.switch}>
                    <input type="checkbox" className={c.checkbox} />
                    <span className={c.slider}></span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className={c.cardBox}>
            <StateCard
              title="지급합계"
              value="28,640,000원"
              bg="linear-gradient(135deg, #2d5f9e 0%, #1b3a6b 100%)"
              titleColor="#93c5fd"
              valueColor="white"
              borderColor="none"
              subColor="#60a5fa"
              subcontent="기본급 25,760,000 + 수당 2,880,000"
            />
            <StateCard
              title="공제합계"
              value="4,128,060원"
              bg="white"
              titleColor="#9ca3af"
              valueColor="#374151"
              borderColor="#e5e7eb"
              subColor="#6b7280"
              subcontent="4대보험 3,408,060 + 소득세 720,000"
            />
            <StateCard
              title="실지급합계"
              value="24,511,940원"
              bg="#f0fdf4"
              titleColor="#16a34a"
              valueColor="#15803d"
              borderColor="#bbf7d0"
              subColor="#16a34a"
              subcontent="대상인원 8명"
            />
            <StateCard
              title="계산 대상"
              value="3,340,000원"
              bg="#eff6ff"
              titleColor="#3b82f6"
              valueColor="#1e40af"
              borderColor="#bfdbfe"
              subColor="#3b82f6"
              subcontent="1인 평균 3,063,993원"
            />
            <StateCard
              title="지급상태"
              value="+206,000원"
              bg="#fffbeb"
              titleColor="#d97706"
              valueColor="#92400e"
              subColor="#d97706"
              subcontent="야근수당 증가 영향"
            />
          </div>

          <div className={c.table}>
            <div className={c.tableTitleBox}>
              <div className={c.tableTitle}>
                <TableIcon size={14} color="#1b3a6b" />
                2025년 7월 급여계산 미리보기
              </div>
              <div className={c.total}>
                <div className={c.tableLenght}>총 {8}명</div>
                <div className={c.basicPay}>
                  <span></span>지급
                </div>
                <div className={c.payList}>
                  <span></span>공제
                </div>
                <div className={c.account}>
                  <span></span>실지급
                </div>
                <button className={c.retryBtn}>
                  <RefreshCw size={11} color="#2563eb" />
                  재계산
                </button>
              </div>
            </div>

            <Table
              columns={[
                "사원번호",
                "성명",
                "부서",
                "직급",
                "입사일",
                "근속연수",
                "기본일수",
                "가산일수",
                "이월일수",
                "총 부여일수",
                "사용일수",
                "잔여일수",
                "상태",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
