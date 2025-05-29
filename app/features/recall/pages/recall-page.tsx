import { type FC } from "react";
import { useNavigate } from "react-router";
import { Calendar } from "~/common/components/ui/calendar";
import { Button } from "~/common/components/ui/button";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import React from "react";

const RecallPage: FC = () => {
  const navigate = useNavigate();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleSubmit = () => {
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd");
      navigate(`/recall/${formattedDate}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">회상하기</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 mb-4">회상하고 싶은 날짜를 선택해주세요.</p>
        <div className="flex flex-col items-center gap-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            locale={ko}
            className="rounded-md border"
          />
          <Button
            onClick={handleSubmit}
            disabled={!date}
            className="w-full max-w-xs"
          >
            선택한 날짜로 회상하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecallPage;
