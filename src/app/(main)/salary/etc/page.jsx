"use client";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";
import StateCard from "@/component/common/StateCard";
import {
  Award,
  BadgeCheck,
  Bookmark,
  Calendar,
  Clock,
  Layers,
  MoonStar,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import PayCard from "@/component/common/PayCard";
import { useState } from "react";

export default function Page({ isOn: externalIsOn, handleToggle }) {
  const [internalIsOn, setInternalIsOn] = useState(true);

  // 2. 근태 데이터 연동 스위치용 독자적인 내부 상태 (추가)
  const [linkIsOn, setLinkIsOn] = useState(true);

  // 야근 수당 스위치 상태 및 토글 함수
  const isChecked = externalIsOn !== undefined ? externalIsOn : internalIsOn;
  const onToggle = handleToggle || (() => setInternalIsOn(!internalIsOn));

  // 근태 데이터 연동 스위치 토글 함수 (추가)
  const onLinkToggle = () => setLinkIsOn(!linkIsOn);

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
            location={["급여관리", "기본수당외수당관리"]}
            title="기본수당외수당관리"
            subTitle="기본급 외 수당 종류를 정의하고 직원별 지급 내역을 관리합니다."
            downloadBtnImg="/images/Download.png"
            downloadBtnText="PDF 다운로드"
            addBtnImg="/images/Plus.png"
            addBtnText="수당 추가"
          />

          <div className={c.state}>
            <StateCard
              title="등록 수당 종류"
              value="7종"
              bg="#1b3a6b"
              titleColor="#93c5fd"
              valueColor="white"
              borderColor="none"
              subColor="#60a5fa"
              subcontent="활성 6 · 비활성 1"
            />
            <StateCard
              title="과세 수당"
              value="4종"
              bg="white"
              titleColor="#9ca3af"
              valueColor="#374151"
              borderColor="#e5e7eb"
              subBoxColor="#fef9c3"
              user="소득세 적용"
              subBoxTextColor="#ca8a04"
            />
            <StateCard
              title="비과세 수당"
              value="3종"
              bg="#f0fdf4"
              titleColor="#16a34a"
              valueColor="#15803d"
              borderColor="#bbf7d0"
              subBoxColor="#dcfce7"
              user="소득세 면제"
              subBoxTextColor="#16a34a"
            />
            <StateCard
              title="이번달 수당 총액"
              value="3,340,000원"
              bg="#eff6ff"
              titleColor="#3b82f6"
              valueColor="#1e40af"
              borderColor="#bfdbfe"
              subColor="#3b82f6"
              subcontent="8명 대상"
            />
            <StateCard
              title="전월 대비"
              value="+120,000원"
              bg="#fffbeb"
              titleColor="#d97706"
              valueColor="#92400e"
              borderColor="#fde68a"
              subColor="#d97706"
              subcontent="야근수당 증가"
            />
          </div>

          <div className={c.setUP}>
            <div className={c.payList}>
              <div className={c.payListTitle}>
                <div className={c.titleBox}>
                  <Layers size={15} color="#1b3a6b" /> 수당 종류 목록
                </div>
                <div className={c.totalLenght}>7종</div>
              </div>
              <div className={c.listCard}>
                <PayCard
                  Icon={MoonStar}
                  iconColor="#2563eb"
                  title="야근수당"
                  activeType="활성"
                  imgbox="#dbeafe"
                  description="시간당 10,000원 · 과세"
                  taxType="과세"
                />
                <PayCard
                  Icon={Award}
                  title="직책수당"
                  activeType="활성"
                  description="직책별 고정 지급 · 과세"
                  taxType="과세"
                />
                <PayCard
                  Icon={BadgeCheck}
                  title="자격증수당"
                  activeType="활성"
                  description="자격증 보유 시 월 50,000원 · 비과세"
                  taxType="비과세"
                />
                <PayCard
                  Icon={Users}
                  title="가족수당"
                  activeType="활성"
                  description="부양가족 1인당 30,000원 · 비과세"
                  taxType="비과세"
                />
                <PayCard
                  Icon={TrendingUp}
                  title="장기근속수당"
                  activeType="활성"
                  description="5년 이상 월 100,000원 · 과세"
                  taxType="과세"
                />
                <PayCard
                  Icon={Star}
                  title="특별성과수당"
                  activeType="활성"
                  description="비정기 지급 · 과세"
                  taxType="과세"
                />
                <PayCard
                  Icon={Calendar}
                  title="휴일근무수당"
                  iconColor="#d1d5db"
                  activeType="비활성"
                  imgbox="#f1f5f9"
                  description="약 1.5배 지급 · 과세"
                  taxType="과세"
                />
              </div>
            </div>

            <div className={c.setting}>
              <div className={c.settingTitle}>
                <div className={c.titleBox}>
                  <div className={c.imgBox}>
                    <MoonStar size={15} color="#2563eb" />
                  </div>
                  <div className={c.titleText}>
                    <p>야근 수당 상세 설정</p>
                    <span>Overtime Allowance</span>
                  </div>
                </div>
                <div className={c.active}>
                  <div className={c.activeText}>
                    <span></span>활성
                  </div>
                  <label className={c.switch}>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={onToggle}
                      className={c.checkbox}
                    />
                    <span className={c.slider}></span>
                  </label>
                </div>
              </div>
              <div className={c.settingInput}>
                <div className={c.settingInputBox}>
                  <div className={c.inputTitle}>
                    <span></span>
                    <p>기본 설정</p>
                  </div>
                  <div className={c.inputContent}>
                    <div className={c.inputBox}>
                      <label htmlFor="">수당명</label>
                      <input type="text" className={c.payName} />
                    </div>
                    <div className={c.inputBox}>
                      <label htmlFor="">수당 코드</label>
                      <div className={c.code}>OT001</div>
                    </div>
                  </div>
                  <div className={c.inputContent}>
                    <div className={c.inputBox}>
                      <label htmlFor="">
                        계산 방식<span className={c.necessary}>*</span>
                      </label>
                      <div className={c.calBtn}>
                        <button className={c.time}>
                          <Clock size={12} color="#ffffff" />
                          시간당
                        </button>
                        <button className={c.day}>
                          <Calendar size={12} color="#6b7280" />
                          일당
                        </button>
                        <button className={c.fixed}>
                          <Bookmark size={12} color="#6b7280" />
                          고정금액
                        </button>
                      </div>
                    </div>
                    <div className={c.inputBox}>
                      <label htmlFor="">
                        시간당 단가<span className={c.necessary}>*</span>
                      </label>
                      <div className={c.unitCost}>
                        <input type="text" />원 / 시간
                      </div>
                    </div>
                  </div>
                  <div className={c.inputContent}>
                    <div className={c.inputBox}>
                      <label htmlFor="">
                        과세 여부<span className={c.necessary}>*</span>
                      </label>
                      <div className={c.taxBtn}>
                        <button className={c.tax}>
                          <Clock size={12} color="#ffffff" />
                          과세
                        </button>
                        <button className={c.taxFree}>
                          <Calendar size={12} color="#6b7280" />
                          비과세
                        </button>
                      </div>
                    </div>
                    <div className={c.inputBox}>
                      <label htmlFor="">수당 코드</label>
                      <div className={c.autoReflect}>
                        근태 데이터 연동
                        <label className={c.switch}>
                          <input
                            type="checkbox"
                            checked={linkIsOn}
                            onChange={onLinkToggle}
                            className={c.checkbox}
                          />
                          <span className={c.slider}></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={c.line}></div>

                <div className={c.settingInputBox}>
                  <div className={c.inputTitle}>
                    <span></span>
                    <p>적용 직급 범위</p>
                  </div>
                  <div className={c.applyRank}>
                    <button className={c.executive}>
                      <span></span>임원
                    </button>
                    <button className={c.rank}>
                      <span></span>부장
                    </button>
                    <button className={c.rank}>
                      <span></span>차장
                    </button>
                    <button className={c.rank}>
                      <span></span>과장
                    </button>
                    <button className={c.rank}>
                      <span></span>대리
                    </button>
                    <button className={c.rank}>
                      <span></span>사원
                    </button>
                  </div>
                </div>

                <div className={c.line}></div>

                <div className={c.settingInputBox}>
                  <div className={c.inputTitle}>
                    <span></span>
                    <p>한도 및 조건 설정</p>
                  </div>
                  <div className={c.limit}>
                    <div className={c.inputBox}>
                      <label htmlFor="">월 최대 시간</label>
                      <div className={c.unitCost}>
                        <input type="text" />
                        시간
                      </div>
                    </div>
                    <div className={c.inputBox}>
                      <label htmlFor="">최소 인정 시간</label>
                      <div className={c.unitCost}>
                        <input type="text" />
                        시간
                      </div>
                    </div>
                    <div className={c.inputBox}>
                      <label htmlFor="">계산 단위</label>
                      <div className={c.cal}>
                        <select name="" id="">
                          <option value="30분 단위">30분 단위</option>
                          <option value="30분 단위">30분 단위</option>
                          <option value="30분 단위">30분 단위</option>
                          <option value="30분 단위">30분 단위</option>
                          <option value="30분 단위">30분 단위</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={c.line}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
