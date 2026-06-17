"use client";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";
import { Building2, ChevronLeft, Calendar, ChevronRight } from "lucide-react";

export default function page() {
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
            location={["급여관리", "4대보험관리", "4대보험요율표설정"]}
            title="4대보험요율표설정"
            subTitle="연도별 4대보험 요율을 설정하고 직원별 예상 보험료를 시뮬레이션합니다."
            downloadBtnImg="/images/Download.png"
            downloadBtnText="PDF 다운로드"
            addBtnImg="/images/Save.png"
            addBtnText="요율 저장"
          />

          <div className={c.search}>
            <div className={c.searchBox}>
              <div className={c.dateBox}>
                <label>조회연도</label>
                <div>
                  <div className={c.beforeBtn}>
                    <ChevronLeft size={13} color="#374151" />
                  </div>
                  <div className={c.dateInput}>
                    <Calendar size={13} color="#1b3a6b" />
                    <input type="text" />
                  </div>
                  <button className={c.nextBtn}>
                    <ChevronRight size={13} color="#374151" />
                  </button>
                </div>
              </div>
              .
            </div>

            <div className={c.yearBtnBox}>
              <button className={c.yearBtn}>2023</button>
              <button className={c.yearBtn}>2024</button>
              <button className={`${c.yearBtn} ${c.click}`}>2025</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
