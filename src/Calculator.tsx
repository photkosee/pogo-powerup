import {
  InputNumber,
  Typography,
  Slider,
  SliderSingleProps,
  Radio,
  Checkbox,
  Tooltip,
  Button,
} from "antd";
import { useState } from "react";
import calculate from "./calculate";

const options = [
  { label: "Normal", value: "Normal" },
  { label: "Purified", value: "Purified" },
  { label: "Shadow", value: "Shadow" },
];

const Calculator = () => {
  const [startLevel, setStartLevel] = useState(1);
  const [targetLevel, setTargetLevel] = useState(50);
  const [isLucky, setIsLucky] = useState(false);
  const [type, setType] = useState("Normal");
  const [candy, setCandy] = useState(0);
  const [xl, setXl] = useState(0);
  const [stardust, setStardust] = useState(0);

  const onChangeSlider = (value: number[] | null) => {
    if (value == null || value[0] == value[1]) return;
    setStartLevel(value[0]);
    setTargetLevel(value[1]);
  };

  const onClickCalculate = () => {
    const result = calculate({
      startingLevel: startLevel * 2 - 1,
      targetLevel: targetLevel * 2 - 1,
      isLucky: isLucky && type !== "Shadow",
      isShadow: type === "Shadow",
      isPurified: type === "Purified",
    });

    setCandy(result.candy);
    setXl(result.xl);
    setStardust(result.stardust);
  };

  const marks: SliderSingleProps["marks"] = {
    1: "level 1",
    50: "level 50",
  };

  return (
    <div className="h-full flex flex-col items-center gap-y-5">
      <div
        className="flex flex-col gap-y-3 sm:gap-y-5 w-full px-10
        justify-center items-center"
      >
        <Slider
          range
          defaultValue={[1, 25]}
          step={0.5}
          min={1}
          max={50}
          marks={marks}
          onChange={(value) => {
            onChangeSlider(value);
          }}
          value={[startLevel, targetLevel]}
          className="min-w-[200px] w-full"
        />
        <div className="flex gap-x-5">
          <div className="flex flex-col items-center">
            <Typography.Title level={5}>Start Level</Typography.Title>
            <InputNumber
              min={1}
              max={targetLevel - 0.5}
              step={0.5}
              value={startLevel}
              onChange={(value) => value != null && setStartLevel(value)}
            />
          </div>
          <div className="flex flex-col items-center">
            <Typography.Title level={5}>Target Level</Typography.Title>
            <InputNumber
              min={startLevel + 0.5}
              max={50}
              step={0.5}
              value={targetLevel}
              onChange={(value) => value != null && setTargetLevel(value)}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 items-center">
          <Radio.Group
            options={options}
            onChange={(e) => setType(e.target.value)}
            value={type}
            optionType="button"
            buttonStyle="solid"
          />

          <Checkbox
            onChange={() => setIsLucky(!isLucky)}
            checked={type === "Shadow" ? false : isLucky}
            disabled={type === "Shadow"}
          >
            <Tooltip
              title="Shadow cannot be lucky"
              placement="right"
              open={type === "Shadow"}
            >
              Lucky
            </Tooltip>
          </Checkbox>
        </div>

        <Button type="primary" onClick={onClickCalculate}>
          Calculate
        </Button>
      </div>

      <div className="w-full h-full sm:px-7">
        <div className="w-full h-full bg-[#53759a] flex flex-col gap-y-3 sm:rounded-3xl p-5">
          <p className="font-semibold text-white text-xl lg:text-2xl">
            Power up Costs
          </p>
          <div className="w-full bg-white flex rounded-xl p-3 gap-x-5 items-center">
            <img src="/candy.png" className="w-7" />
            {candy}
          </div>
          <div className="w-full bg-white flex rounded-xl p-3 gap-x-5 items-center">
            <img src="/xl.png" className="w-7" />
            {xl}
          </div>
          <div className="w-full bg-white flex rounded-xl p-3 gap-x-5 items-center">
            <img src="/stardust.png" className="w-7" />
            {stardust}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
