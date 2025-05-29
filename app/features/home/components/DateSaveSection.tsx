import React, { useState } from "react";
import { Calendar } from "~/common/components/ui/calendar";

export default function DateSaveSection() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      console.log(`/explore/${selectedDate.toISOString().split("T")[0]}`);
    }
  };

  return (
    <section className="max-w-4xl mx-auto my-16 px-4 z-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 달력 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <i className="fas fa-calendar-alt text-pink-400 mr-2"></i>
              <span className="text-lg font-medium">
                날짜 선택하고 미리보기
              </span>
            </div>
            <p className="text-sm text-white/60 mb-2 italic">
              생성은 로그인 후 가능합니다.
            </p>
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => {
                setDate(d);
                handleDateSelect(d);
              }}
              className="w-full rounded-xl border border-white/20 bg-white/5 backdrop-blur-md p-4 shadow-lg"
            />
          </div>
        </div>

        {/* 회상 저장 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <i className="fas fa-pencil-alt text-pink-400 mr-2"></i>
              <span className="text-lg font-medium">내 회상 저장하기</span>
            </div>
            <p className="text-sm text-white/60 mb-4 italic">
              회상은 로그인 후 저장할 수 있어요.
            </p>

            <button
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
              onClick={() => (window.location.href = "/login")}
            >
              로그인하고 저장하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
